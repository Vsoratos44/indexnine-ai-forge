import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import {
  ArrowLeft,
  CheckCircle,
  Download,
  ExternalLink,
  Clock,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";
import BlogDetailsBg from "@/assets/images/blog-details-bg.webp";
import blogImg2 from "@/assets/images/blog-img2.webp";
import styles from "../../../assets/css/stylesheet.module.css";

const leftNavLinks = [
  { href: "#intro", label: "Introduction" },
  { href: "#hiddenCost", label: "The hidden costs" },
  { href: "#glance", label: "At a Glance" },
  { href: "#robotFramework", label: "Robot Framework" },
  { href: "#playwright", label: "Playwright" },
  { href: "#qa", label: "Quality Engineering" },
  { href: "#faqs", label: "Frequently Asked Questions" },
];

const RobotFrameworkVsPlaywright = () => {
  const [selected, setSelected] = useState("#intro");

  useEffect(() => {
    const sections = leftNavLinks.map((link) =>
      document.querySelector(link.href)
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelected(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });
    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Enhanced SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "Robot Framework vs Playwright: Which Test Automation Service is Right for You?",
            description:
              "A deep dive into Robot Framework vs Playwright for enterprise-grade test automation. See which framework powers a better continuous testing and QA process.",
            url: "https://yoursite.lovable.app/insights/blogs/robot-framework-vs-playwright-automation",
            datePublished: "2025-01-20T00:00:00Z",
            dateModified: "2025-01-20T00:00:00Z",
            author: {
              "@type": "Organization",
              name: "Indexnine QA Engineering Team",
            },
            publisher: {
              "@type": "Organization",
              name: "Indexnine Technologies",
              logo: {
                "@type": "ImageObject",
                url: "https://yoursite.lovable.app/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://yoursite.lovable.app/insights/blogs/robot-framework-vs-playwright-automation",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Can you use Robot Framework and Playwright together?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. Robot Framework can use Playwright's engine directly through its modern Browser library. This is a popular and powerful combination that offers Robot's simple syntax with Playwright's speed and reliability.",
                },
              },
              {
                "@type": "Question",
                name: "Is Playwright better than Robot Framework for enterprise QA?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Playwright is often preferred for larger, developer-heavy enterprise teams due to its raw speed, native multi-language support, and advanced debugging features. However, Robot Framework's readability and extensibility make it a highly viable and scalable enterprise solution as well, especially in Python-centric environments.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://yoursite.lovable.app/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://yoursite.lovable.app/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Blogs",
                item: "https://yoursite.lovable.app/insights/blogs",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Robot Framework vs Playwright",
                item: "https://yoursite.lovable.app/insights/blogs/robot-framework-vs-playwright-automation",
              },
            ],
          }),
        }}
      />

      {/* Hero Section */}
      <section
        className="relative  overflow-hidden bg-[#fff] bg-cover bg-center"
        style={{ backgroundImage: `url(${BlogDetailsBg})` }}
      >
        {/* <LivingVoidBackground /> */}
        {/* <img src={BlogDetsilsBg} alt="" className="absolute left-0" /> */}

        <div className="relative z-10 container mx-auto pt-36">
          <div className="max-w-7xl mx-auto text-center lg:text-left ml-0">
            <div className="flex items-center">
              <Link
                to="/insights/blogs"
                className="inline-flex items-center text-foreground-muted hover:text-brand-primary-dark transition-colors mb-6 mr-6"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blogs
              </Link>

              {/* <div className="mb-6">
                <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                  Quality Engineering Services
                </span>
              </div> */}
            </div>

            <h1 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Robot Framework vs. Playwright: <br />
              The Test Automation Showdown Your Business Can't Ignore
            </h1>

            {/* <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              A deep dive into Robot Framework vs Playwright for
              enterprise-grade test automation. See which framework powers a
              better continuous testing and QA process.
            </p> */}

            <div className="flex items-center gap-6 text-sm text-foreground/80 mb-8">
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
            <div className="pt-8">
              <img src={blogImg2} className="w-full" alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gradient-to-b from-white via-white to-[#F0F4FF]">
        <a id="intro"></a>
        <div className="container grid md:grid-cols-3 gap-12 bg-transparent pt-24">
          <div className="text-foreground-dark">
            <div className="sticky top-[120px] pb-8">
              <ul className="space-y-2">
                {leftNavLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setSelected(link.href)}
                      className={`inline-blockpy-2 rounded transition 
                              ${
                                selected === link.href
                                  ? "text-brand-purple font-semibold"
                                  : "text-gray-700"
                              }
                              hover:text-brand-purple
                            `}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div
                className={`p-8 my-8 text-center text-white ${styles.sideCardBg}`}
              >
                <h3 className="text-3xl font-bold">
                  Want to Share Your Insights?
                </h3>
                <p className="text-xl py-8">
                  Join our community of thought leaders and share your expertise
                  with fellow technology professionals.
                </p>
                <Button
                  type="submit"
                  className="px-16 rounded-full transition hover:scale-100"
                  size="lg"
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>

          <div className="col-span-2 w-full">
            {/* Introduction Section */}
            <section className="relative overflow-hidden">
              <div className="container relative z-10">
                <div className="max-w-5xl mx-auto pb-8 ">
                  <div className="space-y-6 text-lg text-foreground-dark-muted leading-relaxed mb-8">
                    <h4 className="font-semibold text-xl ">
                      A deep dive into Robot Framework vs Playwright for
                      enterprise-grade test automation. See which framework
                      powers a better continuous testing andQA process.
                    </h4>
                    <p>
                      In today's competitive landscape, the pressure to balance
                      quality, velocity, and cost is relentless. Cutting corners
                      on Quality Assurance (QA) isn't an option when your
                      product's reputation is on the line, but slow release
                      cycles and rising technical debt can sink you before you
                      find product-market fit.
                    </p>
                    <p>
                      The good news? The days of wrestling with the flaky tests
                      and cross-browser nightmares of legacy frameworks are
                      over. Two modern titans have emerged to address these
                      pains: Robot Framework and Playwright. They deliver the
                      speed, reliability, and developer-friendliness that modern
                      quality engineering services have been missing. But the
                      critical question isn't just which tool is better—it's
                      which tool is right for your business, your team, and your
                      growth stage.
                    </p>
                    <p>
                      At Indexnine, we know it's never just about the tool; it's
                      about a tailored QA process improvement strategy and
                      flawless execution. Through our Sprint 0 discovery process
                      and Agile Product Quality (APQ) Roadmap, we help you build
                      an outcome-based automation strategy that turns QA from a
                      bottleneck into a velocity enabler.
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className=" rounded-full transition hover:scale-100"
                    size="xl"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Our QA Automation Framework eBook (PDF)
                  </Button>
                </div>
              </div>
            </section>

            {/* Comparison Table Section */}
            <a id="hiddenCost"></a>

            <section className="pt-24 pb-16 relative overflow-hidden">
              <div className="container text-lg text-foreground-dark-muted leading-relaxed ">
                <div className="max-w-5xl mx-auto">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-2xl text-foreground-dark">
                      The hidden costs of point solutions
                    </h4>
                    <p>
                      Point solutions promised to solve specific problems
                      exceptionally well. A dedicated CRM for sales. A
                      specialized tool for email marketing. A focused platform
                      for customer support. But as businesses adopted more of
                      these "best-in-class" tools, an unexpected problem
                      emerged: the connections between them became the weakest
                      links.
                    </p>
                    <p>
                      Data silos emerged overnight. Customer information lived
                      in multiple places, often contradicting itself. Teams
                      spent hours manually transferring data between systems.
                      Worse, the big picture— the unified view of customer
                      relationships and business performance—disappeared
                      entirely.
                    </p>
                    <p>
                      The financial impact is eye-opening. Companies now spend
                      an average of $9,643 per employee annually on SaaS
                      applications⁴, with over 50% of licenses going unused for
                      more than 90 days⁵. Perhaps most telling: only 45% of
                      purchased applications are regularly used by employees3.
                      This means businesses are not just paying for hundreds of
                      tools—they're paying for hundreds of tools that sit idle
                      while teams struggle with the complexity of managing what
                      they do use.{" "}
                    </p>

                    <div className="bg-foreground-dark/5 p-8 text-md ">
                      Businesses found themselves managing their tools instead
                      of growing their companies.
                    </div>
                    <a id="glance"></a>
                  </div>
                  <div className="space-y-6 mt-24">
                    <h4 className="font-semibold text-2xl text-foreground-dark mb-8">
                      At a Glance: Robot Framework vs. Playwright Comparison
                    </h4>
                  </div>
                  <div className="overflow-x-auto bg-[#fff]">
                    <table className="w-full border border-glass-border rounded-3xl overflow-hidden bg-glass-bg/50 backdrop-blur-xl ">
                      <thead className="bg-foreground-dark/5">
                        <tr>
                          <th className="text-left p-6 font-montserrat text-foreground-dark font-semibold">
                            Feature
                          </th>
                          <th className="text-center p-6 font-montserrat text-foreground-dark font-semibold">
                            Robot Framework
                          </th>
                          <th className="text-center p-6 font-montserrat text-foreground-dark font-semibold">
                            Playwright
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t border-glass-border-light">
                          <td className="p-6 font-medium text-foreground-dark">
                            Ideal Use Case
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Startups (Seed-Series A), MVPs, teams needing broad
                            testing capabilities (Web, API, Mobile).
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Scale-ups (Series B+), complex web apps, teams
                            demanding high-velocity and parallel execution.
                          </td>
                        </tr>
                        <tr className="border-t border-glass-border-light bg-glass-bg/30">
                          <td className="p-6 font-medium text-foreground-dark">
                            Key Strength
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Readability & Accessibility: Keyword-driven syntax
                            is easy for technical and non-technical staff to
                            understand.
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Speed & Reliability: Modern architecture with
                            auto-waits and web-first assertions minimizes flaky
                            tests.
                          </td>
                        </tr>
                        <tr className="border-t border-glass-border-light">
                          <td className="p-6 font-medium text-foreground-dark">
                            Ecosystem
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Python-based, with a massive ecosystem of libraries
                            for any task, including a wrapper for Playwright
                            itself.
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Native support for TypeScript, JavaScript, Python,
                            Java, and .NET, fitting seamlessly into developer
                            workflows.
                          </td>
                        </tr>
                        <tr className="border-t border-glass-border-light bg-glass-bg/30">
                          <td className="p-6 font-medium text-foreground-dark">
                            Best For...
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Teams aiming to democratize test creation, implement
                            Test-Driven Development (TDD), and require a gentle
                            learning curve.
                          </td>
                          <td className="p-6 text-center text-foreground-dark">
                            Developer-centric teams focused on efficiency, deep
                            debugging (Trace Viewer), and continuous testing of
                            modern, complex web applications.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <a id="robotFramework"></a>
                  </div>
                </div>
              </div>
            </section>

            {/* Robot Framework Section */}
            <section className="pt-8 pb-16 bg-[#fff] text-foreground-dark relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                  <h4 className="font-semibold text-2xl mb-6">
                    Robot Framework: The Startup's Secret Weapon for Agile
                    Quality
                  </h4>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    For early-stage startups, agility and resourcefulness are
                    everything. You need to iterate on your MVP quickly without
                    an army of dedicated QA engineers. This is where Robot
                    Framework shines.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    For our startup clients, our agile product quality
                    assessment often points to Robot Framework when the goal is
                    to establish a scalable, keyword-driven architecture that
                    the whole team can maintain. The business outcome? Your core
                    regression suite is automated in record time, freeing your
                    team to focus on innovation while increasing confidence in
                    every release.
                  </p>

                  <div className="p-8 rounded-3xl bg-foreground-dark/5">
                    <h4 className="font-semibold text-xl mb-6">
                      Why Robot Framework is a Founder's Best Friend
                    </h4>
                    <div className="space-y-6">
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          Human-Readable Syntax
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Its keyword-driven approach is a game-changer. Test
                          cases double as living documentation that product
                          managers and developers can understand, ideal for
                          fostering collaboration.
                        </p>
                      </div>
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          Powerful & Extensible Ecosystem
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Built on Python, Robot Framework boasts a rich library
                          ecosystem that can handle web, API testing, and mobile
                          testing, ensuring you can cover all your bases with
                          one tool.
                        </p>
                      </div>
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          Cost-Effective & Quick to Ramp Up
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          As an open-source tool with a gentle learning curve,
                          it allows your existing team to become productive
                          faster, reducing the need to hire expensive,
                          specialized automation engineers from day one.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a id="playwright"></a>
                </div>
              </div>
            </section>

            {/* Playwright Section */}

            <section className="pt-8 pb-16 bg-[#fff] text-foreground-dark relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                  <h4 className="font-semibold text-2xl mb-6">
                    Playwright: The Enterprise Powerhouse for High-Velocity
                    Teams
                  </h4>
                  <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                    As your startup hits a growth spurt, the game changes.
                    Complex applications, multiple teams, and the demand for a
                    flawless user experience require a framework that is
                    exceptionally robust and fast. Playwright, often leveraged
                    by a mature software testing company, steps into this arena
                    with confidence.
                  </p>
                  <p className="text-lg text-foreground-dark leading-relaxed mb-6">
                    Internally, we leverage Playwright to help enterprises
                    architect for complexity and integrate it into their CI/CD
                    pipelines for true continuous testing. This dramatically
                    reduces regression testing times—we've seen reductions from
                    weeks to hours—and gives stakeholders the confidence to
                    release features more frequently.
                  </p>
                  <div className="p-8 rounded-3xl bg-foreground-dark/5">
                    <h4 className="font-semibold text-xl mb-6">
                      Why Playwright is the Go-To for Scaling Enterprises
                    </h4>
                    <div className="space-y-6">
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          Blazing Speed & Ironclad Reliability
                        </h4>
                        <p className="text-foreground-dark leading-relaxed">
                          Playwright's modern architecture was built to combat
                          flaky tests. Its intelligent auto-waits and web-first
                          assertions, which automatically retry until conditions
                          are met, drastically improve test stability and
                          execution speed.
                        </p>
                      </div>
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          True Cross-Browser Mastery
                        </h4>
                        <p className="text-foreground-dark leading-relaxed">
                          Test reliably on Chromium, WebKit (Safari), and
                          Firefox with a single, consistent API. This is
                          critical for ensuring a consistent user experience.
                        </p>
                      </div>
                      <div className="relative overflow-hidden backdrop-blur-xl bg-[#fff] rounded-3xl p-6">
                        <h4 className="text-lg font-medium text-foreground-dark mb-4 font-montserrat">
                          Developer-Centric Features
                        </h4>
                        <p className="text-foreground-dark leading-relaxed">
                          With first-class support for TypeScript, JavaScript,
                          and Python, Playwright meets your developers where
                          they are. Tools like the Playwright Inspector,
                          Codegen, and the Trace Viewer empower engineers to
                          write, debug, and maintain complex tests with
                          unparalleled efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                  <a id="qa"></a>
                </div>
              </div>
            </section>

            {/* Quality Engineering Partnership Section */}
            <section className="pt-8 pb-16 bg-[#fff] text-foreground-dark relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                  <h4 className="font-semibold text-2xl mb-6">
                    Don't Settle for "Good Enough": A Partner in Quality
                    Engineering
                  </h4>
                  <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-12">
                    <p>
                      Choosing not to leverage modern test automation services
                      is actively costing your business—in slower releases,
                      developer frustration, higher bug-fixing expenses, and
                      lost customers. But a powerful tool is only as good as the
                      artisan wielding it.
                    </p>
                    <p>
                      Before a single line of code is written, our Sprint 0
                      process lays the critical groundwork. We dive deep to
                      understand your product, workflows, and business goals to
                      build an automation strategy that is technically sound and
                      perfectly aligned with your objectives.
                    </p>
                  </div>

                  <div className="p-8 rounded-3xl bg-foreground-dark/5">
                    <h4 className="font-semibold text-xl mb-6">
                      This is how we execute:
                    </h4>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-medium text-foreground-dark mb-2 font-montserrat">
                            Strategize
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Through our APQ assessment, we tailor the right
                            framework—be it Robot, Playwright, or a hybrid—to
                            your specific needs.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-medium text-foreground-dark mb-2 font-montserrat">
                            Execute
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            We build efficient, maintainable automation suites
                            and integrate them into your DevOps lifecycle,
                            aiming for over 90% automation.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-brand-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-lg font-medium text-foreground-dark mb-2 font-montserrat">
                            Empower
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            We ensure your team can confidently manage and scale
                            your QA efforts for the long term.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-glass-border-light">
                      <Button variant="hero" className="w-full rounded-full">
                        Book a Free QA Consulting Session to Build Your
                        Automation Strategy
                      </Button>
                    </div>
                  </div>
                  <a id="faqs"></a>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="pt-8 pb-16 bg-[#fff] text-foreground-dark relative overflow-hidden">
              <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                  <h4 className="font-semibold text-2xl mb-6">
                    Frequently Asked Questions
                  </h4>

                  <div className="space-y-0">
                    {[
                      {
                        question:
                          "Can you use Robot Framework and Playwright together?",
                        answer:
                          "Yes. Robot Framework can use Playwright's engine directly through its modern Browser library. This is a popular and powerful combination that offers Robot's simple syntax with Playwright's speed and reliability.",
                      },
                      {
                        question:
                          "Is Playwright better than Robot Framework for enterprise QA?",
                        answer:
                          "Playwright is often preferred for larger, developer-heavy enterprise teams due to its raw speed, native multi-language support, and advanced debugging features. However, Robot Framework's readability and extensibility make it a highly viable and scalable enterprise solution as well, especially in Python-centric environments.",
                      },
                      {
                        question:
                          "What are the main differences between Robot Framework and Playwright?",
                        answer:
                          "The main differences are in their philosophy and primary user. Robot Framework uses a keyword-driven syntax designed for accessibility and collaboration. Playwright is a developer-first tool with a traditional coding syntax in multiple languages, built for maximum speed and efficiency within engineering workflows.",
                      },
                      {
                        question:
                          "Can you integrate Robot Framework with Playwright for hybrid testing?",
                        answer:
                          "Absolutely. Integrating Robot Framework with the Playwright-based Browser library is an advanced strategy for hybrid testing. It allows you to write simple, maintainable test cases that are executed by Playwright's powerful and reliable automation engine.",
                      },
                    ].map((faq, index, arr) => (
                      <div
                        key={index}
                        className={`relative overflow-hidden backdrop-blur-xl bg-[#fff] border-l border-r border-b border-glass-border-light p-8 
      ${index === 0 ? "rounded-tl-3xl rounded-tr-3xl border-t" : ""} 
      ${
        index === arr.length - 1
          ? "rounded-bl-3xl rounded-br-3xl border-b-1"
          : ""
      }`}
                      >
                        <h3 className="text-xl font-medium text-foreground-dark mb-4 font-montserrat">
                          {faq.question}
                        </h3>
                        <p className="text-foreground-dark leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      {/* CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.4]">Want to Share Your Insights?</span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 font-montserrat">
            Join our community of thought leaders and share your expertise with
            fellow technology professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="rounded-full">
              Contribute
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RobotFrameworkVsPlaywright;
