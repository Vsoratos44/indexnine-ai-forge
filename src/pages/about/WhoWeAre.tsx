import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Target, Lightbulb, Award, Globe, Heart } from 'lucide-react';

const WhoWeAre = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Execution",
      description: "We strive for perfection in every project, delivering solutions that exceed expectations and drive real business value."
    },
    {
      icon: Lightbulb,
      title: "Innovation-First Mindset",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges and create competitive advantages."
    },
    {
      icon: Heart,
      title: "Client Partnership",
      description: "We believe in true partnerships, aligning our success with yours and maintaining transparent, collaborative relationships."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Our solutions create positive impact across industries and geographies, helping businesses transform and thrive."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Expert Engineers" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-brand-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-brand-purple/6 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground-white mb-8 leading-tight font-montserrat">
              Who <span className="bg-gradient-primary bg-clip-text text-transparent">We Are</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              We are IndexNine, a team of passionate technologists, innovators, and problem-solvers dedicated to transforming businesses through cutting-edge software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-8 font-montserrat">Our Story</h2>
            <p className="text-xl text-foreground-muted leading-relaxed font-montserrat">
              Founded with a vision to bridge the gap between innovative technology and real business outcomes, IndexNine has grown from a small team of passionate developers to a global technology partner trusted by startups and enterprises alike. We believe that the right technology, applied thoughtfully, can transform not just businesses but entire industries.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-brand-primary mb-2 font-montserrat">{stat.number}</div>
                <div className="text-foreground-muted font-montserrat">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Our Values</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Our core values guide everything we do, from how we approach problems to how we build relationships with our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{value.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-foreground-white mb-6 font-montserrat">Our Mission</h3>
              <p className="text-xl text-foreground-white/80 leading-relaxed font-montserrat">
                To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-bold text-foreground-white mb-6 font-montserrat">Our Vision</h3>
              <p className="text-xl text-foreground-white/80 leading-relaxed font-montserrat">
                To be the global leader in transformative technology solutions, recognized for our innovation, expertise, and unwavering commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 font-montserrat">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our team can help you achieve your technology goals and business objectives.
          </p>
          <Button variant="hero" size="xl">Get in Touch</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhoWeAre;