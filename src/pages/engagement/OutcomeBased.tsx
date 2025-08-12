import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { CardGlass } from "@/components/ui/CardGlass";
import { Target, TrendingUp, Handshake, Shield, Zap, CheckCircle } from 'lucide-react';

const OutcomeBased = () => {
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
              Outcome-Based <span className="bg-gradient-primary bg-clip-text text-transparent">Partnerships</span>
            </h1>
            <p className="text-xl text-foreground-white/80 mb-12 leading-relaxed font-montserrat">
              Align our success with yours through outcome-based engagement models that focus on delivering measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl">Explore Partnership</Button>
              <Button variant="hero-secondary" size="xl">Success Stories</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome Features */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6 font-montserrat">Outcome-Based Advantages</h2>
            <p className="text-xl text-foreground-muted max-w-3xl mx-auto font-montserrat">
              Partnership models designed around your success metrics and business objectives.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Results-Focused", description: "Our compensation is directly tied to achieving your defined success metrics." },
              { icon: TrendingUp, title: "Shared Success", description: "We succeed when you succeed, creating true partnership alignment." },
              { icon: Handshake, title: "Risk Sharing", description: "Shared risk model that demonstrates our confidence in delivering results." },
              { icon: Shield, title: "Performance Guarantee", description: "Clear performance guarantees and accountability for outcomes." },
              { icon: Zap, title: "Agile Adaptation", description: "Flexible approach that adapts based on real-world results and feedback." },
              { icon: CheckCircle, title: "Proven Metrics", description: "Established KPIs and measurement frameworks for transparent tracking." }
            ].map((advantage, index) => (
<CardGlass className="p-8" key={index}>
                <div className="bg-gradient-to-br from-brand-primary to-brand-accent rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-montserrat">{advantage.title}</h3>
                <p className="text-foreground-muted leading-relaxed font-montserrat">{advantage.description}</p>
              </CardGlass>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready for a True Partnership?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our outcome-based model can drive exceptional results for your business.
          </p>
          <Button variant="hero" size="xl">Start Partnership</Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutcomeBased;