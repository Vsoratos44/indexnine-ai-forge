import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { openPositions } from "./Jobs";

import { Button } from "@/components/ui/button";
import {
  JobPostingSchema,
  BreadcrumbSchema,
  WebPageSchema,
  FAQSchema,
} from "@/components/SEOStructuredData";
import ServiceAreaSchema from "@/components/seo/ServiceAreaSchema";
import PerformanceOptimizer from "@/components/seo/PerformanceOptimizer";
import SEOAnalytics from "@/components/seo/SEOAnalytics";
import { MapPin, Clock, Users, Zap, Heart, Award } from "lucide-react";
import LivingVoidBackground from "@/components/LivingVoidBackground";
import { Link } from "react-router-dom";
import styles from "../../assets/css/stylesheet.module.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CareersForm from "@/components/CareersForm";

const Careers = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const currentDate = new Date().toISOString();
  const validThrough = new Date(
    Date.now() + 90 * 24 * 60 * 60 * 1000
  ).toISOString(); // 90 days from now

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance, plus wellness programs and mental health support.",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description:
        "Flexible working hours, remote work options, and unlimited PTO to maintain a healthy work-life balance.",
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description:
        "Continuous learning opportunities, conference attendance, and skill development programs.",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description:
        "Work with talented, passionate people in an inclusive and supportive environment.",
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description:
        "Competitive salaries, equity participation, and performance-based bonuses.",
    },
  ];

  return (
    <PerformanceOptimizer enableOptimizations={true} reportToAnalytics={true}>
      <div className="min-h-screen bg-background">
        <SEOAnalytics
          pageTitle="Careers at IndexNine Technologies - Join Our Team"
          pageUrl="https://www.indexnine.com/company/careers"
          category="Careers"
          enableSearchConsole={true}
          enableGTM={true}
          trackingId="GTM-XXXXXXX"
        />
        {/* Enhanced SEO: JobPosting schema for job search engines and AI career assistants */}
        <WebPageSchema
          title="Careers at IndexNine Technologies - Join Our Team"
          description="Explore exciting career opportunities at IndexNine Technologies. Join our team of engineers and innovators building the future of technology."
          url="https://www.indexnine.com/company/careers"
        />
        <BreadcrumbSchema
          items={[
            { name: "Home", url: "https://www.indexnine.com/" },
            { name: "About", url: "https://www.indexnine.com/company/about" },
            {
              name: "Careers",
              url: "https://www.indexnine.com/company/careers",
            },
          ]}
        />
        <ServiceAreaSchema
          serviceName="Technology Career Opportunities"
          serviceType="Employment Services"
        />
        {/* FAQ Schema for career-related questions */}
        <FAQSchema
          faqItems={[
            {
              question: "What is the hiring process at IndexNine Technologies?",
              answer:
                "Our hiring process typically involves an initial application review, phone screening with HR, technical interview with team members, cultural fit assessment, and final interview with leadership. The entire process usually takes 2-3 weeks and we provide feedback at every stage to ensure a transparent and respectful experience.",
            },
            {
              question: "Do you offer remote work opportunities?",
              answer:
                "Yes, we offer flexible remote work arrangements for most positions. We believe in work-life balance and trust our team members to be productive whether they're in our offices in San Francisco, Austin, New York, London, or working remotely. Some positions may require occasional travel or on-site collaboration.",
            },
            {
              question: "What benefits and compensation do you offer?",
              answer:
                "We provide comprehensive benefits including health, dental, and vision insurance, unlimited PTO, flexible working hours, professional development opportunities, conference attendance, competitive salaries, equity participation, and performance-based bonuses. We believe in investing in our people's growth and well-being.",
            },
            {
              question:
                "What technologies and methodologies does your team use?",
              answer:
                "Our technology stack varies by project but commonly includes React, Node.js, Python, cloud platforms (AWS, Azure, GCP), Snowflake, modern data engineering tools, AI/ML frameworks, and DevOps practices. We encourage learning new technologies and provide resources for continuous skill development.",
            },
            {
              question:
                "How does IndexNine support career growth and development?",
              answer:
                "We provide mentorship programs, learning stipends, conference attendance, internal training sessions, and clear career progression paths. We believe in promoting from within and regularly discuss career goals during performance reviews. Many of our senior team members started in junior roles and grew with the company.",
            },
          ]}
        />
        {/* JobPosting schema helps AI career assistants and job search engines understand our openings */}
        {openPositions.map((job, index) => (
          <JobPostingSchema
            key={index}
            title={job.title}
            description={job.description}
            location={job.location}
            employmentType={job.type}
            datePosted={currentDate}
            validThrough={validThrough}
          />
        ))}
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[380px] sm:min-h-[480px] overflow-hidden bg-black">
          <LivingVoidBackground />

          <div className="relative z-10 container mx-auto px-6 pt-48 pb-24">
            <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
              <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25]  animate-fade-in font-montserrat">
                Join Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Team
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/85 mb-8 leading-relaxed font-light animate-slide-up font-montserrat max-w-4xl">
                Be part of a dynamic team that's shaping the future of
                technology. We're looking for passionate individuals who want to
                make a real impact.
              </p>
              <Button variant="btnSecondary" size="xl">
                <a href={"#openPos"}>View Open Positions</a>
              </Button>
            </div>
          </div>
        </section>
        <div
          className={`relative max-w-8xl bg-white mx-auto ${styles.sectionBgData}`}
        >
          {/* Why Join Us */}
          <section className="py-24 lg:py-32 bg-glass-light border-glass backdrop-blur-sm">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-1/6 w-80 h-80 bg-brand-primary/8 rounded-full blur-3xl"></div>
              <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-brand-purple/6 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
              <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                  Why IndexNine?
                </h2>
                <p className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed space-y-4 sm:space-y-6 mb-6">
                  We believe that great people build great products. That's why
                  we've created an environment where talent thrives.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105"
                  >
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {benefits.slice(3).map((benefit, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105"
                  >
                    <div
                      className={`relative w-20 h-20 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                    >
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                      {benefit.title}
                    </h3>
                    <p className="text-foreground-dark-muted font-montserrat">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <a id="openPos" className="absolute mt-[-120px]"></a>
          {/* Open Positions */}
          <section className="pb-24 lg:pb-32 bg-transparent">
            <div className="container mx-auto px-6 lg:px-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark ">
                  Open Positions
                </h2>
                <p className="text-base sm:text-lg text-foreground-dark-muted leading-relaxed ">
                  Explore current opportunities to join our growing team and
                  make an impact.
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-6">
                {openPositions.map((position, index) => (
                  <div
                    key={index}
                    className="relative overflow-hidden backdrop-blur-lg bg-glass-bg border border-glass-border rounded-2xl p-8 shadow-glass hover:shadow-glass-lg transition-all duration-500 transform hover:scale-105"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground-dark mb-6 leading-tight font-montserrat">
                          {position.title}
                        </h3>
                        <p className="text-foreground-dark-muted mb-4 font-montserrat">
                          {position.description}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm text-foreground-dark-muted/50">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="font-montserrat">
                              {position.department}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span className="font-montserrat">
                              {position.location}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span className="font-montserrat">
                              {position.type}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="lg:ml-8">
                        <Link to={`/careers/${index}`}>
                          <Button variant="btnPrimary">View Details</Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        {/* CTA Section */}
        {/* Final CTA Section */}
        <section className={`py-24 lg:py-32 text-white ${styles.ctaBg}`}>
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
              <span className="leading-[1.2]">Don't See the Right Role?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              We're always looking for exceptional talent. Send us your resume
              and let us know how you'd like to contribute to our mission.
            </p>

            <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
              <DialogTrigger asChild>
                <Button variant="btnSecondary" size="lg">
                  Send Your Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl min-h-[400px] h-[80vh] overflow-y-auto">
                <CareersForm
                  className="mt-4"
                  formUrl="https://webforms.pipedrive.com/f/6GYcaOrG7FWBY6qO8j3aJ2oVVqPKzMUnOZkxfQWaEV8hSenWhty6Hpj9iLmdp7x57B"
                />
              </DialogContent>
            </Dialog>
          </div>
        </section>

        <Footer />
      </div>
    </PerformanceOptimizer>
  );
};

export default Careers;
