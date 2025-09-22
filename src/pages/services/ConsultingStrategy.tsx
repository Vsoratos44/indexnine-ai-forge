import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardGlass } from "@/components/ui/CardGlass";
import {
  ServiceSchema,
  WebPageSchema,
  BreadcrumbSchema,
} from "@/components/SEOStructuredData";
import { useSEO } from "@/hooks/useSEO";
import {
  Lightbulb,
  Target,
  Rocket,
  CheckCircle,
  Users,
  TrendingUp,
  Download,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import ServiceVideoBackground from "@/components/ServiceVideoBackground";
import styles from "../../assets/css/stylesheet.module.css";
import introImg from "@/assets/images/str-section-img.png";
import blogImg from "@/assets/images/blog-img2.webp";
import csDigital from "@/assets/images/cs-digital.webp";
import csAi from "@/assets/images/cs-ai.webp";
import csTech from "@/assets/images/cs-technology.webp";
import csProd from "@/assets/images/cs-product.webp";

const ConsultingStrategy = () => {
  // SEO optimization
  useSEO({
    title:
      "Technology Consulting & Digital Strategy Services | Enterprise AI Consulting | IndexNine",
    description:
      "Leading technology consulting and digital transformation strategy services. AI strategy consulting, technology roadmaps, and expert guidance for enterprise digital transformation initiatives.",
    keywords:
      "technology consulting services, digital transformation strategy, AI strategy consulting, enterprise consulting, technology roadmap planning, digital strategy services, business technology consulting, strategic technology planning",
    canonicalUrl: "https://www.indexnine.com/services/consulting",
    schemaType: "WebPage",
  });

  return (
    <div className="min-h-screen bg-background">
      <ServiceSchema
        name="Technology Consulting & Strategy Services"
        description="Strategic technology consulting to accelerate digital transformation and drive business growth"
        serviceType="Technology Consulting"
      />
      <WebPageSchema
        title="Technology Consulting & Digital Strategy Services | Enterprise AI Consulting | IndexNine"
        description="Leading technology consulting and digital transformation strategy services. AI strategy consulting, technology roadmaps, and expert guidance for enterprise digital transformation initiatives."
        url="https://www.indexnine.com/services/consulting"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com/" },
          { name: "Services", url: "https://www.indexnine.com/services" },
          {
            name: "Consulting & Strategy",
            url: "https://www.indexnine.com/services/consulting",
          },
        ]}
      />
      <Header />

      {/* <div className="container mx-auto px-6 lg:px-8 pt-32">
        <Breadcrumbs />
      </div> */}

      {/* Hero Section */}
      <section className="relative min-h-[100vh] sm:min-h-[780px] overflow-hidden bg-black">
        <ServiceVideoBackground />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-32 sm:pt-48 pb-16 sm:pb-24">
          <div className="max-w-8xl mx-auto text-center lg:text-left">
            <div className="mb-4 sm:mb-6">
              <span className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-brand-primary/10 text-brand-primary rounded-full text-xs sm:text-sm font-medium border border-brand-primary/50 backdrop-blur-sm">
                Strategy & Consulting
              </span>
            </div>
            <h1 className="text-3xl sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-4 sm:mb-6 leading-[1.2] animate-fade-in font-montserrat">
              Strategic Technology &<br />
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                AI Consulting
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/85 mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0 font-montserrat px-4 sm:px-0">
              We provide expert consulting to align your technology and AI
              strategy with business objectives, ensuring every investment
              drives measurable value and competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-scale-in px-4 sm:px-0">
              <Button
                variant="btnPrimary"
                size="xl"
                className="w-full sm:w-auto min-w-[220px] h-12 sm:h-14"
                onClick={() => {
                  window.open(
                    "https://calendly.com/vaughn-soratos-indexnine",
                    "_blank"
                  );
                }}
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section
        className={` ${styles.strBg1} pt-16 sm:pt-24 lg:pt-32 bg-[#fff]`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-8xl mx-auto">
            {/* Mobile-first layout */}
            <div className="block lg:hidden">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-semibold text-foreground-dark mb-4 font-montserrat">
                  From Strategy to Execution
                </h2>
                <p className="text-base sm:text-lg text-foreground-dark-muted font-montserrat">
                  Our consulting services bridge the gap between business vision
                  and technical implementation. We help you make informed
                  decisions about technology investments, AI adoption, and
                  digital transformation initiatives.
                </p>
              </div>

              <div className="mb-8">
                <img
                  src={introImg}
                  alt="Strategy execution visualization"
                  className="w-full max-w-md mx-auto"
                />
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/30">
                      <Lightbulb className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground-dark">
                      Strategic Planning
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat text-sm">
                      Develop comprehensive technology roadmaps aligned with
                      your business goals and market opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/30">
                      <Target className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground-dark">
                      Risk Assessment
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat text-sm">
                      Identify and mitigate technical, operational, and
                      strategic risks before they impact your business.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-16 h-16 flex items-center justify-center border border-brand-primary/30">
                      <Rocket className="h-6 w-6 text-brand-purple" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-foreground-dark">
                      Implementation Support
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat text-sm">
                      Guide execution with hands-on support, ensuring strategies
                      translate into successful outcomes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-6">
              <div className="text-left mb-12 col-span-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-foreground-dark mb-6 font-montserrat">
                  From Strategy to Execution
                </h2>
                <p className="text-lg text-foreground-dark-muted mx-auto font-montserrat pr-16">
                  Our consulting services bridge the gap between business vision
                  and technical implementation. We help you make informed
                  decisions about technology investments, AI adoption, and
                  digital transformation initiatives.
                </p>
                <img
                  src={introImg}
                  alt="Strategy execution visualization"
                  className="max-w-[75%] -my-16 -mx-16"
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
                    <div>
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Target className="h-8 w-8 text-brand-purple" />
                      </div>
                    </div>
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
                    <div>
                      <div className="relative bg-gradient-to-br from-brand-primary/20 via-brand-primary/10 to-brand-purple/20 backdrop-blur-md rounded-2xl w-20 h-20 flex items-center justify-center border border-brand-primary/30 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                        <Rocket className="h-8 w-8 text-brand-purple" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h3 className="text-xl font-semibold mb-2 text-foreground-dark">
                        Implementation Support
                      </h3>
                      <p className="text-foreground-dark-muted font-montserrat">
                        Guide execution with hands-on support, ensuring
                        strategies translate into successful outcomes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center pt-16 sm:pt-24 lg:pt-32 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark">
            Our Consulting Services
          </h2>
          <p className="text-base sm:text-lg text-foreground-dark-muted max-w-6xl mx-auto font-montserrat px-4 sm:px-0">
            Comprehensive consulting across all aspects of technology strategy
            and implementation.
          </p>
        </div>
      </section>

      {/* Consulting Services Section */}
      <section
        className={`pb-16 sm:pb-24 lg:pb-32 bg-[#fff] relative overflow-hidden ${styles.strBg2}`}
      >
        <div className="container mx-auto pt-16 sm:pt-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto rounded-tl-3xl rounded-tr-3xl bg-[#fff] p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-16 lg:gap-x-8">
              <Card className="border-0 shadow-none bg-[#ffffff]">
                <CardContent className="p-0">
                  <div className="text-left">
                    <img
                      src={csDigital}
                      alt="Digital transformation strategy visualization"
                      className="w-full h-auto max-w-md mb-4 max-h-48 sm:max-h-64 object-cover rounded-xl"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground-dark">
                    Digital Transformation Strategy
                  </h3>
                  <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 font-montserrat">
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
                      src={csAi}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4 max-h-64 object-fill rounded-xl"
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
                      src={csTech}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4 max-h-64 object-fill rounded-xl"
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
                      src={csProd}
                      alt="Blogs"
                      className="w-full h-auto max-w-md mb-4 max-h-64 object-fill rounded-xl"
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <Card className="p-4 sm:p-6 lg:p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground-dark">
                        Strategy Sprint
                      </h3>
                      <p className="text-2xl sm:text-3xl font-semibold text-brand-purple mb-3 sm:mb-4">
                        2-4 Weeks
                      </p>
                      <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 font-montserrat">
                        Rapid strategic assessment and roadmap development for
                        specific initiatives or challenges.
                      </p>
                    </CardContent>
                    <Button variant="btnPrimary" className="w-full mt-auto">
                      Learn More
                    </Button>
                  </Card>

                  <Card className="p-4 sm:p-6 lg:p-8 bg-[#000000] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative flex flex-col">
                    <CardContent className="p-0 h-full">
                      <div className="inline-block px-2 sm:px-3 py-1 bg-brand-purple text-white text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
                        Most Popular
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground">
                        Strategic Partnership
                      </h3>
                      <p className="text-2xl sm:text-3xl font-semibold text-brand-purple mb-3 sm:mb-4">
                        3-6 Months
                      </p>
                      <p className="text-sm sm:text-base text-foreground-muted mb-4 sm:mb-6 font-montserrat">
                        Comprehensive consulting engagement with hands-on
                        implementation support and ongoing guidance.
                      </p>
                    </CardContent>
                    <Button className="w-full mt-auto" variant="btnSecondary">
                      Get Started
                    </Button>
                  </Card>

                  <Card className="p-4 sm:p-6 lg:p-8 bg-[#fff] border-card-border shadow-lg hover:shadow-xl transition-all duration-300 relative text-foreground-dark flex flex-col">
                    <CardContent className="p-0 h-full">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-foreground-dark">
                        Advisory Retainer
                      </h3>
                      <p className="text-2xl sm:text-3xl font-semibold text-brand-purple mb-3 sm:mb-4">
                        Ongoing
                      </p>
                      <p className="text-sm sm:text-base text-foreground-dark-muted mb-4 sm:mb-6 font-montserrat">
                        Continuous strategic guidance and support as your
                        trusted technology advisor.
                      </p>
                    </CardContent>
                    <Button variant="btnPrimary" className="w-full mt-auto">
                      Learn More
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Our Consulting Section */}
          <section className="pb-16 sm:pb-24 lg:pb-32">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto text-center">
                <div
                  className={`p-6 sm:p-8 lg:p-12 rounded-3xl ${styles.middleCardBg}`}
                >
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-4 sm:mb-6 font-montserrat">
                    Why Choose IndexNine Consulting?
                  </h2>
                  <p className="text-base sm:text-lg text-foreground-muted mb-8 sm:mb-12 max-w-3xl mx-auto font-montserrat px-4 sm:px-0">
                    We combine deep technical expertise with business acumen to
                    deliver consulting that drives real results.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
                    <Card className=" text-left bg-transpoarent border-0">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold mb-3 text-foreground flex items-center">
                          <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-4 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
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
                          <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-4 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
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
                          <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-4 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
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
                          <div className="relative rounded-full bg-gradient-to-r from-[#505CFD19] to-brand-purple/20 w-14 h-14 flex items-center justify-center mr-4 border border-white/20 group-hover:shadow-glow transition-all duration-300 group-hover:scale-110">
                            <CheckCircle className="h-6 w-6 text-white mt-0.5 flex-shrink-0" />
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

          {/* AI Transformation Roadmap Section */}
          <section
            id="transformation-roadmap"
            className="py-24 lg:py-32 relative overflow-hidden bg-background-dark"
          >
            <div className="container mx-auto px-6">
              <div className="max-w-8xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
                    <span className="leading-[1.4]">
                      AI Transformation Roadmap
                    </span>
                  </h2>
                  <p className="text-lg text-foreground-white/80 max-w-3xl mx-auto">
                    We help clients figure out their transformation journey using our Outcome-First Consulting approach:
                  </p>
                </div>

                {/* 5-Step Process */}
                <div className="grid md:grid-cols-5 gap-6 mb-16">
                  {[
                    {
                      step: "1",
                      title: "Align Value & Goals",
                      description: "Co-define the business outcomes to move—so every choice traces back to value.",
                    },
                    {
                      step: "2", 
                      title: "Discover Opportunities & Readiness",
                      description: "Identify AI opportunities and evaluate Potential/ Readiness/ Risk and define a focused candidate list.",
                    },
                    {
                      step: "3",
                      title: "Define Solutions & Choose Bets", 
                      description: "Shape solutions for the priority opportunities; classify Tactical vs Strategic bets.",
                    },
                    {
                      step: "4",
                      title: "Outcome Roadmap",
                      description: "Create an outcome-oriented roadmap, with owners, dependencies, experiments to de-risk scale.",
                    },
                    {
                      step: "5",
                      title: "Enable Teams & Governance",
                      description: "Recommend team shape, governance model, adoption practices, to execute roadmap with confidence.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-b from-brand-purple to-[#505CFD] rounded-xl flex items-center justify-center mx-auto mb-[-2rem] relative z-[10]">
                        <div className="relative w-12 h-12 rounded-sm flex items-center justify-center bg-gradient-to-r from-[#727AF2] to-[#535DE1] border border-white/25">
                          <span className="text-white font-semibold">{item.step}</span>
                        </div>
                      </div>
                      <div className="bg-gradient-to-tr from-[#ffffff01] via-[#ffffff10] to-[#ffffff05] border border-[#ffffff19] bg-clip-padding backdrop-filter backdrop-blur-lg h-full rounded-2xl">
                        <div className="px-4 pt-10 pb-6 bg-transparent">
                          <h3 className="text-lg font-medium mb-3 text-foreground-white">
                            {item.title}
                          </h3>
                          <p className="text-sm text-foreground-white/80">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Two-Section Framework */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Where to Play */}
                  <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-4 text-foreground-white">
                        Where to Play (The "WHAT" part of transformation)
                      </h3>
                      <p className="text-foreground-white/80 mb-4">
                        Quick Wins | Strategic Bets | Early Experiments
                      </p>
                    </div>
                  </div>

                  {/* How to Win */}
                  <div className="relative overflow-hidden bg-gradient-card-light border border-[#ffffff39] rounded-2xl p-8 hover:border-brand-primary/30 transition-all duration-500 transform hover:scale-102 hover:-translate-y-2 animate-fade-in group bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/8 via-transparent to-brand-purple/8 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 rounded-2xl opacity-50"></div>
                    
                    <div className="relative">
                      <h3 className="text-xl font-semibold mb-4 text-foreground-white">
                        How to Win (The "HOW" part of transformation)
                      </h3>
                      <p className="text-foreground-white/80 mb-4">
                        Outcome-oriented Roadmap | Operating-Model
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Outcomes Bar */}
                <div className="bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
                  <div className="grid grid-cols-4 gap-8 text-center">
                    <div>
                      <h4 className="font-semibold text-foreground-white mb-2">Outcomes</h4>
                      <p className="text-sm text-foreground-white/70">What you get</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-white mb-2">Clarity</h4>
                      <p className="text-sm text-foreground-white/70">First bets & what to ship first</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-white mb-2">Confidence</h4>
                      <p className="text-sm text-foreground-white/70">Quick, low-risk proofs & feasibility signals</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground-white mb-2">Momentum</h4>
                      <p className="text-sm text-foreground-white/70">Sequenced plan, owners & decisions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* CTA Banner */}
      <section className={`py-16 sm:py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-white px-4 sm:px-0">
              <span className="leading-[1.3] sm:leading-[1.4]">
                Ready to Transform Your Technology Strategy?
              </span>
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 px-4 sm:px-0">
              Let's discuss how our strategic consulting can accelerate your
              digital transformation and competitive advantage.
            </p>
            <Button
              variant="btnSecondary"
              size="lg"
              className="w-full sm:w-auto min-w-[220px] h-12 sm:h-14"
              onClick={() => {
                window.open(
                  "https://calendly.com/vaughn-soratos-indexnine",
                  "_blank"
                );
              }}
            >
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
