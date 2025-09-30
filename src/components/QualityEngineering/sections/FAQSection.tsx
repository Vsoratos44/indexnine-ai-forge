import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { FAQItem } from "../shared/FAQItem";
import { useFAQ } from "../../../hooks/useFAQ";
import { faqData } from "../../../data/qualityEngineering/faqData";

export const FAQSection: React.FC = () => {
  const { openFAQ, toggleFAQ } = useFAQ();

  return (
    <section className="pt-16 lg:pt-24 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Your Quality Engineering Questions, Answered"
            variant="light"
          />

          <div className="space-y-0 rounded-3xl bg-[#fff] px-8 py-4">
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
