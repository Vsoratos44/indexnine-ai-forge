import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import LivingVoidBackground from '@/components/LivingVoidBackground';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const LaunchCaseStudy = () => {
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
                Case Study: Launch Phase
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight tracking-tight animate-fade-in font-montserrat">
              Annotate: <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">Launching AI-Powered Disruption in Philanthropic Finance</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-foreground/85 mb-12 max-w-4xl leading-relaxed font-light animate-slide-up font-montserrat">
              Taking a bold idea of democratized financial research from launch to market-ready MVP.
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
                <p className="text-foreground-dark mb-6">Annotate (Anonymized), a visionary FinTech startup.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Industry</h3>
                <p className="text-foreground-dark">Wealth Management, Philanthropy</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Challenge</h3>
                <p className="text-foreground-dark mb-6">The process for prospective donors to access reliable research on charitable organizations was controlled by expensive consultants, creating a bottleneck in the market. Annotate wanted to build a platform that could disrupt this model by delivering the same, or better, insights at a fraction of the cost.</p>
                <h3 className="text-xl font-semibold text-brand-primary-dark mb-4 font-montserrat">Solution</h3>
                <p className="text-foreground-dark">A strategic engagement with Indexnine's Launch services, starting with our proprietary Sprint Zero framework to define the MVP, followed by the rapid development of a sophisticated AI research agent built on retrieval-augmented generation (RAG) architecture.</p>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">Key Outcomes:</h3>
            <div className="space-y-4">
              {[
                "Market-Ready MVP Launched: Successfully delivering a functional, AI-powered platform validated the core business model and enabled the client to execute on an aggressive GTM strategy, rapidly acquiring users and market share.",
                "99% Cost Reduction for End-Users: The platform was designed to deliver research reports for approximately $500, a dramatic reduction from industry-standard consultant fees ranging from $20,000 to $50,000.",
                "Complex Data Problem Solved: By engineering a robust data pipeline capable of ingesting and synthesizing highly diverse data types into reliable, trustworthy insights, we developed a solution to overcome one of our client's primary technical obstacles.",
                "Created a Reliable Tech Moat: We built a proprietary AI engine that now serves as the client's core intellectual property and a major competitive advantage."
              ].map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-brand-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground-dark">{outcome}</span>
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
              The Challenge: A Market Ripe for Disruption
            </h2>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              In the upper echelons of philanthropic contributions, making informed decisions is a surprisingly expensive and archaic process. An individual or family looking to donate major funding to a charitable cause would typically hire a specialized consultant. The consultant would then spend weeks or months manually conducting research, analyzing financial statements, and compiling a detailed report. This service alone would cost tens of thousands of dollars.
            </p>
            <p className="text-lg text-foreground-dark leading-relaxed mb-8">
              The founder of Annotate, a veteran in the field of philanthropic wealth management, saw fundamental flaws to address in this model:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark"><strong>Inaccessible:</strong> The high cost limited the availability of important due diligence to the ultra-wealthy, creating a price barrier between prospective donors and access to the data analysis that would allow their money to go where it could do the most good.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark"><strong>Inefficient:</strong> The existing methodology had stagnated. The data analysis was slow, neglecting to leverage modern technology to analyze the vast amounts of publicly available data on non-profit organizations.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-primary rounded-full mt-3 flex-shrink-0"></div>
                <span className="text-foreground-dark"><strong>Unscalable:</strong> The entire model was dependent on the limited bandwidth of human consultants, utilizing outdated methods for a narrow client base, and as a result was unable to adapt to the growing demand for data-backed insights in philanthropic giving.</span>
              </li>
            </ul>
            <p className="text-lg text-foreground-dark leading-relaxed mt-8">
              Annotate's vision was to disrupt this entire ecosystem. They wanted to build a platform that could do what a team of consultants did, but faster, more efficiently, and at a price point—around $500 per report—that would democratize access to this vital information. The challenge was big: How could a startup with a bold idea but limited resources build a technology platform sophisticated enough to exceed the processes of experienced human analysts?
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-montserrat">
              Our Solution: A Disciplined Launch Process for a Disruptive MVP
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-12">
              Annotate came to Indexnine with the vision. Our job was to translate that vision into a viable, scalable, and market-ready product. To meet the high bar the client needed to reach their goal, our solution had to start, well before a single line of code was written, with strategy.
            </p>
            
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 1: Sprint Zero - De-Risking the Vision and Defining the MVP</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  Our Discovery Studio team would start by initiating a Sprint Zero. This is a core part of our methodology designed to de-risk product development while adhering to the product vision. In a series of intensive workshops with the client, we would:
                </p>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Identify and Validate Core Problems</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      We rigorously confirmed the pain points of the target users (high-net-worth individuals and their financial advisors).
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Map the User Journey</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Detailing the ideal workflow from a user defining their philanthropic goals to receiving a final, data-backed report.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Define the MVP Scope</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      We collaboratively identified the essential features required to prove the concept and deliver immediate value.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Architected the Technical Solution</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Our senior architects designed the high-level technical blueprint, choosing a RAG architecture for optimal results.
                    </p>
                  </div>
                </div>
                <p className="text-foreground-muted leading-relaxed mt-6">
                  <strong>The output:</strong> By the end of a Sprint Zero, our client had a clear, actionable roadmap and a shared confidence that the product we were about to build was not only technically feasible but also fully aligned with a real market need.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6 font-montserrat">Phase 2: Technical Architecture - Engineering an AI Research Agent</h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  With the blueprint in hand, our Agentic AI Pod began the complex task of building the product engine. The platform's intelligence is derived from its ability to analyze and synthesize information from incredibly diverse sources. This presented a significant engineering challenge.
                </p>
                <div className="bg-gradient-section rounded-3xl p-8 mb-8">
                  <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">The Heterogeneous Data Problem</h4>
                  <p className="text-foreground-muted mb-4">The AI needed to understand both:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted"><strong>Structured Data:</strong> Clean, numerical data like IRS Form 990 tax filings, detailing an NGO's financials, expenses, and executive compensation.</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground-muted"><strong>Unstructured Data:</strong> Dense, narrative-heavy text from NGO annual reports, press releases, and websites.</span>
                    </li>
                  </ul>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Intelligent Data Ingestion</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Built a robust pipeline to automatically ingest documents from multiple sources with clean data curation.
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">Advanced Entity Extraction</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Implemented NLP models trained to identify key concepts like "programmatic expenses" and "impact metrics."
                    </p>
                  </div>
                  
                  <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                    <h4 className="text-xl font-bold text-foreground mb-4 font-montserrat">RAG-Powered Agent</h4>
                    <p className="text-foreground-muted leading-relaxed">
                      Created a unified knowledge base that grounds LLM responses in factual data, reducing hallucinations.
                    </p>
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
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-brand-primary-dark mb-12 font-montserrat">
              The Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">99%</h3>
                <p className="text-foreground-dark">Cost Reduction for End-Users</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">$500</h3>
                <p className="text-foreground-dark">vs $20K-$50K Traditional Cost</p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass text-center">
                <h3 className="text-4xl font-bold text-brand-primary mb-2 font-montserrat">MVP</h3>
                <p className="text-foreground-dark">Market-Ready Launch</p>
              </div>
            </div>
            
            <div className="text-left">
              <h3 className="text-2xl font-bold text-brand-primary-dark mb-6 font-montserrat">The Results:</h3>
              <div className="space-y-4">
                {[
                  "Successfully Launched MVP: We delivered a fully functional platform that proved the core business model was not just visionary, but achievable. The founder was equipped with a powerful product to take to market, engage with early adopters, and begin the crucial process of finding product-market fit.",
                  "Created a Platform for Disruption: The AI-powered solution is poised to completely disrupt the traditional philanthropic consulting market. By offering enterprise-grade research at a 99% cost reduction, Annotate has democratized access to information and created a new category of service.",
                  "Built a Defensible and Scalable Business Core: The proprietary AI Research Agent and the data pipeline we engineered are now Annotate's crown jewels. This is not a simple application that can be easily replicated; it is a deep, defensible technology asset that provides a significant and lasting competitive advantage."
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
              Annotate's successful launch is a direct reflection of our approach to building new products.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">A Disciplined Launch Process</h3>
                <p className="text-foreground-muted leading-relaxed">
                  Our Sprint Zero framework was critical. By investing in strategy and discovery upfront, we de-risked the project, ensuring that the process, and then the product, was carefully planned for client success.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">Deep AI and Data Expertise</h3>
                <p className="text-foreground-muted leading-relaxed">
                  This project was made possible through the carefully curated, specialized skills of our Applied AI and Data teams. Our ability to handle complex data engineering challenges and architect sophisticated RAG systems was key.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">The Agentic AI Pod</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We deployed a small, elite team of 3X Engineers who possessed the full range of skills—from data engineering to MLOps to product thinking—needed to execute quickly and effectively.
                </p>
              </div>
              
              <div className="relative overflow-hidden backdrop-blur-xl bg-glass-bg border border-glass-border rounded-3xl p-8 shadow-glass">
                <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">A True Founder's Mindset</h3>
                <p className="text-foreground-muted leading-relaxed">
                  We approached this engagement as partners, not vendors. We understood the founder's vision and treated their mission-critical launch with the care and dedication it deserved.
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
            Ready to Make Your Vision a Reality?
          </h2>
          <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-montserrat">
            The Annotate story is a powerful example of how Indexnine helps visionary founders launch transformative products. We provide the strategic discipline, deep technical expertise, and agile execution needed to navigate the complexities of the "Launch" phase and build the enduring products of tomorrow.
          </p>
          <p className="text-lg text-foreground/70 mb-12 max-w-xl mx-auto font-montserrat">
            Ready to make your vision a reality? So are we. Set up a free consultation with Indexnine today.
          </p>
          <Button variant="hero" size="xl">Get Started</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LaunchCaseStudy;