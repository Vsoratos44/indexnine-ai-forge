import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "dark" | "light"
  asChild?: boolean
}

const base = "rounded-3xl border shadow-glass backdrop-blur-xl transition-all duration-300"
const variants: Record<NonNullable<CardGlassProps["variant"]>, string> = {
  dark: "bg-glass-bg border-glass-border hover:shadow-glass-lg hover:border-brand-primary/30",
  light: "bg-glass-bg-light border-glass-border hover:shadow-glass-lg hover:border-brand-primary/30",
}

const CardGlass = React.forwardRef<HTMLDivElement, CardGlassProps>(
  ({ className, variant = "dark", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(base, variants[variant], "p-8", className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)
CardGlass.displayName = "CardGlass"

const CardGlassHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mb-6", className)} {...props} />
  )
)
CardGlassHeader.displayName = "CardGlassHeader"

const CardGlassTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("heading-h3 text-foreground", className)} {...props} />
  )
)
CardGlassTitle.displayName = "CardGlassTitle"

const CardGlassMeta = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm text-foreground-muted", className)} {...props} />
  )
)
CardGlassMeta.displayName = "CardGlassMeta"

const CardGlassBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("text-foreground-muted", className)} {...props} />
  )
)
CardGlassBody.displayName = "CardGlassBody"

const CardGlassFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-6", className)} {...props} />
  )
)
CardGlassFooter.displayName = "CardGlassFooter"

export { CardGlass, CardGlassHeader, CardGlassTitle, CardGlassMeta, CardGlassBody, CardGlassFooter }
