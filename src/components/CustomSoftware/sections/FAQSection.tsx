import React from "react";
import { FAQItem } from "../shared/FAQItem";
import { useFAQ } from "../../../hooks/useFAQ";

export const FAQSection: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQ();

  const faqData = [
    {
      question:
        "How is IndexNine different from a traditional staff augmentation firm?",
      answer:
        "Traditional staff augmentation provides developers without strategic context or accountability for outcomes. We deploy integrated engineering pods that bring proprietary accelerators (snap.mvp, snap.bluprint, snap.agents, snap.automate), a product mindset, and proven methodologies. Every engagement starts with Sprint Zero to ensure technical decisions serve your business goals—not just fill seats. We're a flexible engineering partner, not a body shop.",
    },
    {
      question: "What is 'AI-Augmented Product Engineering'?",
      answer:
        "AI-Augmented Product Engineering means embedding AI and generative models across the entire product lifecycle—from design and prototyping to development, QA, and documentation. This approach accelerates ideation, automates repetitive engineering tasks, and reduces iteration cycles by 30-40%. Our teams leverage AI-assisted coding tools that boost throughput by 20-30% on average tasks, resetting expectations around velocity and quality.",
    },
    {
      question: "What is the 'Sprint Zero Blueprint'?",
      answer:
        "Sprint Zero is our proprietary 2-4 week framework for de-risking your product launch. It includes: (1) Strategic Validation workshops to pressure-test business and user problems, (2) Architectural Blueprint designed by senior architects for scalability and security, (3) High-fidelity Interactive Prototype that validates the user journey, and (4) De-Risked Roadmap with fixed-bid pricing and guaranteed timeline. It's the foundation that ensures your investment delivers ROI.",
    },
    {
      question: "What are your proprietary 'snap' platforms?",
      answer:
        "Our snap platforms are internal accelerators we've built to dramatically reduce time-to-market: snap.mvp (multi-tenant SaaS starter kit saving 3+ months), snap.bluprint (AI-powered design automation achieving 50% faster outcomes), snap.agents (rapid AI workflow prototyping tool), and snap.automate (QA automation framework). These platforms are included in our engagements at no additional cost and give our pods a significant velocity advantage.",
    },
    {
      question: "Do you work with existing development teams?",
      answer:
        "Yes. Our pods are designed to integrate seamlessly with your existing teams. We work within your tools (GitHub, Jira, Slack), processes, and culture. Many clients use us to augment internal teams during critical launches or to provide specialized expertise (AI, cloud architecture, legacy modernization) their team may lack. We augment and empower—we don't replace.",
    },
    {
      question: "Can you help modernize our legacy system?",
      answer:
        "Absolutely. Product Modernization is one of our two core offerings. We specialize in migrating legacy stacks (Java to Java 21, PHP exit strategies, Python 2.x to 3.x), transforming monoliths into cloud-native microservices, and using AI-accelerated refactoring to cut modernization timelines by 50%. We start with an Architectural Review ($15K+, 2-3 weeks) to provide a clear modernization roadmap with cost/performance improvements.",
    },
    {
      question: "How do you price your services?",
      answer:
        "We offer three engagement models: (1) Fixed-Price Projects for well-defined scope (Sprint Zero at $25K+, MVP Development at $75K+, Architectural Reviews at $15K+), (2) Dedicated Pods for ongoing development (monthly retainer based on pod size and composition), and (3) Outcome-Based Partnerships for strategic engagements (pricing tied to specific business metrics). Transparency is core to our approach—we always provide fixed-bid pricing after Sprint Zero.",
    },
    {
      question:
        "What's the typical timeline for a product launch or modernization project?",
      answer:
        "Timelines vary by project type: Sprint Zero (2-4 weeks), MVP Development (8-12 weeks with snap.mvp), Full Product Launch (12-20 weeks), Modernization Projects (12-24 weeks depending on scope). We prioritize rapid validation and iterative delivery—you'll see tangible progress within the first 2 weeks. Our AI-augmented approach and proprietary accelerators significantly compress timelines compared to traditional development.",
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer:
        "Yes. Most clients transition from fixed-price MVP development to a dedicated Scale Pod for ongoing feature development, optimization, and support. We also offer maintenance-only engagements for clients who want to own development internally but need expert support for critical issues. Our goal is to be your long-term flexible engineering partner, adapting to your evolving needs.",
    },
    {
      question: "How does your Engineering Studio connect with your AI Studio?",
      answer:
        "Our studios work together seamlessly. The AI Studio focuses on strategic AI consulting, agentic workflow development, and AI Center of Excellence buildout. The Engineering Studio handles full-stack product development, modernization, and dedicated engineering pods. Many clients engage both—using AI Studio for AI strategy (AI Audits, P2R scoring) and Engineering Studio for implementation (building the AI-powered platform). It's a comprehensive approach to modern software delivery.",
    },
  ];

  return (
    <section className="pb-24 lg:pb-32 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-foreground-dark font-montserrat px-4 sm:px-0">
              Your Engineering{" "}
              <span className="text-brand-primary">Questions, Answered</span>
            </h2>
            <p className="text-base sm:text-lg text-foreground-dark/80 font-montserrat px-4 sm:px-0">
              Get answers to common questions about our AI-augmented engineering
              approach and flexible partnership model.
            </p>
          </div>

          <div className="space-y-0 max-w-4xl  mx-auto rounded-2xl sm:rounded-3xl bg-[#fff] px-4 sm:px-8 py-4 shadow-lg">
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
