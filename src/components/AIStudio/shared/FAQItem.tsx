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
      className={`border-b border-[#00000010] last:border-b-0 ${
        index === 0 ? "pt-4" : ""
      }`}
    >
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-6 text-left hover:text-brand-primary transition-colors duration-200"
      >
        <span className="text-lg font-semibold text-foreground-dark pr-8">
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-brand-primary flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] pb-6" : "max-h-0"
        }`}
      >
        <p className="text-foreground-dark/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};
