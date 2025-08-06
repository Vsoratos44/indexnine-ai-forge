import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ServiceSchema, WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';
import { Brain, Target, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const AiStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema 
        name="AI Studio - Specialized AI Development Services"
        description="Expert AI development studio offering machine learning, deep learning, and AI solution development services"
        serviceType="AI Development"
      />
      <WebPageSchema 
        title="AI Studio - Expert AI & Machine Learning Development"
        description="Transform your business with cutting-edge AI solutions from our specialized AI development studio. Custom ML models, AI applications, and intelligent automation"
        url="https://yoursite.lovable.app/studios/ai-studio"
      />
      <BreadcrumbSchema items={[
        { name: 'Home', url: 'https://yoursite.lovable.app/' },
        { name: 'Studios', url: 'https://yoursite.lovable.app/studios' },
        { name: 'AI Studio', url: 'https://yoursite.lovable.app/studios/ai-studio' }
      ]} />
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-gradient-hero">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine AI Studio
              </span>
            </div>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in">
              AI-Powered Business <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Transformation</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              We provide strategic AI consulting and end-to-end AI product development to help you navigate complexity, drive efficiency, and unlock new revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Work with an AI Consultant
              </Button>
              <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
                Get Your AI P2R Score
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Dilemma Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
              The AI Dilemma: Potential vs. Reality
            </h2>
            <p className="text-lg text-foreground-dark-muted mb-12 max-w-3xl mx-auto">
              AI promises to revolutionize business, but most initiatives fail to deliver meaningful ROI. The gap between potential and reality often comes down to strategy, readiness, and execution. We bridge that gap.
            </p>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section id="ai-consulting" className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Clarity Before Code: Our AI Consulting Practice
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                We help you discover and de-risk your AI opportunities before investing in development. Our structured approach ensures your AI initiatives deliver measurable business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Standard AI Audit</h3>
                  <p className="text-foreground/80 mb-6">
                    4-Week Assessment: Comprehensive evaluation of your AI readiness, potential opportunities, and strategic roadmap development.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Business context analysis and strategy alignment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Asset inventory and opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Prioritized AI roadmap with ROI projections</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pro AI Audit</h3>
                  <p className="text-foreground/80 mb-6">
                    8-Week Deep-Dive: Extended assessment including proof-of-concept development and detailed implementation planning.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Everything in Standard Audit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Working proof-of-concept development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Detailed technical architecture and governance framework</span>
                    </li>
                  </ul>
                  <Button variant="default" className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* P2R Framework Section */}
      <section id="ai-p2r-framework" className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Our AI P2R Assessment Framework
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                We evaluate your organization across three critical dimensions to determine your AI transformation path.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Potential Score</h3>
                  <p className="text-foreground/80">
                    Evaluates the strategic value and business impact potential of AI initiatives within your specific context and industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Readiness Score</h3>
                  <p className="text-foreground/80">
                    Assesses your organization's data maturity, technical infrastructure, and cultural readiness for AI adoption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-brand-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Risk Score</h3>
                  <p className="text-foreground/80">
                    Identifies potential risks including ethical concerns, regulatory compliance, and implementation challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section id="ai-framework" className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                How Our AI Audit Works
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our proven 5-step methodology ensures comprehensive evaluation and actionable insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  step: "01",
                  title: "Business Context & Strategy",
                  description: "Understanding your business goals, challenges, and strategic priorities."
                },
                {
                  step: "02", 
                  title: "Build Business Asset Inventory",
                  description: "Cataloging your data assets, systems, and existing capabilities."
                },
                {
                  step: "03",
                  title: "Identify & Prioritize Opportunities", 
                  description: "Mapping AI opportunities to business value and feasibility."
                },
                {
                  step: "04",
                  title: "Roadmap Creation",
                  description: "Developing a phased implementation plan with clear milestones."
                },
                {
                  step: "05",
                  title: "Governance & Sustainability",
                  description: "Establishing frameworks for ethical AI and long-term success."
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Case Study Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                Case Study: AI-Powered Automation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground-dark">
              Automating Social Media Content for a Global Sports Leader
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground-dark-muted mb-6">
                  A global sports organization was struggling to manage real-time social media content during live events. Their team of 15 content creators was overwhelmed by the volume and speed required for effective fan engagement.
                </p>
                <p className="text-lg text-foreground-dark-muted mb-8">
                  We developed an AI-powered content generation system that automatically creates, optimizes, and publishes social media content in real-time based on live event data, reducing their content team requirements by 66% while maintaining high engagement rates.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-primary mb-2">66%</div>
                    <p className="text-sm text-foreground/80">Reduction in Team Size for Live Content</p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-primary mb-2">15s</div>
                    <p className="text-sm text-foreground/80">to Generate & Publish</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions in Action Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                AI Solutions in Action
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Real-world applications delivering measurable impact across industries.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* AI Teaching Assistant */}
              <div className="space-y-8">
                <div className="bg-brand-primary rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">AI Teaching Assistant</h3>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20">
                    INTELLIGENT PERSONALIZED LEARNING
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">AI Teaching Assistant</h3>
                <p className="text-foreground-dark-muted mb-6">
                  An intelligent teaching assistant that helps educators create personalized learning experiences for students, improving test performance by providing targeted feedback and customized lesson plans.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">94%</div>
                      <p className="text-sm text-foreground/80">User Satisfaction</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-primary mb-2">61%</div>
                      <p className="text-sm text-foreground/80">Performance Improvement</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6 lg:order-2">
                <div className="mb-6">
                  <span className="inline-block px-6 py-3 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium border border-brand-purple/20">
                    AI-POWERED AUTOMATION
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground-dark">Video Analysis</h3>
                <p className="text-foreground-dark-muted mb-6">
                  An advanced computer vision platform that automatically analyzes and categorizes video content, enabling instant content moderation and intelligent recommendations for streaming platforms.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">300%</div>
                      <p className="text-sm text-foreground/80">ROI Increase</p>
                    </CardContent>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                    <CardContent className="p-0">
                      <div className="text-3xl font-bold text-brand-purple mb-2">2.3M</div>
                      <p className="text-sm text-foreground/80">Hours Processed Monthly</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="space-y-8 lg:order-1">
                <div className="bg-brand-purple rounded-2xl p-8 lg:p-12 flex items-center justify-center text-white">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">Video Analysis</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground-dark">
              Our Applied AI Services
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Generative AI Solutions",
                "AI Product Development", 
                "Enterprise AI Solutions",
                "Machine Learning Development",
                "Natural Language Processing",
                "Computer Vision Development"
              ].map((service) => (
                <Card key={service} className="p-6 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <h3 className="font-semibold text-foreground">{service}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 to-brand-purple/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-xl mb-8 text-foreground/85">
              Let's discuss how our AI expertise can accelerate your business growth and drive meaningful outcomes.
            </p>
            <Button variant="hero" size="xl" className="min-w-[280px]">
              Work with an AI Consultant
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiStudio;