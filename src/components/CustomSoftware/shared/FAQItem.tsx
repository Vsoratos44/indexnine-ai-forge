import React from "react";
import { ChevronDown } from "lucide-react";

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
  return (
    <div
      className={`border-b border-foreground-dark/10 last:border-b-0 ${
        index === 0 ? "pt-0" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full py-6 flex items-start justify-between gap-4 text-left hover:opacity-80 transition-opacity"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-foreground-dark pr-4">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-primary flex-shrink-0 mt-1 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-foreground-dark/70 leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
};
