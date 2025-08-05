-- Fix security issues with search path

-- Update the article count function with secure search path
CREATE OR REPLACE FUNCTION update_article_count()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;

-- Update the personalized articles function with secure search path  
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
) 
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
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
$$;