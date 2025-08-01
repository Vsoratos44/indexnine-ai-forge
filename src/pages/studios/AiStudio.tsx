import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Target, Shield, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AiStudio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                IndexNine AI Studio
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              AI-Powered Business <span className="text-brand-purple">Transformation</span>
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              We provide strategic AI consulting and end-to-end AI product development to help you navigate complexity, drive efficiency, and unlock new revenue streams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[220px]">
                Work with an AI Consultant
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Get Your AI P2R Score
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The AI Dilemma Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              The AI Dilemma: Potential vs. Reality
            </h2>
            <p className="text-lg text-foreground-secondary mb-12 max-w-3xl mx-auto">
              AI promises to revolutionize business, but most initiatives fail to deliver meaningful ROI. The gap between potential and reality often comes down to strategy, readiness, and execution. We bridge that gap.
            </p>
          </div>
        </div>
      </section>

      {/* AI Consulting Section */}
      <section id="ai-consulting" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Clarity Before Code: Our AI Consulting Practice
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                We help you discover and de-risk your AI opportunities before investing in development. Our structured approach ensures your AI initiatives deliver measurable business value.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Standard AI Audit</h3>
                  <p className="text-foreground-secondary mb-6">
                    4-Week Assessment: Comprehensive evaluation of your AI readiness, potential opportunities, and strategic roadmap development.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Business context analysis and strategy alignment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Asset inventory and opportunity identification</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Prioritized AI roadmap with ROI projections</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Pro AI Audit</h3>
                  <p className="text-foreground-secondary mb-6">
                    8-Week Deep-Dive: Extended assessment including proof-of-concept development and detailed implementation planning.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Everything in Standard Audit</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Working proof-of-concept development</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Detailed technical architecture and governance framework</span>
                    </li>
                  </ul>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* P2R Framework Section */}
      <section id="ai-p2r-framework" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our AI P2R Assessment Framework
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                We evaluate your organization across three critical dimensions to determine your AI transformation path.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Potential Score</h3>
                  <p className="text-foreground-secondary">
                    Evaluates the strategic value and business impact potential of AI initiatives within your specific context and industry.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Brain className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Readiness Score</h3>
                  <p className="text-foreground-secondary">
                    Assesses your organization's data maturity, technical infrastructure, and cultural readiness for AI adoption.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">AI Risk Score</h3>
                  <p className="text-foreground-secondary">
                    Identifies potential risks including ethical concerns, regulatory compliance, and implementation challenges.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process Section */}
      <section id="ai-framework" className="py-16 bg-background-dark text-foreground-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Our AI Audit Works
              </h2>
              <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
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
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground-white">{item.title}</h3>
                  <p className="text-sm text-foreground-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Case Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                Case Study: AI-Powered Automation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
              Automating Social Media Content for a Global Sports Leader
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground-secondary mb-6">
                  A global sports organization was struggling to manage real-time social media content during live events. Their team of 15 content creators was overwhelmed by the volume and speed required for effective fan engagement.
                </p>
                <p className="text-lg text-foreground-secondary mb-8">
                  We developed an AI-powered content generation system that automatically creates, optimizes, and publishes social media content in real-time based on live event data, reducing their content team requirements by 66% while maintaining high engagement rates.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">66%</div>
                    <p className="text-sm text-foreground-secondary">Reduction in Team Size for Live Content</p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">15s</div>
                    <p className="text-sm text-foreground-secondary">to Generate & Publish</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
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
                <Card key={service} className="p-6">
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
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your AI Transformation?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our AI expertise can accelerate your business growth and drive meaningful outcomes.
            </p>
            <Button variant="secondary" size="lg" className="min-w-[220px]">
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