import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, Calendar, TrendingUp, User, Tag, Search } from 'lucide-react';
import { usePersonalizedCMSContent } from '@/hooks/useCMSArticles';

interface PersonalizationSettings {
  userTags: string[];
  interests: string[];
  role: string;
}

export default function PersonalizedContent() {
  const [settings, setSettings] = useState<PersonalizationSettings>({
    userTags: [],
    interests: [],
    role: 'visitor'
  });
  const [newTag, setNewTag] = useState('');
  const [newInterest, setNewInterest] = useState('');

  // Get personalized content based on user tags
  const { data: personalizedContent = [], isLoading } = usePersonalizedCMSContent(
    settings.userTags.length > 0 ? settings.userTags : undefined
  );

  const addTag = () => {
    if (newTag.trim() && !settings.userTags.includes(newTag.trim())) {
      setSettings(prev => ({
        ...prev,
        userTags: [...prev.userTags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setSettings(prev => ({
      ...prev,
      userTags: prev.userTags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addInterest = () => {
    if (newInterest.trim() && !settings.interests.includes(newInterest.trim())) {
      setSettings(prev => ({
        ...prev,
        interests: [...prev.interests, newInterest.trim()]
      }));
      setNewInterest('');
    }
  };

  const removeInterest = (interestToRemove: string) => {
    setSettings(prev => ({
      ...prev,
      interests: prev.interests.filter(interest => interest !== interestToRemove)
    }));
  };

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem('personalizationSettings', JSON.stringify(settings));
  }, [settings]);

  // Load settings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('personalizationSettings');
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (error) {
        console.error('Failed to load personalization settings:', error);
      }
    }
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Personalized Content</h2>
        <p className="text-muted-foreground">
          Configure your preferences to receive personalized content recommendations
        </p>
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList>
          <TabsTrigger value="content">Recommended Content</TabsTrigger>
          <TabsTrigger value="settings">Personalization Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {settings.userTags.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Personalization Set</h3>
                <p className="text-muted-foreground mb-4">
                  Configure your interests and tags in the settings tab to see personalized content recommendations
                </p>
                <Button onClick={() => setNewTag('technology')}>
                  Add Sample Tag: Technology
                </Button>
              </CardContent>
            </Card>
          ) : isLoading ? (
            <div className="grid gap-4">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="animate-pulse">
                  <CardHeader>
                    <div className="h-4 bg-muted rounded w-3/4"></div>
                    <div className="h-3 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-3 bg-muted rounded mb-2"></div>
                    <div className="h-3 bg-muted rounded w-2/3"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : personalizedContent.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-semibold mb-2">No Matching Content</h3>
                <p className="text-muted-foreground">
                  No content matches your current interests. Try adjusting your tags or interests in the settings.
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {personalizedContent.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                        <CardDescription>{article.excerpt}</CardDescription>
                      </div>
                      {article.featured && (
                        <Badge variant="secondary">Featured</Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(article.publish_date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          {article.views} views
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {article.tags?.slice(0, 3).map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {(article.tags?.length || 0) > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{(article.tags?.length || 0) - 3} more
                          </Badge>
                        )}
                      </div>
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Interest Tags</CardTitle>
              <CardDescription>
                Add tags that represent your interests to get better content recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add an interest tag (e.g., AI, React, Design)"
                  onKeyPress={(e) => e.key === 'Enter' && addTag()}
                />
                <Button onClick={addTag} disabled={!newTag.trim()}>
                  <Tag className="h-4 w-4 mr-2" />
                  Add
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {settings.userTags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer" onClick={() => removeTag(tag)}>
                    {tag} ×
                  </Badge>
                ))}
                {settings.userTags.length === 0 && (
                  <p className="text-sm text-muted-foreground">No tags added yet</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Content Preferences</CardTitle>
              <CardDescription>
                Set your content preferences for better recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Role</Label>
                <select
                  value={settings.role}
                  onChange={(e) => setSettings(prev => ({ ...prev, role: e.target.value }))}
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="visitor">Visitor</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="product_manager">Product Manager</option>
                  <option value="business_analyst">Business Analyst</option>
                  <option value="executive">Executive</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label>Additional Interests</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    placeholder="Add specific interests"
                    onKeyPress={(e) => e.key === 'Enter' && addInterest()}
                  />
                  <Button onClick={addInterest} disabled={!newInterest.trim()}>
                    Add
                  </Button>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {settings.interests.map((interest) => (
                    <Badge 
                      key={interest} 
                      variant="outline" 
                      className="cursor-pointer" 
                      onClick={() => removeInterest(interest)}
                    >
                      {interest} ×
                    </Badge>
                  ))}
                  {settings.interests.length === 0 && (
                    <p className="text-sm text-muted-foreground">No additional interests added</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Setup</CardTitle>
              <CardDescription>
                Add common tags based on your role
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  'Technology', 'AI/ML', 'Web Development', 'Mobile Development',
                  'Cloud Computing', 'DevOps', 'UI/UX Design', 'Data Science',
                  'Cybersecurity', 'Blockchain', 'IoT', 'Automation'
                ].map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      if (!settings.userTags.includes(tag)) {
                        setSettings(prev => ({
                          ...prev,
                          userTags: [...prev.userTags, tag]
                        }));
                      }
                    }}
                    disabled={settings.userTags.includes(tag)}
                  >
                    {tag}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}