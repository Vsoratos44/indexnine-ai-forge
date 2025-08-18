import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle, Shield, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PivotCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[65vh] min-h-[600px] overflow-hidden bg-gradient-hero">
        <LivingVoidBackground />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-8 pt-32 pb-24">
          <div className="max-w-5xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand-primary hover:text-brand-primary-dark transition-colors mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Homepage
            </Link>
            
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Case Study: Pivot Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Zilla Security: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Engineering the Perfect Pivot</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Indexnine's strategic product engineering transformed a niche auditing tool into a mission-critical identity platform, creating exponential enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Client</h3>
                <p className="text-foreground-muted mb-6">Zilla Security</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-muted">Cybersecurity (Identity & Access Management)</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-muted mb-6">The client had built an auditing product capable of identifying critical security gaps, but not solving them. With strong demand from existing users and potential new customers, Zilla wanted a solution that could capitalize on this major opportunity. They needed to evolve from a passive reporting tool into an active, enterprise-grade management platform.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-muted">A multi-year strategic engagement with Indexnine to architect and execute a complex product pivot. This involved engineering a secure, scalable provisioning engine from the ground up and a continuous product modernization effort to meet enterprise demands.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "Mission-Critical Integration: Evolved the product from a supplemental visibility tool into an indispensable, action-oriented, core operational system for enterprise customers.",
                "Upgraded Scope, Expanded Value: By transforming the product into a comprehensive Identity Governance and Administration (IGA) platform, it could provide an IGA solution to a broader range of enterprise customers, expanding its total addressable market.",
                "Enterprise Architecture: By delivering a robust, secure, and scalable platform, the client could now meet the rigorous technical and compliance standards of its expanded customer base as well as the acquisition standards of a publicly traded company.",
                "Successful $165M+ Acquisition: The pivot directly enabled Zilla's acquisition by, a global leader in identity security."
              ].map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-muted">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-8 font-montserrat">
              The Challenge: The Paradox of Visibility in a Sprawling Digital Estate
            </h2>
            
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The IT landscape is a chaotic one; applications and data are no longer confined exclusively to a secure, on-premise data center; they're distributed across hundreds of SaaS platforms like Salesforce and SAP, multiple cloud providers, and countless homegrown systems. For a Chief Information Security Officer (CISO), this creates a nightmare scenario for managing who has access to what.
            </p>
            
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              Zilla Security was founded to solve just this problem. Their initial product was brilliant: an auditing tool that could connect to this fragmented digital estate and give CISOs a unified view of all user permissions, answering at a glance the fundamental, critical question of infosec: "Who has access to things they shouldn't?"
            </p>

            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The product was a success. Zilla quickly acquired 100+ customers, including major enterprises like United Airlines. They'd successfully navigated the launch phase of their product lifecycle. But in doing so, they found a new challenge.
            </p>

            <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-4 font-montserrat">The Critical Feedback</h3>
              <p className="text-lg text-foreground-dark leading-relaxed italic">
                "This is great, you've shown me that I have security issues. Now, how do I fix them?"
              </p>
              <p className="text-sm text-foreground/60 mt-2">— Consistent customer feedback across 100+ enterprise clients</p>
            </div>

            <p className="text-lg text-foreground-dark leading-relaxed">
              Their customers loved the reports, but they all came back with the same feedback. With customers empowered to see problems instantaneously, they wanted a way to solve those problems just as fast. Zilla found itself with a product that could show customers their security problems. Now, they needed the product to offer security solutions. Until it was overcome, this customer friction could prove a roadblock to continued growth and a potential threat to the company's long-term viability. They were at a strategic inflection point and needed a partner with the technical depth and product development expertise to help them navigate their next move.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Our Solution: The Pivot, From Audit to Action
            </h2>
            
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              The client's challenge was a perfect match for the core DNA of Indexnine. This wasn't a simple feature request; it was a mission-critical product pivot that required a decisive intersection of experienced strategic consulting and best-in-class engineering execution.
            </p>
            
            <div className="space-y-12">
              {/* Phase 1 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Target className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 1: Charting the Course</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Our engagement began with a series of in-depth strategy workshops led by our Discovery and Engineering studios. We worked closely with client leadership to internalize their customer feedback and map out a new product vision. Plans quickly took shape on how to evolve the product from a passive, read-only auditing tool into an active, read-write provisioning platform capable of identifying and remediating access issues entirely within the product.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Shield className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 2: Engineering an Enterprise-Grade Provisioning Engine</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    Moving from a system that reports on permissions to one that changes them is an order-of-magnitude increase in technical complexity. It required us to architect and build a secure, scalable, and resilient provisioning engine from the ground up. This involved solving several substantial challenges:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">API Integration at Enterprise Scale</h4>
                      <p className="text-sm text-foreground-muted">The engine needed to communicate with hundreds of disparate third-party systems. This meant architecting a highly extensible integration framework capable of handling modern REST APIs, legacy SOAP APIs, and everything in between.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Transactional State Management</h4>
                      <p className="text-sm text-foreground-muted">The system had to guarantee that when a user's access was revoked, it was revoked across all target systems. We implemented a sophisticated, transactional state management architecture with robust rollback capabilities.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Security-First, Zero-Trust Design</h4>
                      <p className="text-sm text-foreground-muted">As a security product that would be granted privileged access to a client's most sensitive systems, the provisioning engine itself had to be a fortress with least-privilege access, end-to-end encryption, and comprehensive audit logging.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Scalable Microservices Architecture</h4>
                      <p className="text-sm text-foreground-muted">To handle the load of managing millions of permissions across enterprises, we architected the provisioning engine using a microservices-based approach allowing independent scaling for different system integrations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <TrendingUp className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 3: Continuous Product Modernization for an Enterprise Future</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    Our partnership didn't end with the launch of the provisioning engine. As Zilla grew and entered the acquisition conversation with an interested party, the demands on the platform increased. The client expanded our engagement, leveraging Indexnine's product development expertise to focus on product modernization to ensure the platform stayed ahead of the curve:
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Refactoring for Enterprise-Grade Security</h4>
                      <p className="text-sm text-foreground-muted">We worked to refactor and harden the codebase to meet the rigorous security and compliance standards of a publicly traded company, aligned with our ISO 27001 certification standards.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Performance and Scalability Optimization</h4>
                      <p className="text-sm text-foreground-muted">We continuously monitored and optimized the platform for performance, safeguarding it against increasing load demands from larger and more exacting enterprise clients without degradation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 lg:py-32 bg-gradient-section relative overflow-hidden">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 text-center font-montserrat">
              The Results: The Value of Excellence
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">$165M+</h3>
                <p className="text-foreground-dark text-sm">Acquisition Value</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">100+</h3>
                <p className="text-foreground-dark text-sm">Enterprise Customers</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">Mission-Critical</h3>
                <p className="text-foreground-dark text-sm">Platform Status</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-6 text-center">
                <h3 className="text-3xl font-bold text-brand-primary mb-2 font-montserrat">IGA</h3>
                <p className="text-foreground-dark text-sm">Full Platform Evolution</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Transformation Outcomes:</h3>
              <div className="space-y-4">
                {[
                  "Transformed a Feature into a Platform: Our work elevated Zilla from a niche auditing tool into a comprehensive IGA platform. This dramatically increased their TAM and positioned them as a major player in the cybersecurity landscape.",
                  "Created a Mission-Critical Product: By solving the problems identified by the original auditing tool, the product we helped build became indispensable to customers. It elevated the client's product from a \"nice-to-have\" tool to a \"must-have\" operational system for managing enterprise security.",
                  "Enhanced Long-Term Viability, Eliminated Tech Debt: Our continuous focus on product modernization and enterprise-grade architecture meant avoiding massive technical debt and increasing the client's appeal to prospective acquirers as a mature, scalable, and secure technology platform ready for immediate integration into a portfolio.",
                  "Enabled a $165M+ Acquisition: The strategic pivot from auditing to provisioning was the single most critical factor in Zilla's acquisition. We didn't just build a feature; we helped build the core asset that created exponential enterprise value."
                ].map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{result}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Worked Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Why It Worked
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              The Zilla Security story is a quintessential example of our core values and differentiators in action.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Product-centric Development</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our team, with its ingrained product mindset, understood the strategic importance of customer feedback and leveraged it to inform our vision for the client's pivot.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Deep Engineering Expertise</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Building a secure, scalable provisioning engine is a formidable engineering challenge. Having industry veterans with years of expertise in API integration, microservices architecture, and enterprise security was critical to the project's success.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Partnership Across the Product Lifecycle</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our engagement spanned multiple phases, from the critical "Pivot" phase into the ongoing "Mature" phase of Zilla's ongoing and evolving success. We believe in commitment to our clients as a long-term strategic partner.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">A Founder's Mindset</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We approached the problem with the same sense of urgency and ownership as the client's leadership team. We understood that the success of this pivot was a defining moment for the company, and we would deliver nothing less than excellence for it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
            Ready to Engineer Your Perfect Pivot?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            For any company at a strategic crossroads, we provide the transformative power of strategic product engineering. Our work with Zilla reinforces our firm belief that, with the right partner, a major challenge can be engineered into a market-defining opportunity.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Want to take your product to the next level? So do we. Set up a free consultation with Indexnine today.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PivotCaseStudy;