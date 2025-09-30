import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  description?: string;
  variant?: "light" | "dark";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  highlight,
  description,
  variant = "light",
}) => {
  const titleColor =
    variant === "dark" ? "text-foreground-white" : "text-foreground-dark";
  const descColor =
    variant === "dark"
      ? "text-foreground-light-muted"
      : "text-foreground-dark/80";

  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 ${titleColor}`}
      >
        <span className="leading-[1.25]">{title}</span>
        {highlight && (
          <>
            <br />
            <span className="text-brand-primary leading-[1.25]">
              {highlight}
            </span>
          </>
        )}
        {subtitle && (
          <>
            <br />
            <span className="leading-[1.25]">{subtitle}</span>
          </>
        )}
      </h2>
      {description && (
        <p className={`text-lg ${descColor} max-w-4xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
};
