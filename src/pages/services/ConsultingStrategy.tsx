import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Target, Rocket, CheckCircle, Users, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ConsultingStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              Strategic Technology & <span className="text-brand-purple">AI Consulting</span>
            </h1>
            <p className="text-xl text-foreground-secondary mb-8 max-w-3xl mx-auto">
              We provide expert consulting to align your technology and AI strategy with business objectives, ensuring every investment drives measurable value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="min-w-[220px]">
                Book a Consultation
              </Button>
              <Button variant="outline" size="lg" className="min-w-[200px]">
                Download Strategy Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                From Strategy to Execution
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                Our consulting services bridge the gap between business vision and technical implementation. We help you make informed decisions about technology investments, AI adoption, and digital transformation initiatives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Strategic Planning</h3>
                  <p className="text-foreground-secondary">
                    Develop comprehensive technology roadmaps aligned with your business goals and market opportunities.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Risk Assessment</h3>
                  <p className="text-foreground-secondary">
                    Identify and mitigate technical, operational, and strategic risks before they impact your business.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Rocket className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Implementation Support</h3>
                  <p className="text-foreground-secondary">
                    Guide execution with hands-on support, ensuring strategies translate into successful outcomes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Our Consulting Services
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                Comprehensive consulting across all aspects of technology strategy and implementation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Digital Transformation Strategy</h3>
                  <p className="text-foreground-secondary mb-6">
                    Develop comprehensive digital transformation roadmaps that modernize your operations, enhance customer experience, and create new revenue streams.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Current state assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Technology stack evaluation and recommendations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Phased implementation roadmap with ROI projections</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <Lightbulb className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">AI Strategy & Implementation</h3>
                  <p className="text-foreground-secondary mb-6">
                    Navigate the AI landscape with strategic guidance on where and how to implement AI for maximum business impact and competitive advantage.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">AI opportunity assessment and prioritization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Data readiness evaluation and improvement plan</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">AI governance framework and risk management</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <Users className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Technology Due Diligence</h3>
                  <p className="text-foreground-secondary mb-6">
                    Comprehensive technical assessments for M&A, investment decisions, and strategic partnerships to minimize risk and maximize value.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Technical architecture and code quality assessment</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Scalability and security evaluation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Technical debt assessment and remediation plan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">Product Strategy & Innovation</h3>
                  <p className="text-foreground-secondary mb-6">
                    Strategic guidance on product development, market positioning, and innovation strategies that leverage emerging technologies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Market analysis and competitive positioning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Product roadmap development and prioritization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-secondary">Innovation framework and process design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Flexible Engagement Models
              </h2>
              <p className="text-lg text-foreground-secondary max-w-3xl mx-auto">
                Choose the consulting approach that best fits your needs and timeline.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Strategy Sprint</h3>
                  <p className="text-3xl font-bold text-brand-purple mb-4">2-4 Weeks</p>
                  <p className="text-foreground-secondary mb-6">
                    Rapid strategic assessment and roadmap development for specific initiatives or challenges.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center border-brand-purple border-2">
                <CardContent className="p-0">
                  <div className="inline-block px-3 py-1 bg-brand-purple text-white text-sm rounded-full mb-4">
                    Most Popular
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">Strategic Partnership</h3>
                  <p className="text-3xl font-bold text-brand-purple mb-4">3-6 Months</p>
                  <p className="text-foreground-secondary mb-6">
                    Comprehensive consulting engagement with hands-on implementation support and ongoing guidance.
                  </p>
                  <Button className="w-full">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 text-center">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Advisory Retainer</h3>
                  <p className="text-3xl font-bold text-brand-purple mb-4">Ongoing</p>
                  <p className="text-foreground-secondary mb-6">
                    Continuous strategic guidance and support as your trusted technology advisor.
                  </p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Consulting Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose IndexNine Consulting?
            </h2>
            <p className="text-lg text-foreground-secondary mb-12 max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver consulting that drives real results.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6 text-left">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-3 text-foreground">✅ Practitioner-Led Insights</h3>
                  <p className="text-foreground-secondary">
                    Our consultants are active practitioners who build and deploy the technologies they recommend.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-left">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-3 text-foreground">✅ Implementation Ready</h3>
                  <p className="text-foreground-secondary">
                    We don't just provide strategies - we can execute them with our engineering teams.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-left">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-3 text-foreground">✅ ROI-Focused Approach</h3>
                  <p className="text-foreground-secondary">
                    Every recommendation is backed by clear business value and measurable outcomes.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="p-6 text-left">
                <CardContent className="p-0">
                  <h3 className="text-lg font-bold mb-3 text-foreground">✅ Future-Proof Solutions</h3>
                  <p className="text-foreground-secondary">
                    We help you build strategies that adapt and scale with emerging technologies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Technology Strategy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our strategic consulting can accelerate your digital transformation and competitive advantage.
            </p>
            <Button variant="secondary" size="lg" className="min-w-[220px]">
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingStrategy;