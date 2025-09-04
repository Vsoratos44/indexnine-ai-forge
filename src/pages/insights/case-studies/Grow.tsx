import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle, Zap, Brain, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { SEOStructuredData, ArticleSchema, WebPageSchema, BreadcrumbSchema } from '@/components/SEOStructuredData';

const GrowCaseStudy = () => {
  // SEO Configuration
  useSEO({
    title: "Sports Interactive AI Growth Case Study - Real-Time Fan Engagement Automation | Indexnine",
    description: "Discover how Indexnine's Cricket LLM transformed Sports Interactive's operations, automating content generation in 15 seconds and reducing operational costs by 90% through AI-powered fan engagement.",
    keywords: "AI automation, sports media technology, real-time content generation, fan engagement, Cricket LLM, operational cost reduction, scalable AI solutions, sports technology",
    canonicalUrl: "https://indexnine.ai/insights/case-studies/grow",
    ogImage: "https://indexnine.ai/images/case-studies/grow-og.jpg",
    ogType: "article"
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <ArticleSchema
        title="Sports Interactive: AI-Powered Fan Engagement in Real Time"
        description="Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation with Cricket LLM."
        author="Indexnine"
        datePublished="2024-01-25"
        dateModified="2024-01-25"
        image="https://indexnine.ai/images/case-studies/grow-hero.jpg"
        url="https://indexnine.ai/insights/case-studies/grow"
      />
      
      <WebPageSchema
        title="Growth Case Study: Sports Interactive AI Automation"
        description="AI-powered growth case study showcasing real-time content automation and operational transformation in sports media"
        url="https://indexnine.ai/insights/case-studies/grow"
      />
      
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://indexnine.ai" },
          { name: "Insights", url: "https://indexnine.ai/insights" },
          { name: "Case Studies", url: "https://indexnine.ai/insights/case-studies" },
          { name: "Growth Phase", url: "https://indexnine.ai/insights/case-studies/grow" }
        ]}
      />
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
                Case Study: Growth Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Sports Interactive: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">AI-Powered Fan Engagement in Real Time</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Unlocking a new level of scalability and solving a technical Gordian knot through automated content creation.
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
                <p className="text-foreground-muted mb-6">Sports Interactive, a leading B2B sports technology and content solutions provider.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-muted">Sports Media, Technology</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-muted mb-6">The inaccessibility of real-time scaling for high-quality social media content generation during live sporting events was resulting in high operational costs and missed opportunities for fan engagement. The client wanted a reliable and long-term solution.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-muted">One of our Agentic AI pods developed a bespoke, low-latency, AI-powered content generation engine (called "Cricket LLM") that enables interactive fan engagement in real time without compromising performance under increased workloads during game time.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "Comprehensive Success: Total automation of in-match tweet generation, eliminating the need for a six-person content \"war room\" during games.",
                "Exceeded Expectations: The finished product can generate content ready for publishing in under fifteen seconds, beating the critical twenty-second window for content engagement.",
                "Solved Quickly: A complex challenge that had harried the client for three years, Indexnine was able to provide a solution in two months.",
                "Proven Scalability: We've built a foundational platform that enables the client to continue expanding operations in real-time content automation across multiple sports, leagues, and social media channels."
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
              The Challenge: High Stakes, High Pressure, High Speed
            </h2>
            
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              In sports media, an industry estimated to reach $1.19 billion by 2030, the game on the field isn't the battle. The real clash happens in the digital arena, on the timelines of millions of fans demanding instant analysis, reactions, and opportunities for engagement. For Sports Interactive, a premier digital agency managing content for top-tier sports leagues and teams, victory in this arena is its core business.
            </p>
            
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              Their most critical and time-sensitive operation revolved around live-tweeting during matches. The formula for success was brutal: when a pivotal moment happened—an interception, a game-changing play, a buzzer beater—a creative, on-brand, and factually accurate tweet had to hit the timeline within twenty seconds. Any longer and the moment's lost, drowned out by the next play, rival outlets, or the oncoming tidal wave of reactions from individual fans. As a sports media firm, twenty seconds is all you've got.
            </p>

            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              To meet this demand, Sports Interactive relied on a costly "war room," a team of six expert content specialists and sports experts working in frantic unison during every single match. The method posed significant problems in terms of burnout, human error, consistency, and resource intensity. For scalability, the only way to cover more matches or expand to new sports was to hire more specialists, creating an untenable rate of growth to operational cost.
            </p>

            <p className="text-lg text-foreground-dark leading-relaxed">
              The client knew this method was unsustainable, but without a reliable alternative, they couldn't cut out the unwieldy process. For three years, the company's internal teams tried to automate this process. They understood the problem, but lacked the depth of expertise necessary to architect a solution capable of handling the novel challenge of simultaneous speed, creativity, and contextual understanding. They were stuck in a cycle of manual overload, unable to scale the most critical part of their business.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              The Solution: Content Automation Powered By AI
            </h2>
            
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              When Sports Interactive engaged us, they came with a specific problem. Our approach, rooted in our AI Potential, Readiness, and Risk (P2R) Assessment framework, began with strategy. We knew this wasn't just about generating tweets; it was about decoupling their growth from their headcount and automating quality content creation.
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
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 1: The AI Assessment - Defining the Opportunity</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Our Applied AI and Discovery studios initiated the engagement with a rapid, targeted assessment. Instead of jumping straight into development, we first mapped their content workflow to identify bottlenecks and quantify the business impact. From this data, we could extract actionable insights and engineer for maximum impact. Framing the project not just as a technical task, but as a transformative initiative with a clear ROI, we had our objective: build a platform capable of continually scaling their real-time engagement to meet demand reliably and effectively.
                  </p>
                </div>
              </div>

              {/* Phase 2 */}
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Brain className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 2: The Architecture - Engineering Cricket LLM</h3>
                  <p className="text-foreground-muted leading-relaxed mb-6">
                    Architecting a solution for this would require technical sophistication far beyond picking off-the-shelf AI tools. Our Agentic AI pod, a specialized team of full-stack AI engineers, architected a bespoke, low-latency AI engine. The solution had to master three complex domains simultaneously:
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Real-Time Data Ingestion</h4>
                      <p className="text-sm text-foreground-muted">We built a high-throughput, event-driven pipeline capable of consuming live sports data feeds with sub-second latency. This pipeline acts as the central nervous system, triggering the AI brain at the precise moment of action.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Context-Aware Generative AI</h4>
                      <p className="text-sm text-foreground-muted">The core of the solution is a proprietary model we dubbed "Cricket LLM." Its architecture included dynamic prompt engineering, multi-layered validation, and fine-tuning on sports commentary and client's historical content.</p>
                    </div>
                    <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-2xl p-6">
                      <h4 className="font-semibold text-foreground mb-2">Scalable MLOps Pipeline</h4>
                      <p className="text-sm text-foreground-muted">We built a robust MLOps pipeline to manage the entire lifecycle of Cricket LLM, including automated model retraining, performance monitoring, and CI/CD processes for continuous improvement.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase 3 */}
              <div className="grid md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="bg-gradient-to-br from-brand-primary/10 via-brand-primary/5 to-brand-purple/10 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/20 shadow-md">
                    <Zap className="w-8 h-8 text-brand-primary" />
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Phase 3: Outcome-Oriented Delivery</h3>
                  <p className="text-foreground-muted leading-relaxed">
                    Throughout the two-month engagement, our Agentic AI pod worked in tight, agile sprints. We operated on a model of sprint commitments, where we guaranteed the delivery of specific outcomes at each stage. This de-risked the project for Sports Interactive, ensuring they saw tangible progress and value every step of the way. We didn't just promise a solution; we demonstrated it, culminating in a successful live deployment during the Indian Premier League (IPL) season for the Lucknow Super Giants.
                  </p>
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
              The Results: Transforming a Cost Center Into a Growth Engine
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">90%</h3>
                <p className="text-foreground-dark">Reduction in Operational Costs</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">15s</h3>
                <p className="text-foreground-dark">Tweet Generation Time</p>
              </div>
              
              <div className="backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">2 Months</h3>
                <p className="text-foreground-dark">Solution Delivery Time</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">The Impact:</h3>
              <div className="space-y-4">
                {[
                  "90% Reduction in Operational Costs: The need for a six-person content \"war room\" was completely eliminated, freeing up valuable creative talent for strategic initiatives and dramatically reducing operational expenses.",
                  "Unprecedented Speed and Performance: Our AI engine consistently generated and published high-quality tweets in under 15 seconds, beating the critical 20-second window and setting a new standard for real-time fan engagement.",
                  "Proven Scalability and Future-Proofing: The underlying platform was designed for growth. Sports Interactive now has a foundational engine they can use to expand their real-time content offerings to other social media platforms like Facebook and Instagram, and even to other sports, creating new, high-margin revenue streams."
                ].map((result, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground-dark">{result}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-foreground-dark leading-relaxed mt-6">
                After the success of the pilot, the client chose to engage Indexnine once again to handle the complexities of MLOps, model maintenance, and multi-platform integration involved in further scaling operations. This re-engagement of Indexnine to lead the next phase of the product's growth is a commitment we take very seriously, as both a testament to the deep, specialized expertise we bring and an opportunity to continue facilitating our client's success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Worked Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Why It Worked: The Indexnine Difference
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              This success story is a direct result of the core principles that differentiate Indexnine:
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">The Studio Model</h3>
                <p className="text-foreground-muted leading-relaxed">
                  This wasn't a run-of-the-mill AI project. On top of extensive expertise across AI technologies, it required seamless collaboration. Our Discovery, Applied AI, and Engineering studios each contributed to extract strategic insights through data analysis and frame the business problem, to design the model, and to build the data pipelines and infrastructure, respectively.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">3X Engineers</h3>
                <p className="text-foreground-muted leading-relaxed">
                  This project demanded more than just coders. It required engineers with a deep understanding of MLOps, data architecture, and LLMs, combined with a product mindset to grasp the business context of fan engagement and brand voice.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">A Founder's Mindset</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We took ownership of a problem that had stymied a capable tech organization for years. We didn't just deliver a service; we delivered a strategic business transformation, demonstrating our core belief that our success is intrinsically linked to our clients'.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">AI Excellence</h3>
                <p className="text-foreground-muted leading-relaxed">
                  For companies looking at what's beyond the AI hype and wanting to drive real, measurable results, the Sports Interactive story serves as a powerful blueprint. It demonstrates that with the right strategic partner, the most complex AI challenges can be transformed into major growth opportunities.
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
            Ready to Automate, Scale, and Lead with AI?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto font-montserrat">
            For companies looking at what's beyond the AI hype and wanting to drive real, measurable results, the Sports Interactive story serves as a powerful blueprint. It demonstrates that with the right strategic partner, the most complex AI challenges can be transformed into major growth opportunities.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Is your business looking at ways to automate, scale, and lead with AI? We're ready to help.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrowCaseStudy;