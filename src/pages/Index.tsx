import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import ClientExperience from '@/components/ClientExperience';
import ProductLifecycle from '@/components/ProductLifecycle';
import PracticesStudios from '@/components/PracticesStudios';
import Differentiators from '@/components/Differentiators';
import InsightsCarousel from '@/components/InsightsCarousel';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ValueProposition />
      <SocialProof />
      <ClientExperience />
      <ProductLifecycle />
      <PracticesStudios />
      <Differentiators />
      <InsightsCarousel />
      
      {/* Global CTA Banner */}
      <section id="home-contact" className="py-24 lg:py-32 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground-white mb-8 font-montserrat">
            Ready to transform your idea into an enduring reality?
          </h2>
          <p className="text-xl text-foreground-white/80 mb-12 max-w-2xl mx-auto font-montserrat">
            Let's discuss how our product mindset and AI-forward engineering excellence can accelerate your growth. Schedule a complimentary, no-obligation strategy call with our experts today.
          </p>
          <Button variant="hero" size="xl">Let's Build Together</Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
