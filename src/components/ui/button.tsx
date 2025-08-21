import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Enhanced Button Component with Neural Network Design System
 * 
 * Features AI-first design variants with neural animations and advanced micro-interactions
 * Built with performance-first animation architecture using CSS custom properties
 */

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        // Enhanced Core Variants with Luminous Effects
        default: "glass-card-light text-brand-primary hover:text-brand-cyan hover:shadow-glow hover:scale-105 glow-primary border border-brand-primary/30",
        secondary: "glass-card border border-brand-primary/20 text-foreground-dark hover:bg-brand-primary/10 hover:border-brand-primary/40 hover:shadow-glow",
        outline: "border-2 border-brand-primary/40 text-brand-primary hover:bg-brand-primary/10 hover:border-brand-primary hover:shadow-glow hover:scale-105",
        ghost: "text-brand-primary hover:bg-brand-primary/10 hover:text-brand-cyan",
        link: "text-brand-primary underline-offset-4 hover:underline hover:text-brand-cyan glow-cyan",
        
        // Hero Section Enhanced Variants
        hero: "glass-card bg-gradient-to-r from-brand-primary to-brand-purple text-white hover:shadow-glow hover:scale-105 glow-primary border border-brand-primary/30",
        "hero-secondary": "glass-card border-2 border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/10 hover:text-brand-cyan hover:shadow-glow hover:scale-105 glow-cyan",
        
        // Premium Luminous Variants
        "luminous-primary": "glass-card bg-gradient-to-r from-brand-primary via-brand-purple to-brand-cyan text-white hover:shadow-glow hover:scale-110 glow-primary animate-glow-pulse",
        "luminous-secondary": "glass-card border-2 border-brand-cyan/50 text-brand-cyan hover:bg-brand-cyan/15 hover:border-brand-cyan hover:shadow-glow hover:scale-105 glow-cyan",
        "luminous-ghost": "glass-card-light text-brand-primary hover:bg-gradient-to-r hover:from-brand-primary/10 hover:to-brand-cyan/10 hover:text-brand-cyan hover:shadow-glow",
        
        // Enterprise & CTA Variants  
        enterprise: "glass-card border-2 border-brand-purple/30 text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple hover:shadow-glow hover:scale-105",
        "enterprise-cta": "glass-card bg-gradient-to-r from-brand-purple to-brand-primary text-white hover:shadow-glow hover:scale-110 border border-brand-purple/30 glow-primary"
      },
      size: {
        default: "h-12 px-6 py-3 text-sm",
        sm: "h-10 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg font-semibold",
        icon: "h-12 w-12",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-16 w-16"
      },
      glow: {
        none: "",
        soft: "hover:shadow-soft",
        medium: "hover:shadow-glow",
        intense: "hover:shadow-glow-purple hover:animate-glow-pulse"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "none"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /** Enable neural pulse animation on hover */
  neuralPulse?: boolean
  /** Enable holographic shimmer effect */
  holographic?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, asChild = false, neuralPulse = false, holographic = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Dynamic class composition for advanced effects
    const dynamicClasses = cn(
      buttonVariants({ variant, size, glow, className }),
      {
        "animate-neural-pulse": neuralPulse,
        "animate-holographic-shimmer": holographic,
        // Performance optimization: use transform3d for hardware acceleration
        "will-change-transform": variant?.includes("neural") || variant?.includes("quantum"),
      }
    )
    
    return (
      <Comp
        className={dynamicClasses}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
