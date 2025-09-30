import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

export const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}) => {
  const faqId = `faq-${index}`;
  const answerId = `faq-answer-${index}`;

  return (
    <div className="border-b border-border last:border-b-0 bg-background-card-light">
      <button
        id={faqId}
        onClick={onToggle}
        className="w-full py-4 text-left flex justify-between items-center hover:bg-muted/20 transition-colors"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="font-semibold text-foreground-dark pr-4">
          {question}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[#000] flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[#000] flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div id={answerId} role="region" aria-labelledby={faqId} className="pb-4">
          <p className="text-foreground-dark-muted leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
};
