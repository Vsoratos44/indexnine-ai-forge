import React from "react";
import { FAQItem } from "../shared/FAQItem";
import { useFAQ } from "../../../hooks/useFAQ";

export const FAQSection: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQ();

  const faqData = [
    {
      question: "What if our data isn't clean or ready for AI?",
      answer:
        "This is one of the most common challenges we help solve. Our AI Audit includes a comprehensive data readiness assessment. We'll identify gaps, recommend modernization strategies, and—if needed—can help you build the data infrastructure required for AI success. Many of our most successful engagements started with messy data.",
    },
    {
      question: "How do you ensure ROI on AI investments?",
      answer:
        "Our approach is fundamentally outcome-driven. We start every engagement by defining clear, measurable success metrics tied to your business goals. Our 'eval-first' engineering methodology ensures we validate accuracy and impact before launch. Post-deployment, we provide ongoing monitoring and optimization to maximize your return.",
    },
    {
      question:
        "Do you work with specific AI technologies or are you platform-agnostic?",
      answer:
        "We're platform-agnostic and framework-agnostic. We work with leading LLM providers (OpenAI, Anthropic, Google, AWS Bedrock), orchestration frameworks (LangGraph, LangChain), and cloud platforms (AWS, GCP, Azure). Our focus is on choosing the right technology for your specific needs, not pushing a particular vendor.",
    },
    {
      question: "How long does it take to see results from an AI project?",
      answer:
        "Timeline depends on scope. Our AI Audits deliver strategic clarity in 4-8 weeks. For implementation, our dedicated engineering pods can deliver a production-ready MVP in 8-12 weeks. We prioritize rapid validation and iterative delivery—you'll see tangible progress within the first month of any engagement.",
    },
    {
      question:
        "What does an 'AI Growth Engine' engagement look like long-term?",
      answer:
        "It evolves with you. It might start with a 4-8 week AI Audit to build a roadmap. This could lead to a 3-6 month LAUNCH phase to build your MVP. Post-launch, we often transition to a retainer-based SCALE phase, where we help you optimize the platform and build out your internal Center of Excellence over 12+ months.",
    },
    {
      question:
        "Can you help us if we've already started an AI project that's struggling?",
      answer:
        "Absolutely. We specialize in 'AI rescue' engagements. Our AI Audit can quickly diagnose what's not working—whether it's technical architecture, unclear success criteria, or organizational alignment issues. We then provide a clear path forward, often salvaging existing work while course-correcting for success.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-[#efeff6] to-[#fff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-foreground-dark">
              Frequently Asked{" "}
              <span className="text-brand-primary">Questions</span>
            </h2>
            <p className="text-lg text-foreground-dark/80">
              Get answers to common questions about our AI Growth Engine and
              partnership approach.
            </p>
          </div>

          <div className="space-y-0 rounded-3xl bg-[#fff] px-8 py-4 shadow-lg">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => toggleFAQ(index)}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
