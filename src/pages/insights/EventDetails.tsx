import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowLeft, Users, Clock } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import {
  WebPageSchema,
  BreadcrumbSchema,
  ArticleSchema,
} from "@/components/SEOStructuredData";
import Event2020 from "../../assets/images/2020.jpeg";
import styles from "../../assets/css/stylesheet.module.css";

const EventDetails = () => {
  const { eventId } = useParams();

  // Same EventsData array as in Events.tsx
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

  // Get event by index
  const index = parseInt(eventId || "0");
  const event = EventsData[index];

  // Fallback if invalid index
  if (!event || index < 0 || index >= EventsData.length) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl font-bold mb-4 font-montserrat text-foreground-dark">
            Event Not Found
          </h1>
          <p className="text-foreground-dark-muted mb-8 font-montserrat">
            The event you're looking for doesn't exist.
          </p>
          <Link to="/insights/events">
            <Button variant="btnSecondary">Back to Events</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // SEO Implementation
  useSEO({
    title: `${event.title} | IndexNine Events`,
    description: event.description,
    canonicalUrl: `https://www.indexnine.com/insights/events/${index}`,
    keywords: `${event.title}, technology events, ${event.location}, IndexNine`,
    ogImage: "https://www.indexnine.com/images/event-og.jpg",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Structured Data */}
      <WebPageSchema
        title={`${event.title} | IndexNine`}
        description={event.description}
        url={`https://www.indexnine.com/insights/events/${index}`}
      />

      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.indexnine.com" },
          { name: "Insights", url: "https://www.indexnine.com/insights" },
          { name: "Events", url: "https://www.indexnine.com/insights/events" },
          {
            name: event.title,
            url: `https://www.indexnine.com/insights/events/${index}`,
          },
        ]}
      />

      <ArticleSchema
        title={event.title}
        description={event.description}
        author="IndexNine Team"
        datePublished="2024-09-15"
        dateModified="2024-10-02"
        url={`https://www.indexnine.com/insights/events/${index}`}
        image="https://www.indexnine.com/images/event-hero.jpg"
      />

      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 pt-32 pb-16">
          <Link
            to="/insights/events"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors font-montserrat"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="text-sm bg-white/10 text-white px-4 py-2 rounded-full font-montserrat border border-white/20 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {event.location}
              </span>
              <span className="text-sm bg-white/10 text-white px-4 py-2 rounded-full font-montserrat border border-white/20 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {event.date}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-6 leading-tight font-montserrat">
              {event.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Event Details Content */}
      <section className={`py-24 ${styles.sectionBgData} bg-white`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Event Image */}
                {event.image && (
                  <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-12">
                  <h2 className="text-3xl font-semibold text-foreground-dark mb-6 font-montserrat">
                    About This Event
                  </h2>
                  <p className="text-foreground-dark-muted text-lg leading-relaxed font-montserrat mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Event Highlights */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-dark mb-6 font-montserrat">
                    Event Highlights
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 bg-gradient-card-light rounded-xl border border-glass-border">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground-dark mb-1 font-montserrat">
                          Networking
                        </h4>
                        <p className="text-sm text-foreground-dark-muted font-montserrat">
                          Connect with industry leaders and professionals
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-card-light rounded-xl border border-glass-border">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground-dark mb-1 font-montserrat">
                          Latest Insights
                        </h4>
                        <p className="text-sm text-foreground-dark-muted font-montserrat">
                          Learn about emerging AI and technology trends
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-card-light rounded-xl border border-glass-border">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground-dark mb-1 font-montserrat">
                          Workshops
                        </h4>
                        <p className="text-sm text-foreground-dark-muted font-montserrat">
                          Interactive sessions and hands-on experiences
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-gradient-card-light rounded-xl border border-glass-border">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground-dark mb-1 font-montserrat">
                          Demonstrations
                        </h4>
                        <p className="text-sm text-foreground-dark-muted font-montserrat">
                          Access to cutting-edge product demos
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What to Expect */}
                <div className="mb-12">
                  <h3 className="text-2xl font-semibold text-foreground-dark mb-6 font-montserrat">
                    What to Expect
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-brand-primary mt-1">✓</span>
                      <span className="text-foreground-dark-muted font-montserrat">
                        Keynote presentations from thought leaders in AI and
                        FinTech
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-primary mt-1">✓</span>
                      <span className="text-foreground-dark-muted font-montserrat">
                        Panel discussions on the future of technology and
                        innovation
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-primary mt-1">✓</span>
                      <span className="text-foreground-dark-muted font-montserrat">
                        Networking opportunities with peers and industry experts
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-primary mt-1">✓</span>
                      <span className="text-foreground-dark-muted font-montserrat">
                        Live product demonstrations and interactive exhibits
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-brand-primary mt-1">✓</span>
                      <span className="text-foreground-dark-muted font-montserrat">
                        Exclusive insights into emerging technologies and best
                        practices
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div
                  className={`sticky top-24 ${styles.middleCardBg2} rounded-2xl p-8 shadow-glass-lg border border-white/10`}
                >
                  <h3 className="text-xl font-semibold text-white mb-6 font-montserrat">
                    Event Information
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/60 font-montserrat mb-1">
                          Date
                        </p>
                        <p className="text-white font-montserrat">
                          {event.date}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/60 font-montserrat mb-1">
                          Location
                        </p>
                        <p className="text-white font-montserrat">
                          {event.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-sm text-white/60 font-montserrat mb-1">
                          Duration
                        </p>
                        <p className="text-white font-montserrat">
                          Full Day Event
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button variant="btnSecondary" className="w-full mb-4">
                    Register Now
                  </Button>

                  {/* <Button
                    variant="outline"
                    className="w-full bg-white/5 text-white border-white/20 hover:bg-white/10"
                  >
                    Add to Calendar
                  </Button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Events Section */}
      <section className={`py-24 ${styles.sectionBgData} bg-white`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-foreground-dark font-montserrat">
              More Upcoming Events
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {EventsData.filter((_, idx) => idx !== index)
              .slice(0, 3)
              .map((relatedEvent, idx) => {
                const relatedIndex = EventsData.findIndex(
                  (e) => e.title === relatedEvent.title
                );
                return (
                  <Link
                    key={idx}
                    to={`/insights/events/${relatedIndex}`}
                    className="block bg-gradient-card-light backdrop-blur-xl rounded-2xl p-6 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="mb-4">
                      <span className="text-xs bg-brand-purple/10 text-primary px-3 py-1 rounded-full font-montserrat">
                        {relatedEvent.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground-dark mb-3 font-montserrat">
                      {relatedEvent.title}
                    </h3>
                    <p className="text-sm text-foreground-dark-muted font-montserrat line-clamp-2">
                      {relatedEvent.description}
                    </p>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
