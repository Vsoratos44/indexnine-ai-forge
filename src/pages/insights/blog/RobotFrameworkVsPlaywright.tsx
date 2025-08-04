import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContentSidebar } from '@/components/ContentSidebar';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, User, Download, ExternalLink } from 'lucide-react';

const RobotFrameworkVsPlaywright = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'comparison-table', title: 'At a Glance Comparison' },
    { 
      id: 'robot-framework', 
      title: 'Robot Framework',
      subsections: [
        { id: 'robot-benefits', title: 'Why Robot Framework' },
        { id: 'robot-use-cases', title: 'Best Use Cases' }
      ]
    },
    { 
      id: 'playwright', 
      title: 'Playwright',
      subsections: [
        { id: 'playwright-benefits', title: 'Why Playwright' },
        { id: 'playwright-use-cases', title: 'Best Use Cases' }
      ]
    },
    { id: 'quality-engineering', title: 'Quality Engineering Partnership' },
    { id: 'faq', title: 'Frequently Asked Questions' },
    { id: 'conclusion', title: 'Next Steps' }
  ];

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.flatMap(section => [
        section,
        ...(section.subsections || [])
      ]);
      
      for (const section of sectionElements) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        {/* Sidebar */}
        <ContentSidebar
          sections={sections}
          activeSection={activeSection}
          onSectionClick={setActiveSection}
        />

        {/* Main Content */}
        <div className="flex-1 lg:ml-80">
          {/* Back Navigation */}
          <div className="pt-24 pb-8 bg-background border-b border-glass-border">
            <div className="container mx-auto px-6 lg:px-8">
              <Link 
                to="/insights/blogs" 
                className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-montserrat">Back to Blogs</span>
              </Link>
            </div>
          </div>

          {/* Article Header */}
          <article className="py-12">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
              <header className="mb-12">
                <div className="mb-6">
                  <span className="text-sm bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full font-montserrat">
                    Quality Assurance
                  </span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-montserrat leading-tight">
                  Robot Framework vs. Playwright: The Test Automation Showdown Your Business Can't Ignore
                </h1>
                
                <div className="flex items-center gap-6 text-sm text-foreground-muted mb-8">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-montserrat">QA Engineering Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-montserrat">10 min read</span>
                  </div>
                  <span className="font-montserrat">January 20, 2025</span>
                </div>

                <div className="bg-gradient-card backdrop-blur-xl rounded-2xl p-6 border border-glass-border">
                  <p className="text-lg text-foreground-muted leading-relaxed font-montserrat">
                    In today's competitive landscape, the pressure to balance quality, velocity, and cost is relentless. 
                    The days of wrestling with flaky tests and cross-browser nightmares are over. Two modern titans 
                    have emerged: Robot Framework and Playwright. But which tool is right for your business?
                  </p>
                </div>
              </header>

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                
                <section id="introduction" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Introduction</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      Cutting corners on Quality Assurance (QA) isn't an option when your product's reputation is on the line, 
                      but slow release cycles and rising technical debt can sink you before you find product-market fit.
                    </p>
                    <p>
                      The good news? The days of wrestling with the flaky tests and cross-browser nightmares of legacy 
                      frameworks are over. Two modern titans have emerged to address these pains: Robot Framework and 
                      Playwright. They deliver the speed, reliability, and developer-friendliness that modern quality 
                      engineering services have been missing.
                    </p>
                    <p>
                      At Indexnine, we know it's never just about the tool; it's about a tailored QA process improvement 
                      strategy and flawless execution. Through our Sprint 0 discovery process and Agile Product Quality 
                      (APQ) Roadmap, we help you build an outcome-based automation strategy that turns QA from a bottleneck 
                      into a velocity enabler.
                    </p>
                    <div className="bg-brand-primary/5 border border-brand-primary/20 rounded-xl p-6 my-8">
                      <Button variant="hero" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download Our QA Automation Framework eBook (PDF)
                      </Button>
                    </div>
                  </div>
                </section>

                <section id="comparison-table" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">At a Glance: Robot Framework vs. Playwright Comparison</h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-glass-border rounded-xl overflow-hidden bg-background-card-light">
                      <thead className="bg-brand-primary/10">
                        <tr>
                          <th className="text-left p-4 font-montserrat text-foreground-dark">Feature</th>
                          <th className="text-left p-4 font-montserrat text-foreground-dark">Robot Framework</th>
                          <th className="text-left p-4 font-montserrat text-foreground-dark">Playwright</th>
                        </tr>
                      </thead>
                      <tbody className="bg-background-card-light">
                        <tr className="border-t border-glass-border">
                          <td className="p-4 font-medium text-foreground-dark">Ideal Use Case</td>
                          <td className="p-4 text-foreground-dark-muted">Startups (Seed-Series A), MVPs, teams needing broad testing capabilities (Web, API, Mobile)</td>
                          <td className="p-4 text-foreground-dark-muted">Scale-ups (Series B+), complex web apps, teams demanding high-velocity and parallel execution</td>
                        </tr>
                        <tr className="border-t border-glass-border bg-background-card-light/80">
                          <td className="p-4 font-medium text-foreground-dark">Key Strength</td>
                          <td className="p-4 text-foreground-dark-muted">Readability & Accessibility: Keyword-driven syntax is easy for technical and non-technical staff to understand</td>
                          <td className="p-4 text-foreground-dark-muted">Speed & Reliability: Modern architecture with auto-waits and web-first assertions minimizes flaky tests</td>
                        </tr>
                        <tr className="border-t border-glass-border">
                          <td className="p-4 font-medium text-foreground-dark">Ecosystem</td>
                          <td className="p-4 text-foreground-dark-muted">Python-based, with a massive ecosystem of libraries for any task, including a wrapper for Playwright itself</td>
                          <td className="p-4 text-foreground-dark-muted">Native support for TypeScript, JavaScript, Python, Java, and .NET, fitting seamlessly into developer workflows</td>
                        </tr>
                        <tr className="border-t border-glass-border bg-background-card-light/80">
                          <td className="p-4 font-medium text-foreground-dark">Best For...</td>
                          <td className="p-4 text-foreground-dark-muted">Teams aiming to democratize test creation, implement Test-Driven Development (TDD), and require a gentle learning curve</td>
                          <td className="p-4 text-foreground-dark-muted">Developer-centric teams focused on efficiency, deep debugging (Trace Viewer), and continuous testing of modern, complex web applications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="robot-framework" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Robot Framework: The Startup's Secret Weapon for Agile Quality</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      For early-stage startups, agility and resourcefulness are everything. You need to iterate on your 
                      MVP quickly without an army of dedicated QA engineers. This is where Robot Framework shines.
                    </p>
                  </div>

                  <div id="robot-benefits" className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Why Robot Framework is a Founder's Best Friend</h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Human-Readable Syntax</h4>
                        <p className="text-foreground-muted">
                          Its keyword-driven approach is a game-changer. Test cases double as living documentation that 
                          product managers and developers can understand, ideal for fostering collaboration.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Powerful & Extensible Ecosystem</h4>
                        <p className="text-foreground-muted">
                          Built on Python, Robot Framework boasts a rich library ecosystem that can handle web, API testing, 
                          and mobile testing, ensuring you can cover all your bases with one tool.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Cost-Effective & Quick to Ramp Up</h4>
                        <p className="text-foreground-muted">
                          As an open-source tool with a gentle learning curve, it allows your existing team to become 
                          productive faster, reducing the need to hire expensive, specialized automation engineers from day one.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="robot-use-cases" className="mt-8">
                    <p className="text-foreground-muted leading-relaxed">
                      For our startup clients, our agile product quality assessment often points to Robot Framework when 
                      the goal is to establish a scalable, keyword-driven architecture that the whole team can maintain. 
                      The business outcome? Your core regression suite is automated in record time, freeing your team to 
                      focus on innovation while increasing confidence in every release.
                    </p>
                  </div>
                </section>

                <section id="playwright" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Playwright: The Enterprise Powerhouse for High-Velocity Teams</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      As your startup hits a growth spurt, the game changes. Complex applications, multiple teams, and 
                      the demand for a flawless user experience require a framework that is exceptionally robust and fast. 
                      Playwright, often leveraged by a mature software testing company, steps into this arena with confidence.
                    </p>
                  </div>

                  <div id="playwright-benefits" className="mt-12">
                    <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">Why Playwright is the Go-To for Scaling Enterprises</h3>
                    <div className="space-y-4">
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Blazing Speed & Ironclad Reliability</h4>
                        <p className="text-foreground-muted">
                          Playwright's modern architecture was built to combat flaky tests. Its intelligent auto-waits and 
                          web-first assertions, which automatically retry until conditions are met, drastically improve test 
                          stability and execution speed.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">True Cross-Browser Mastery</h4>
                        <p className="text-foreground-muted">
                          Test reliably on Chromium, WebKit (Safari), and Firefox with a single, consistent API. This is 
                          critical for ensuring a consistent user experience.
                        </p>
                      </div>
                      <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                        <h4 className="text-lg font-semibold text-foreground mb-2 font-montserrat">Developer-Centric Features</h4>
                        <p className="text-foreground-muted">
                          With first-class support for TypeScript, JavaScript, and Python, Playwright meets your developers 
                          where they are. Tools like the Playwright Inspector, Codegen, and the Trace Viewer empower engineers 
                          to write, debug, and maintain complex tests with unparalleled efficiency.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div id="playwright-use-cases" className="mt-8">
                    <p className="text-foreground-muted leading-relaxed">
                      Internally, we leverage Playwright to help enterprises architect for complexity and integrate it into 
                      their CI/CD pipelines for true continuous testing. This dramatically reduces regression testing times—we've 
                      seen reductions from weeks to hours—and gives stakeholders the confidence to release features more frequently.
                    </p>
                  </div>
                </section>

                <section id="quality-engineering" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Don't Settle for "Good Enough": A Partner in Quality Engineering</h2>
                  <div className="space-y-6 text-foreground-muted leading-relaxed">
                    <p>
                      Choosing not to leverage modern test automation services is actively costing your business—in slower 
                      releases, developer frustration, higher bug-fixing expenses, and lost customers. But a powerful tool 
                      is only as good as the artisan wielding it.
                    </p>
                    <p>
                      Before a single line of code is written, our Sprint 0 process lays the critical groundwork. We dive 
                      deep to understand your product, workflows, and business goals to build an automation strategy that 
                      is technically sound and perfectly aligned with your objectives.
                    </p>
                  </div>

                  <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-8 border border-glass-border mt-8">
                    <h3 className="text-xl font-bold text-foreground mb-4 font-montserrat">This is how we execute:</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-brand-primary font-bold text-sm">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Strategize</h4>
                          <p className="text-foreground-muted text-sm">
                            Through our APQ assessment, we tailor the right framework—be it Robot, Playwright, or a hybrid—to your specific needs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-brand-primary font-bold text-sm">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Execute</h4>
                          <p className="text-foreground-muted text-sm">
                            We build efficient, maintainable automation suites and integrate them into your DevOps lifecycle, aiming for over 90% automation.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-brand-primary font-bold text-sm">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Empower</h4>
                          <p className="text-foreground-muted text-sm">
                            We ensure your team can confidently manage and scale your QA efforts for the long term.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-glass-border">
                      <Button variant="hero" className="w-full">
                        Book a Free QA Consulting Session to Build Your Automation Strategy
                      </Button>
                    </div>
                  </div>
                </section>

                <section id="faq" className="mb-16">
                  <h2 className="text-3xl font-bold text-foreground mb-6 font-montserrat">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                        Can you use Robot Framework and Playwright together?
                      </h3>
                      <p className="text-foreground-muted">
                        Yes. Robot Framework can use Playwright's engine directly through its modern Browser library. 
                        This is a popular and powerful combination that offers Robot's simple syntax with Playwright's 
                        speed and reliability.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                        Is Playwright better than Robot Framework for enterprise QA?
                      </h3>
                      <p className="text-foreground-muted">
                        Playwright is often preferred for larger, developer-heavy enterprise teams due to its raw speed, 
                        native multi-language support, and advanced debugging features. However, Robot Framework's 
                        readability and extensibility make it a highly viable and scalable enterprise solution as well, 
                        especially in Python-centric environments.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                        What are the main differences between Robot Framework and Playwright?
                      </h3>
                      <p className="text-foreground-muted">
                        The main differences are in their philosophy and primary user. Robot Framework uses a keyword-driven 
                        syntax designed for accessibility and collaboration. Playwright is a developer-first tool with a 
                        traditional coding syntax in multiple languages, built for maximum speed and efficiency within 
                        engineering workflows.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-card backdrop-blur-xl rounded-xl p-6 border border-glass-border">
                      <h3 className="text-lg font-semibold text-foreground mb-3 font-montserrat">
                        Can you integrate Robot Framework with Playwright for hybrid testing?
                      </h3>
                      <p className="text-foreground-muted">
                        Absolutely. Integrating Robot Framework with the Playwright-based Browser library is an advanced 
                        strategy for hybrid testing. It allows you to write simple, maintainable test cases that are 
                        executed by Playwright's powerful and reliable automation engine.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="conclusion" className="mb-16">
                  <div className="bg-gradient-hero rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-bold text-foreground-white mb-6 font-montserrat">
                      Ready to move beyond autocomplete and build a truly AI-assisted engineering team?
                    </h2>
                    <Button variant="hero" size="xl">
                      Book an AI Enablement Assessment
                    </Button>
                  </div>
                </section>
              </div>
            </div>
          </article>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RobotFrameworkVsPlaywright;