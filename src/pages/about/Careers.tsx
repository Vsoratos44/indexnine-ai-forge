import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Users, Zap, Heart, Award } from 'lucide-react';

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our engineering team to build cutting-edge web applications using modern technologies."
    },
    {
      title: "AI/ML Engineer",
      department: "Innovation Lab",
      location: "Remote / New York",
      type: "Full-time",
      description: "Develop and deploy machine learning models to solve complex business problems."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Design and maintain scalable cloud infrastructure and deployment pipelines."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / London",
      type: "Full-time",
      description: "Drive product strategy and execution for our innovative software solutions."
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance, plus wellness programs and mental health support."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and unlimited PTO to maintain a healthy work-life balance."
    },
    {
      icon: Zap,
      title: "Professional Growth",
      description: "Continuous learning opportunities, conference attendance, and skill development programs."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented, passionate people in an inclusive and supportive environment."
    },
    {
      icon: Award,
      title: "Competitive Compensation",
      description: "Competitive salaries, equity participation, and performance-based bonuses."
    }
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight font-montserrat">
              Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-12 leading-relaxed font-montserrat">
              Be part of a dynamic team that's shaping the future of technology. We're looking for passionate individuals who want to make a real impact.
            </p>
            <Button variant="hero" size="xl">View Open Positions</Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Why IndexNine?</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              We believe that great people build great products. That's why we've created an environment where talent thrives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{benefit.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500">
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{benefit.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Open Positions</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Explore current opportunities to join our growing team and make an impact.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="relative bg-gradient-card backdrop-blur-xl rounded-3xl p-8 shadow-glass-lg border border-glass-border hover:shadow-glow transition-all duration-500">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2 font-montserrat">{position.title}</h3>
                    <p className="text-foreground-muted mb-4 font-montserrat">{position.description}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span className="font-montserrat">{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="font-montserrat">{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-montserrat">{position.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <Button variant="ghost" className="text-brand-primary hover:text-white hover:bg-brand-primary/20 border border-brand-primary/30 rounded-xl">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-8 font-montserrat">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-foreground/80 mb-12 max-w-2xl mx-auto font-montserrat">
            We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <Button variant="hero" size="xl">Send Your Resume</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;