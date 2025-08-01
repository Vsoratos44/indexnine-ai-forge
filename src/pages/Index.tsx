import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import SocialProof from '@/components/SocialProof';
import ClientExperience from '@/components/ClientExperience';
import ProductLifecycle from '@/components/ProductLifecycle';
import PracticesStudios from '@/components/PracticesStudios';
import Differentiators from '@/components/Differentiators';
import Insights from '@/components/Insights';
import Footer from '@/components/Footer';

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
      <Insights />
      <Footer />
    </div>
  );
};

export default Index;
