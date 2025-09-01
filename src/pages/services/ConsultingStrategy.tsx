import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardGlass } from "@/components/ui/CardGlass";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import {
  Lightbulb,
  Target,
  Rocket,
  CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import styles from "../../assets/css/stylesheet.module.css";
import introImg from "@/assets/images/str-section-img.png";
import blogImg from "@/assets/images/blog-img2.webp";

const ConsultingStrategy = () => {
  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Technology Consulting & Strategy Services"
        description="Strategic technology consulting to accelerate digital transformation and drive business growth"
        serviceType="Technology Consulting"
      />
      <WebPageSchema
        title="Technology Consulting & Strategy Services - Drive Digital Transformation"
        description="Accelerate your digital transformation with our strategic technology consulting services. Expert guidance for technology roadmaps and business growth"
        url="https://yoursite.lovable.app/services/consulting-strategy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://yoursite.lovable.app/" },
          { name: "Services", url: "https://yoursite.lovable.app/services" },
          {
            name: "Consulting & Strategy",
            url: "https://yoursite.lovable.app/services/consulting-strategy",
          },
        ]}
      />
      <Header />

      {/* <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div> */}

      {/* Hero Section */}
      <section className="relative min-h-[780px] overflow-hidden bg-black">
        <ServiceVideoBackground />
        <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
          <div className="max-w-6xl mx-auto text-center lg:text-left ml-0">
            <div className="mb-6">
              <span className="inline-block px-6 py-3 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-medium border border-brand-primary/20 backdrop-blur-sm">
                Strategy & Consulting
              </span>
            </div>
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
              Strategic Technology &{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Consulting
              </span>
            </h1>
            <p className="text-xl text-foreground/85 mb-8 max-w-3xl ml-0 font-montserrat">
              We provide expert consulting to align your technology and AI
              strategy with business objectives, ensuring every investment
              drives measurable value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-scale-in">
              <Button variant="btnPrimary" size="lg" className="min-w-[220px]">
                Book a Consultation
              </Button>
              <Button
                variant="btnSecondary"
                size="lg"
                className="min-w-[200px]"
              >
                Download Strategy Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className={` ${styles.strBg1} pt-24 lg:pt-32 bg-[#fff]`}>
        <div className="container mx-auto px-6">
          <div className="max-w-8xl mx-auto grid grid-cols-6">
            <div className="text-left mb-12 col-span-4">
              <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 font-montserrat">
                From Strategy to Execution
              </h2>
              <p className="text-lg text-foreground-dark-muted  mx-auto font-montserrat pr-16">
                Our consulting services bridge the gap between business vision
                and technical implementation. We help you make informed
                decisions about technology investments, AI adoption, and digital
                transformation initiatives.
              </p>
              <img
                src={introImg}
                alt=""
                className="max-w-[75%] -my-16  -mx-16"
              />
            </div>

            <div className="ml-8 col-span-2 mt-16">
              <div className="grid md:grid-rows-3 gap-16">
                <div className="text flex">
                  <div>
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center mb-8 border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Lightbulb className="h-8 w-8 text-brand-purple" />
                    </div>
                  </div>
                  <div className="pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground-dark">
                      Strategic Planning
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat">
                      Develop comprehensive technology roadmaps aligned with
                      your business goals and market opportunities.
                    </p>
                  </div>
                </div>

                <div className="text flex">
                  {/* Icon Section */}
                  <div>
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Target className="h-8 w-8 text-brand-purple" />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground-dark">
                      Risk Assessment
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat">
                      Identify and mitigate technical, operational, and
                      strategic risks before they impact your business.
                    </p>
                  </div>
                </div>

                <div className="text flex">
                  {/* Icon Section */}
                  <div>
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                      <Rocket className="h-8 w-8 text-brand-purple" />
                    </div>
                  </div>

                  {/* Text Section */}
                  <div className="pl-4">
                    <h3 className="text-xl font-semibold mb-2 text-foreground-dark">
                      Implementation Support
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat">
                      Guide execution with hands-on support, ensuring strategies
                      translate into successful outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-24 lg:pt-32">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
            Our Consulting Services
          </h2>
          <p className="text-lg text-foreground-dark-muted max-w-6xl mx-auto font-montserrat">
            Comprehensive consulting across all aspects of technology strategy
            and implementation.
          </p>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section
        className={`pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden ${styles.strBg2}`}
      >
        <div className="container mx-auto pt-24">
          <div className="max-w-6xl mx-auto rounded-tl-3xl  rounded-tr-3xl  bg-[#fff] p-8 mx-auto">
            <div className="grid lg:grid-cols-2 gap-y-16 gap-x-8">
              <Card className="border-0 shadow-none bg-[#ffffff]">
                <CardContent className="p-0">
                  <div className="text-left">
                    <img
                      src={blogImg}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Digital Transformation Strategy
                  </h3>
                  <p className="text-foreground-dark-muted mb-6 font-montserrat">
                    Develop comprehensive digital transformation roadmaps that
                    modernize your operations, enhance customer experience, and
                    create new revenue streams.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Current state assessment and gap analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Technology stack evaluation and recommendations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Phased implementation roadmap with ROI projections
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-[#ffffff]">
                <CardContent className="p-0">
                  <div className="text-left">
                    <img
                      src={blogImg}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    AI Strategy & Implementation
                  </h3>
                  <p className="text-foreground-dark-muted mb-6 font-montserrat">
                    Navigate the AI landscape with strategic guidance on where
                    and how to implement AI for maximum business impact and
                    competitive advantage.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        AI opportunity assessment and prioritization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Data readiness evaluation and improvement plan
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        AI governance framework and risk management
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-[#ffffff]">
                <CardContent className="p-0">
                  <div className="text-left">
                    <img
                      src={blogImg}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Technology Due Diligence
                  </h3>
                  <p className="text-foreground-dark-muted mb-6 font-montserrat">
                    Comprehensive technical assessments for M&A, investment
                    decisions, and strategic partnerships to minimize risk and
                    maximize value.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Technical architecture and code quality assessment
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Scalability and security evaluation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Technical debt assessment and remediation plan
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-none bg-[#ffffff]">
                <CardContent className="p-0">
                  <div className="text-left">
                    <img
                      src={blogImg}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4"
                    />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-foreground-dark">
                    Product Strategy & Innovation
                  </h3>
                  <p className="text-foreground-dark-muted mb-6 font-montserrat">
                    Strategic guidance on product development, market
                    positioning, and innovation strategies that leverage
                    emerging technologies.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Market analysis and competitive positioning
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Product roadmap development and prioritization
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-brand-purple mt-0.5 flex-shrink-0" />
                      <span className="text-foreground-dark-muted font-montserrat">
                        Innovation framework and process design
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <div
        className={`text-foreground relative overflow-hidden bg-[#EFF4FE] ${styles.strBg3}`}
      >
        <div>
          {/* Engagement Models Section */}
          <section className="pb-24 lg:pb-32">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
                    Flexible Engagement Models
                  </h2>
                  <p className="text-lg text-foreground-dark-muted max-w-3xl mx-auto font-montserrat">
                    Choose the consulting approach that best fits your needs and
                    timeline.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0  h-full">
                      <h3 className="text-xl font-semibold mb-4 text-foreground-dark">
                        Strategy Sprint
                      </h3>
                      <p className="text-3xl font-semibold text-brand-purple mb-4">
                        2-4 Weeks
                      </p>
                      <p className="text-foreground-dark-muted mb-6 font-montserrat">
                        Rapid strategic assessment and roadmap development for
                        specific initiatives or challenges.
                      </p>
                    </CardContent>
                    <Button variant="btnPrimary" className="w-full">
                      Learn More
                    </Button>
                  </Card>

                  <Card className="p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                    <CardContent className="p-0 h-full">
                      <div className="inline-block px-3 py-1 bg-brand-purple text-white text-sm rounded-full mb-4">
                        Most Popular
                      </div>
                      <h3 className="text-xl font-semibold mb-4 text-foreground">
                        Strategic Partnership
                      </h3>
                      <p className="text-3xl font-semibold text-brand-purple mb-4">
                        3-6 Months
                      </p>
                      <p className="text-foreground-muted mb-6 font-montserrat">
                        Comprehensive consulting engagement with hands-on
                        implementation support and ongoing guidance.
                      </p>
                    </CardContent>
                    <Button className="w-full" variant="btnSecondary">
                      Get Started
                    </Button>
                  </Card>

                  <Card className="p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <h3 className="text-xl font-semibold mb-4 text-foreground-dark">
                        Advisory Retainer
                      </h3>
                      <p className="text-3xl font-semibold text-brand-purple mb-4">
                        Ongoing
                      </p>
                      <p className="text-foreground-dark-muted mb-6 font-montserrat">
                        Continuous strategic guidance and support as your
                        trusted technology advisor.
                      </p>
                    </CardContent>
                    <Button variant="btnPrimary" className="w-full">
                      Learn More
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Consulting Section */}
          <section className="pb-24 lg:pb-32">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto text-center">
                <div className={`p-12 rounded-3xl ${styles.middleCardBg}`}>
                  {" "}
                  <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-6 font-montserrat">
                    Why Choose IndexNine Consulting?
                  </h2>
                  <p className="text-lg text-foreground-muted mb-12 max-w-3xl mx-auto font-montserrat">
                    We combine deep technical expertise with business acumen to
                    deliver consulting that drives real results.
                  </p>
                  <div className="grid md:grid-cols-2 gap-16">
                    <Card className=" text-left bg-transpoarent border-0">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                          <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center mr-4 border border-white/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-8 w-8 text-white mt-0.5 flex-shrink-0" />
                          </div>{" "}
                          Practitioner-Led Insights
                        </h3>
                        <p className="text-foreground-muted font-montserrat">
                          Our consultants are active practitioners who build and
                          deploy the technologies they recommend.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className=" text-left bg-transpoarent border-0">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                          <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center mr-4 border border-white/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-8 w-8 text-white mt-0.5 flex-shrink-0" />
                          </div>{" "}
                          Implementation Ready
                        </h3>
                        <p className="text-foreground-muted font-montserrat">
                          We don't just provide strategies - we can execute them
                          with our engineering teams.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className=" text-left bg-transpoarent border-0">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                          <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center mr-4 border border-white/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-8 w-8 text-white mt-0.5 flex-shrink-0" />
                          </div>{" "}
                          ROI-Focused Approach
                        </h3>
                        <p className="text-foreground-muted font-montserrat">
                          Every recommendation is backed by clear business value
                          and measurable outcomes.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className=" text-left bg-transpoarent border-0">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                          <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center mr-4 border border-white/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-8 w-8 text-white mt-0.5 flex-shrink-0" />
                          </div>{" "}
                          Future-Proof Solutions
                        </h3>
                        <p className="text-foreground-muted font-montserrat">
                          We help you build strategies that adapt and scale with
                          emerging technologies.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* CTA Banner */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
              <span className="leading-[1.4]">
                Ready to Transform Your Technology Strategy?
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our strategic consulting can accelerate your
              digital transformation and competitive advantage.
            </p>
            <Button variant="btnSecondary" size="lg" className="min-w-[220px]">
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
