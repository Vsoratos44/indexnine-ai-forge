import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Clock, User, ArrowRight } from 'lucide-react';

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software Development",
      excerpt: "Explore how artificial intelligence is transforming enterprise software development and what it means for businesses in 2025.",
      author: "Sarah Chen",
      publishDate: "January 15, 2025",
      readTime: "8 min read",
      category: "AI & Technology",
      featured: true
    },
    {
      title: "Microservices vs Monolith: Making the Right Choice",
      excerpt: "A comprehensive guide to choosing between microservices and monolithic architecture for your next project.",
      author: "Michael Rodriguez",
      publishDate: "January 12, 2025",
      readTime: "12 min read",
      category: "Architecture"
    },
    {
      title: "Building Scalable Data Pipelines in the Cloud",
      excerpt: "Best practices for designing and implementing data pipelines that can handle enterprise-scale workloads.",
      author: "David Kim",
      publishDate: "January 10, 2025",
      readTime: "10 min read",
      category: "Data Engineering"
    },
    {
      title: "Security-First Development: A Modern Approach",
      excerpt: "How to integrate security considerations into every stage of the software development lifecycle.",
      author: "Emily Thompson",
      publishDate: "January 8, 2025",
      readTime: "7 min read",
      category: "Security"
    },
    {
      title: "The ROI of Quality Assurance in Software Projects",
      excerpt: "Understanding the financial impact of comprehensive QA processes and how they save money long-term.",
      author: "James Wilson",
      publishDate: "January 5, 2025",
      readTime: "9 min read",
      category: "Quality Assurance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Tech <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Stay ahead of the curve with our latest insights on technology trends, best practices, and industry developments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post, index) => (
        <section key={index} className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-card backdrop-blur-xl rounded-3xl p-12 shadow-glass-lg border border-glass-border">
                <div className="mb-4">
                  <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-2 rounded-full font-montserrat">
                    Featured Post
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-montserrat">{post.title}</h2>
                <p className="text-xl text-foreground-muted mb-8 leading-relaxed font-montserrat">{post.excerpt}</p>
                
                <div className="flex items-center gap-6 mb-8 text-sm text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-montserrat">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-montserrat">{post.readTime}</span>
                  </div>
                  <span className="font-montserrat">{post.publishDate}</span>
                </div>
                
                <Button variant="ghost" className="text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                  Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">Latest Posts</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                <div className="mb-4">
                  <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat leading-tight">{post.title}</h3>
                <p className="text-foreground-muted mb-6 leading-relaxed font-montserrat">{post.excerpt}</p>
                
                <div className="flex items-center gap-4 mb-6 text-sm text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-montserrat">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-montserrat">{post.readTime}</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Want to Share Your Insights?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Join our community of thought leaders and share your expertise with fellow technology professionals.
          </p>
          <Button variant="hero" size="xl">Contribute</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;