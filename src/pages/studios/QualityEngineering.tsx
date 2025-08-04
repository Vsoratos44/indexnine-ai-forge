import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Settings, Zap, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LivingVoidBackground from '@/components/LivingVoidBackground';

const QualityEngineering = () => {
  return (
    <div className="min-h-screen bg-background-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-background-dark">
        {/* Three.js Living Void Background */}
        <LivingVoidBackground />

        {/* Content - Precisely positioned */}
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                IndexNine QAE
              </span>
            </div>
            <h1 className="text-[3.5rem] sm:text-[4.5rem] lg:text-[5.5rem] font-bold text-foreground mb-8 leading-[0.9] tracking-tight animate-fade-in">
              Beyond Testing: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering Quality</span><br />
              for Mission-Critical Software
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up">
              Our enterprise-grade quality engineering and test automation services help startups and SMBs deliver flawless products with speed and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="hero" size="xl" className="min-w-[280px]">
                Get Your APQ Roadmap
              </Button>
              <Button variant="hero-secondary" size="xl" className="min-w-[240px]">
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* QAE Blueprint Section */}
      <section id="qae-solution" className="py-16 bg-background-dark text-foreground">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                The Outcome-Driven Automation Blueprint
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                Our proven methodology delivers measurable quality improvements without sacrificing velocity.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "BUILD an AI-Assisted Foundation",
                  description: "Establish robust test frameworks powered by AI to accelerate test creation and maintenance while ensuring comprehensive coverage."
                },
                {
                  step: "02", 
                  title: "ADOPT Shift-Left Principles",
                  description: "Integrate quality practices early in the development cycle, enabling faster feedback loops and reducing costly late-stage defects."
                },
                {
                  step: "03",
                  title: "DEPLOY Smart & Efficiently", 
                  description: "Implement intelligent test orchestration that optimizes execution time, resource usage, and provides actionable insights."
                }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Quality Dilemma Section */}
      <section className="py-20 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
              The Quality Dilemma: Balancing Speed, Cost, and Reliability
            </h2>
            <p className="text-lg text-foreground-dark-muted mb-12 max-w-3xl mx-auto">
              Startups and SMBs are under constant pressure to innovate faster. But when quality assurance becomes a bottleneck, you face a difficult choice: slow down releases, or ship buggy products? Both options lead to rising technical debt, frustrated customers, and a compromised competitive edge.
            </p>
          </div>
        </div>
      </section>

      {/* QAE Case Study Section */}
      <section id="qae-case-study" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium">
                Case Study: Outcome-Based Automation
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground-dark">
              Enabling Velocity for a High-Growth FinTech
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-foreground-dark-muted mb-6">
                  A rapidly growing FinTech company was spending 5 days on regression testing for each release, slowing their deployment cycle and increasing time-to-market. Manual testing was becoming a bottleneck as their product complexity grew.
                </p>
                <p className="text-lg text-foreground-dark-muted mb-8">
                  We implemented our snap.automate platform with intelligent test orchestration, reducing their regression testing from 5 days to 30 minutes while improving test coverage by 40%. The project was delivered on a 100% success fee basis, ensuring risk-free value delivery.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">97%</div>
                    <p className="text-sm text-foreground/80">Reduction in Execution Time (5 days to 30 mins)</p>
                  </CardContent>
                </Card>
                <Card className="p-6 text-center bg-gradient-card border-card-border shadow-lg">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold text-brand-purple mb-2">100%</div>
                    <p className="text-sm text-foreground/80">Success Fee Achieved</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="qae-platforms" className="py-16 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Our Proprietary Automation Platforms
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Purpose-built tools that accelerate implementation and maximize ROI.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <Zap className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">snap.automate</h3>
                  <p className="text-foreground/80 mb-6">
                    Our flagship automation platform that provides intelligent test orchestration, AI-powered maintenance, and comprehensive reporting. Designed for rapid deployment and maximum coverage.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">AI-assisted test creation and maintenance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Intelligent test orchestration and optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Real-time insights and actionable reports</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-gradient-card border-card-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-brand-purple/10 rounded-full flex items-center justify-center mb-6">
                    <Target className="h-8 w-8 text-brand-purple" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">snap.atomicqa</h3>
                  <p className="text-foreground/80 mb-6">
                    Specialized platform for component-level testing and continuous quality assurance. Perfect for teams practicing shift-left methodologies and micro-service architectures.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Component-level test automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Continuous integration and deployment support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Micro-service testing capabilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* QAE Consulting Section */}
      <section id="qae-consulting" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                Enterprise QA Engineering Services
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Strategic consulting services that transform your quality practices.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="p-8 bg-background-card-light border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground-dark">Sprint 0: Automation Kickstart</h3>
                  <p className="text-foreground-dark-muted mb-6">
                    2-week rapid assessment and framework setup that gets your automation initiative off the ground with clear ROI projections and immediate wins.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">Current state assessment and gap analysis</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">Framework setup and initial test creation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">Team training and knowledge transfer</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="p-8 bg-background-card-light border-border shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold mb-4 text-foreground-dark">Agile Product Quality (APQ) Roadmap</h3>
                  <p className="text-foreground-dark-muted mb-6">
                    Comprehensive 4-week engagement that creates a strategic quality roadmap aligned with your product development lifecycle and business objectives.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">Quality maturity assessment and benchmarking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">Strategic roadmap with phased implementation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted">ROI projections and success metrics</span>
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

      {/* Frameworks Comparison Section */}
      <section id="qae-frameworks" className="py-16 bg-background-section">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground-dark">
                The Right Tool for the Job: Robot Framework vs. Playwright
              </h2>
              <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto">
                Choosing a test automation framework is a strategic decision that impacts long-term success. We help you make the right choice based on your specific needs.
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-background-card-light rounded-lg overflow-hidden border border-glass-border">
                <thead>
                  <tr className="bg-brand-primary/10">
                    <th className="text-left p-4 font-semibold text-foreground-dark">Feature</th>
                    <th className="text-center p-4 font-semibold text-foreground-dark">Robot Framework</th>
                    <th className="text-center p-4 font-semibold text-foreground-dark">Playwright</th>
                  </tr>
                </thead>
                <tbody className="bg-background-card-light">
                  {[
                    {
                      feature: "Learning Curve",
                      robot: "Low - Keyword-driven, business-friendly",
                      playwright: "Medium - Requires JavaScript/TypeScript knowledge"
                    },
                    {
                      feature: "Team Collaboration",
                      robot: "Excellent - Non-technical team members can contribute",
                      playwright: "Good - Developer-focused"
                    },
                    {
                      feature: "Performance",
                      robot: "Good - Suitable for most use cases",
                      playwright: "Excellent - Modern, fast execution"
                    },
                    {
                      feature: "Browser Support",
                      robot: "Good - Multiple browser support",
                      playwright: "Excellent - Native modern browser support"
                    },
                    {
                      feature: "Maintenance",
                      robot: "Easy - Readable, maintainable tests",
                      playwright: "Medium - Requires technical expertise"
                    },
                    {
                      feature: "Reporting",
                      robot: "Excellent - Rich, detailed reports",
                      playwright: "Good - Developer-friendly reports"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="border-t border-glass-border">
                      <td className="p-4 font-medium text-foreground-dark">{row.feature}</td>
                      <td className="p-4 text-center text-foreground-dark-muted">{row.robot}</td>
                      <td className="p-4 text-center text-foreground-dark-muted">{row.playwright}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-background-dark">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Ready to Transform Your QA Process?
            </h2>
            <p className="text-xl mb-8 text-foreground/85">
              Stop choosing between speed and quality. Let's build an automation strategy that delivers both.
            </p>
            <Button variant="hero" size="xl" className="min-w-[250px]">
              Book Your APQ Roadmap Session
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QualityEngineering;