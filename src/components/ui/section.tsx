import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Background variant for alternating sections */
  variant?: "default" | "light" | "alternate"
  /** Remove default padding */
  noPadding?: boolean
  /** Add separator border */
  separator?: boolean
  /** Custom container max width */
  containerSize?: "default" | "full" | "4xl" | "6xl"
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    variant = "default", 
    noPadding = false, 
    separator = false,
    containerSize = "default",
    children,
    ...props 
  }, ref) => {
    const sectionClasses = cn(
      // Base padding - consistent spacing
      !noPadding && "py-16 md:py-20 lg:py-28",
      // Background variants
      {
        "bg-background": variant === "default",
        "bg-background-alternate": variant === "alternate",
        "bg-background-section": variant === "light",
      },
      // Optional separator
      separator && "border-t border-border/20",
      className
    )

    const containerClasses = cn(
      "container mx-auto px-4 md:px-6 lg:px-8",
      {
        "max-w-screen-xl": containerSize === "default",
        "max-w-full": containerSize === "full",
        "max-w-4xl": containerSize === "4xl",
        "max-w-6xl": containerSize === "6xl",
      }
    )

    return (
      <section className={sectionClasses} ref={ref} {...props}>
        <div className={containerClasses}>
          {children}
        </div>
      </section>
    )
  }
)

Section.displayName = "Section"

export { Section }