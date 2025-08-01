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
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-neural focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden",
  {
    variants: {
      variant: {
        // Core System Variants
        default: "bg-brand-primary text-foreground-white hover:bg-brand-primary-dark hover:shadow-glow transform hover:scale-105",
        secondary: "bg-background-section text-foreground border border-border hover:bg-background hover:shadow-soft",
        outline: "border border-foreground-white text-foreground-white hover:bg-foreground-white hover:text-foreground",
        ghost: "text-foreground-white hover:bg-foreground-white/10",
        link: "text-brand-primary underline-offset-4 hover:underline hover:text-brand-primary-dark",
        
        // Hero Section Variants
        hero: "bg-brand-primary text-foreground-white hover:bg-brand-primary-dark hover:shadow-glow transform hover:scale-105 shadow-lg",
        "hero-secondary": "border-2 border-foreground-white text-foreground-white hover:bg-foreground-white hover:text-foreground transform hover:scale-105",
        
        // AI-First Neural Variants
        neural: "bg-gradient-primary text-foreground-white hover:shadow-glow transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-neural-glow before:opacity-0 hover:before:opacity-100 before:transition-neural",
        "neural-pulse": "bg-brand-primary text-foreground-white hover:bg-brand-primary-glow animate-neural-pulse hover:shadow-glow transform hover:scale-110",
        "neural-matrix": "bg-gradient-matrix text-foreground hover:shadow-[0_0_30px_hsl(var(--brand-matrix))] transform hover:scale-105 animate-holographic-shimmer",
        quantum: "bg-gradient-quantum-field text-foreground-white hover:shadow-[0_0_40px_hsl(var(--brand-quantum))] transform hover:scale-105 animate-quantum-field",
        
        // Interactive Data Variants
        "data-stream": "bg-gradient-data text-foreground-white hover:shadow-[0_0_30px_hsl(var(--brand-accent-vivid))] transform hover:scale-105 before:absolute before:inset-0 before:bg-gradient-data before:opacity-0 hover:before:opacity-20 before:transition-neural",
        
        // Enterprise Variants
        enterprise: "bg-card border-2 border-brand-primary/30 text-foreground hover:bg-brand-primary/5 hover:border-brand-primary hover:shadow-glass-lg transform hover:scale-105",
        "enterprise-cta": "bg-brand-primary text-foreground-white hover:bg-brand-primary-dark hover:shadow-glow transform hover:scale-110 shadow-lg border border-brand-primary-glow/50"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-16 w-16"
      },
      glow: {
        none: "",
        soft: "hover:shadow-soft",
        medium: "hover:shadow-glow",
        intense: "hover:shadow-[0_0_50px_hsl(var(--brand-primary-glow))]"
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
