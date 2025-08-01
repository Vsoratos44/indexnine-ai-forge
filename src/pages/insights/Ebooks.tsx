import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { BookOpen, Download, Clock, Star } from 'lucide-react';

const Ebooks = () => {
  const ebooks = [
    {
      title: "The Complete Guide to AI-Driven Development",
      description: "A comprehensive 120-page guide covering everything from AI strategy to implementation best practices for modern software development.",
      pages: "120 pages",
      readTime: "45 min read",
      category: "AI & Machine Learning",
      featured: true,
      rating: 4.9,
      downloads: "5.2K"
    },
    {
      title: "Digital Transformation Playbook for Enterprises",
      description: "Step-by-step framework for successful digital transformation initiatives in large organizations.",
      pages: "95 pages",
      readTime: "35 min read",
      category: "Digital Transformation",
      rating: 4.8,
      downloads: "3.8K"
    },
    {
      title: "Cloud Migration Strategy Guide",
      description: "Complete guide to planning, executing, and optimizing cloud migration projects for maximum ROI.",
      pages: "78 pages",
      readTime: "30 min read",
      category: "Cloud Computing",
      rating: 4.7,
      downloads: "4.1K"
    },
    {
      title: "Building Scalable Microservices",
      description: "Architecture patterns, best practices, and real-world examples for designing microservices at scale.",
      pages: "156 pages",
      readTime: "55 min read",
      category: "Software Architecture",
      rating: 4.9,
      downloads: "6.3K"
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
              Expert <span className="bg-gradient-primary bg-clip-text text-transparent">eBooks</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              In-depth guides and comprehensive resources to accelerate your technology knowledge and implementation success.
            </p>
          </div>
        </div>
      </section>

      {/* Featured eBook */}
      {ebooks.filter(ebook => ebook.featured).map((ebook, index) => (
        <section key={index} className="py-16 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="bg-gradient-card backdrop-blur-xl rounded-3xl shadow-glass-lg border border-glass-border overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-12">
                    <div className="mb-4">
                      <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-2 rounded-full font-montserrat">
                        Featured eBook
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-montserrat">{ebook.title}</h2>
                    <p className="text-xl text-foreground-muted mb-8 leading-relaxed font-montserrat">{ebook.description}</p>
                    
                    <div className="flex items-center gap-6 mb-8 text-sm text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span className="font-montserrat">{ebook.pages}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{ebook.readTime}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span className="font-montserrat">{ebook.rating}</span>
                      </div>
                    </div>
                    
                    <Button variant="hero" size="lg" className="w-full lg:w-auto">
                      <Download className="w-5 h-5 mr-2" />
                      Download Free eBook
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className="bg-gradient-to-br from-brand-primary/20 to-brand-purple/20 p-12 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="w-32 h-32 text-brand-primary mx-auto mb-4 opacity-80" />
                      <div className="text-foreground-white font-montserrat">
                        <div className="text-3xl font-bold">{ebook.downloads}</div>
                        <div className="text-sm opacity-80">Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* eBooks Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 font-montserrat">More eBooks</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ebooks.filter(ebook => !ebook.featured).map((ebook, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105">
                {/* eBook Icon */}
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <span className="text-sm bg-brand-purple/10 text-brand-purple px-3 py-1 rounded-full font-montserrat">
                    {ebook.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat leading-tight">{ebook.title}</h3>
                <p className="text-foreground-muted mb-6 leading-relaxed font-montserrat">{ebook.description}</p>
                
                <div className="flex items-center justify-between mb-6 text-sm text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-montserrat">{ebook.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="font-montserrat">{ebook.rating}</span>
                  </div>
                </div>
                
                <Button variant="ghost" className="w-full text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                  <Download className="w-4 h-4 mr-2" />
                  Download
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
            Stay Updated with New Releases
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Get notified when we publish new eBooks and exclusive content to help you stay ahead in technology.
          </p>
          <Button variant="hero" size="xl">Subscribe for Updates</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ebooks;