-- Create CMS database schema for enhanced performance

-- CMS Articles table
CREATE TABLE IF NOT EXISTS cms_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  category TEXT,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  author TEXT,
  publish_date DATE,
  views INTEGER DEFAULT 0,
  tags TEXT[],
  seo_title TEXT,
  seo_description TEXT,
  featured_image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- CMS Categories table
CREATE TABLE IF NOT EXISTS cms_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  parent_id UUID REFERENCES cms_categories(id) ON DELETE SET NULL,
  color TEXT DEFAULT '#6B7280',
  article_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- CMS Media table
CREATE TABLE IF NOT EXISTS cms_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size BIGINT NOT NULL,
  url TEXT NOT NULL,
  alt_text TEXT,
  caption TEXT,
  folder TEXT DEFAULT '/',
  tags TEXT[],
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- CMS Users table (for additional profile data)
CREATE TABLE IF NOT EXISTS cms_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE UNIQUE,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'contributor' CHECK (role IN ('super_user', 'manager', 'editor', 'publisher', 'author', 'contributor')),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive', 'suspended')),
  avatar_url TEXT,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Performance indexes
CREATE INDEX IF NOT EXISTS idx_cms_articles_user_id ON cms_articles(user_id);
CREATE INDEX IF NOT EXISTS idx_cms_articles_status ON cms_articles(status);
CREATE INDEX IF NOT EXISTS idx_cms_articles_publish_date ON cms_articles(publish_date);
CREATE INDEX IF NOT EXISTS idx_cms_articles_tags ON cms_articles USING GIN(tags);
CREATE INDEX IF NOT EXISTS idx_cms_articles_featured ON cms_articles(featured) WHERE featured = true;

CREATE INDEX IF NOT EXISTS idx_cms_categories_user_id ON cms_categories(user_id);
CREATE INDEX IF NOT EXISTS idx_cms_categories_slug ON cms_categories(slug);
CREATE INDEX IF NOT EXISTS idx_cms_categories_parent_id ON cms_categories(parent_id);

CREATE INDEX IF NOT EXISTS idx_cms_media_user_id ON cms_media(user_id);
CREATE INDEX IF NOT EXISTS idx_cms_media_file_type ON cms_media(file_type);
CREATE INDEX IF NOT EXISTS idx_cms_media_tags ON cms_media USING GIN(tags);

CREATE INDEX IF NOT EXISTS idx_cms_users_user_id ON cms_users(user_id);
CREATE INDEX IF NOT EXISTS idx_cms_users_role ON cms_users(role);
CREATE INDEX IF NOT EXISTS idx_cms_users_status ON cms_users(status);

-- Enable RLS
ALTER TABLE cms_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE cms_users ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Articles
CREATE POLICY "Users can view published articles or their own" ON cms_articles
  FOR SELECT USING (
    status = 'published' OR 
    user_id = auth.uid() OR
    auth.role() = 'authenticated'
  );

CREATE POLICY "Authors can create their own articles" ON cms_articles
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own articles" ON cms_articles
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own articles" ON cms_articles
  FOR DELETE USING (user_id = auth.uid());

-- RLS Policies for Categories
CREATE POLICY "Categories are viewable by everyone" ON cms_categories
  FOR SELECT USING (true);

CREATE POLICY "Users can create categories" ON cms_categories
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own categories" ON cms_categories
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own categories" ON cms_categories
  FOR DELETE USING (user_id = auth.uid());

-- RLS Policies for Media
CREATE POLICY "Users can view their own media" ON cms_media
  FOR SELECT USING (user_id = auth.uid() OR auth.role() = 'authenticated');

CREATE POLICY "Users can upload media" ON cms_media
  FOR INSERT WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update their own media" ON cms_media
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Users can delete their own media" ON cms_media
  FOR DELETE USING (user_id = auth.uid());

-- RLS Policies for CMS Users
CREATE POLICY "Users can view all CMS users" ON cms_users
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Users can update their own profile" ON cms_users
  FOR UPDATE USING (user_id = auth.uid());

CREATE POLICY "Super users can manage all users" ON cms_users
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM cms_users 
      WHERE user_id = auth.uid() AND role = 'super_user'
    )
  );

-- Trigger functions for performance optimization
CREATE OR REPLACE FUNCTION update_article_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE cms_categories 
    SET article_count = article_count + 1 
    WHERE slug = NEW.category;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE cms_categories 
    SET article_count = article_count - 1 
    WHERE slug = OLD.category;
    RETURN OLD;
  ELSIF TG_OP = 'UPDATE' AND OLD.category != NEW.category THEN
    UPDATE cms_categories 
    SET article_count = article_count - 1 
    WHERE slug = OLD.category;
    UPDATE cms_categories 
    SET article_count = article_count + 1 
    WHERE slug = NEW.category;
    RETURN NEW;
  END IF;
  RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Triggers for maintaining article counts
CREATE TRIGGER trigger_update_article_count
  AFTER INSERT OR UPDATE OR DELETE ON cms_articles
  FOR EACH ROW EXECUTE FUNCTION update_article_count();

-- Function to get personalized content
CREATE OR REPLACE FUNCTION get_personalized_articles(
  user_role TEXT DEFAULT NULL,
  user_tags TEXT[] DEFAULT NULL,
  limit_count INTEGER DEFAULT 10
)
RETURNS TABLE (
  id UUID,
  title TEXT,
  excerpt TEXT,
  category TEXT,
  author TEXT,
  publish_date DATE,
  views INTEGER,
  featured BOOLEAN,
  tags TEXT[]
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    a.id, a.title, a.excerpt, a.category, a.author, 
    a.publish_date, a.views, a.featured, a.tags
  FROM cms_articles a
  WHERE a.status = 'published'
    AND (user_tags IS NULL OR a.tags && user_tags)
  ORDER BY 
    a.featured DESC,
    a.views DESC,
    a.publish_date DESC
  LIMIT limit_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;