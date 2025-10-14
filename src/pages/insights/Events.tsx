import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import PipedriveForm from "@/components/PipedriveForm";
import { useSEO } from "@/hooks/useSEO";
import {
  WebPageSchema,
  BreadcrumbSchema,
  ArticleSchema,
} from "@/components/SEOStructuredData";
import { Tickets, Download, Clock, Star } from "lucide-react";
import Event2020 from "../../assets/images/2020.jpeg";

import styles from "../../assets/css/stylesheet.module.css";

import { Link } from "react-router-dom";

const Events = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedevent, setSelectedevent] = useState<string | null>(null);

  const handleDownload = (eventTitle: string) => {
    setSelectedevent(eventTitle);
    setShowForm(true);
  };

  const EventsData = [
    {
      title: "Money 2020",
      description:
        "The one exception to talk all things AI & FinTech might be Varun Ramanathan, PhD. It's not often services companies really live, breathe, and leverage AI the right way. Varun is leading the charge for us to continue to transform our org into masters of AI driven product engineering. We have so much talent in this house it's pretty wild to me. I could really feel the energy throughout all my meetings with our engineering teams in Pune.",
      location: "Money 2020",
      featured: true,
      date: "26-29 Oct 2025",
      image: Event2020,
    },
    {
      title: "Events 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      location: "AWS",
      date: "26-29 Oct 2025",
      image: Event2020,
    },
    {
      title: "Events 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      location: "AWS",
      date: "26-29 Oct 2025",
      image: Event2020,
    },
    {
      title: "Events 4",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      location: "AWS",
      date: "26-29 Oct 2025",
      image: Event2020,
    },
  ];

  // Implement comprehensive SEO for Events page
  useSEO({
    title:
      "Technology Events & Guides | AI, Cloud Computing, Digital Transformation | IndexNine",
    description:
      "Download free expert Events on AI development, cloud migration, digital transformation, and software architecture. Comprehensive guides with real-world examples and best practices from IndexNine experts.",
    canonicalUrl: "https://www.indexnine.com/insights/events",
    keywords:
      "technology Events, AI guides, cloud computing, digital transformation, software architecture, free downloads, tech resources",
    ogImage: "https://www.indexnine.com/images/Events-og.jpg",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <WebPageSchema
        title="Technology Events & Guides | IndexNine"
        description="Download free expert Events on AI development, cloud migration, digital transformation, and software architecture."
        url="https://www.indexnine.com/insights/events"
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com" },
          { name: "Insights", url: "https://www.indexnine.com/insights" },
          {
            name: "Events",
            url: "https://www.indexnine.com/insights/events",
          },
        ]}
      />

      <ArticleSchema
        title="Technology Events & Expert Guides"
        description="Comprehensive collection of technology Events covering AI development, cloud migration, digital transformation, and software architecture with real-world examples."
        author="IndexNine Expert Team"
        datePublished="2024-01-15"
        dateModified="2024-09-04"
        url="https://www.indexnine.com/insights/events"
        image="https://www.indexnine.com/images/Events-hero.jpg"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[480px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto pt-48 pb-24">
          <div className="max-w-4xl mx-auto text-center lg:text-left ml-0">
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[4rem] xl:text-[4rem] font-semibold text-foreground mb-6 leading-[1.25] animate-fade-in font-montserrat">
              Indexnine{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Events
              </span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Foster learning and connection in a dynamic and engaging
              environment. Join us to stay ahead in the ever-evolving tech
              landscape.
            </p>
          </div>
        </div>
      </section>

      <div className={` ${styles.sectionBgData} bg-white`}>
        {/* Featured event */}
        {EventsData.filter((event) => event.featured).map((event, idx) => {
          // Find the actual index in the full EventsData array
          const actualIndex = EventsData.findIndex(
            (e) => e.title === event.title
          );

          return (
            <section key={idx} className="py-24 lg:py-32 bg-transparent">
              <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                  <div
                    className={`backdrop-blur-xl rounded-3xl shadow-glass-lg overflow-hidden ${styles.middleCardBg2}`}
                  >
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content */}
                      <div className="p-12">
                        <div className="mb-4 gap-2 flex">
                          <span className="text-sm bg-white/5 text-white/80 px-3 py-2 rounded-full font-montserrat border border-white/20">
                            {event.location}
                          </span>
                          <span className="text-sm bg-white/5 text-white/80 px-3 py-2 rounded-full font-montserrat border border-white/20">
                            {event.date}
                          </span>
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 font-montserrat">
                          {event.title}
                        </h2>
                        <p className="text-xl text-foreground-muted mb-8 leading-tight font-montserrat">
                          {event.description}
                        </p>

                        <Link to={`/insights/events/${actualIndex}`}>
                          <Button variant="btnSecondary">View Details</Button>
                        </Link>
                      </div>

                      {/* Visual */}
                      <div className="bg-gradient-to-br from-brand-primary/80 to-brand-purple/80 flex items-center justify-center">
                        <div className="text-center">
                          <img src={Event2020} alt={event.title} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Events Grid */}
        <section
          className={`pb-24 lg:pb-32 relative overflow-hidden bg-transparent`}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-semibold text-foreground-dark font-montserrat">
                Upcoming Events
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-8xl mx-auto">
              {EventsData.filter((event) => !event.featured).map(
                (event, idx) => {
                  // Find the actual index in the full EventsData array
                  const actualIndex = EventsData.findIndex(
                    (e) => e.title === event.title
                  );

                  return (
                    <Link
                      key={idx}
                      to={`/insights/events/${actualIndex}`}
                      className="block"
                    >
                      <div className="relative bg-gradient-card-light backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500 transform hover:scale-105 cursor-pointer">
                        {/* event Icon */}
                        <div
                          className={`relative w-16 h-16 flex mb-6 items-center justify-center transition-all ${styles.icnBg}`}
                        >
                          <Tickets className="w-8 h-8 text-primary" />
                        </div>

                        <div className="mb-4 flex gap-2">
                          <span className="text-sm bg-brand-purple/10 text-primary px-3 py-1 rounded-full font-montserrat">
                            {event.location}
                          </span>
                          <span className="text-sm bg-brand-purple/10 text-primary px-3 py-1 rounded-full font-montserrat">
                            {event.date}
                          </span>
                        </div>

                        <h3 className="text-2xl font-semibold text-foreground-dark mb-4 font-montserrat leading-tight">
                          {event.title}
                        </h3>
                        <p className="text-foreground-dark-muted mb-4 leading-relaxed font-montserrat">
                          {event.description}
                        </p>

                        <Button variant="btnSecondary" className="mt-2">
                          View Details
                        </Button>
                      </div>
                    </Link>
                  );
                }
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Final CTA Section */}
      <section className={`py-24 lg:py-32 ${styles.ctaBg}`}>
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-white">
            <span className="leading-[1.2]">
              {" "}
              Stay Updated with New Releases
            </span>
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Get notified when we publish new Events and exclusive content to
            help you stay ahead in technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="btnSecondary" size="lg">
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
