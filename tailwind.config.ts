import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Satoshi', 'Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
				'satoshi': ['Satoshi', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
					background: {
						DEFAULT: 'hsl(var(--background))',
						section: 'hsl(var(--background-section))',
						card: 'hsl(var(--background-card))',
						light: 'hsl(var(--background-light))',
						alternate: 'hsl(var(--background-alternate))',
						subtle: 'hsl(var(--background-subtle))'
					},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					muted: 'hsl(var(--foreground-muted))',
					dark: 'hsl(var(--foreground-dark))',
					'dark-muted': 'hsl(var(--foreground-dark-muted))'
				},
				brand: {
					primary: 'hsl(var(--brand-primary))',
					'primary-dark': 'hsl(var(--brand-primary-dark))',
					'primary-glow': 'hsl(var(--brand-primary-glow))',
					purple: 'hsl(var(--brand-purple))',
					'purple-dark': 'hsl(var(--brand-purple-dark))',
					dark: 'hsl(var(--brand-dark))',
					darker: 'hsl(var(--brand-darker))',
					accent: 'hsl(var(--brand-accent))',
					'accent-dark': 'hsl(var(--brand-accent-dark))',
					cyan: 'hsl(var(--brand-cyan))'
				},
				text: {
					'highlight-on-light': 'hsl(var(--text-highlight-dark))',
					'highlight-on-dark': 'hsl(var(--text-highlight-light))',
					'luminous-on-light': 'hsl(var(--text-luminous-dark))',
					'luminous-on-dark': 'hsl(var(--text-luminous-light))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					light: 'hsl(var(--card-light))',
					'light-foreground': 'hsl(var(--card-light-foreground))'
				},
					glass: {
						border: 'hsl(var(--glass-border))',
						bg: 'hsl(var(--glass-bg))',
						'bg-dark': 'hsl(var(--glass-bg-dark))',
						'bg-light': 'hsl(var(--glass-bg-light))'
					}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-data': 'var(--gradient-data)',
				'gradient-matrix': 'var(--gradient-matrix)',
				'gradient-section': 'var(--gradient-section)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-neural-glow': 'var(--gradient-neural-glow)',
				'gradient-quantum-field': 'var(--gradient-quantum-field)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'lg': 'var(--shadow-lg)',
				'glow': 'var(--shadow-glow)',
				'glass': 'var(--glass-shadow)',
				'glass-lg': 'var(--glass-shadow-lg)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-up-stagger': {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(93, 109, 252, 0.3)' },
					'50%': { boxShadow: '0 0 40px rgba(93, 109, 252, 0.6), 0 0 60px rgba(0, 255, 255, 0.3)' }
				},
				'mesh-shift': {
					'0%': { transform: 'translateX(0) translateY(0)' },
					'25%': { transform: 'translateX(20px) translateY(-10px)' },
					'50%': { transform: 'translateX(-15px) translateY(15px)' },
					'75%': { transform: 'translateX(10px) translateY(-20px)' },
					'100%': { transform: 'translateX(0) translateY(0)' }
				},
				'luminous-drift': {
					'0%, 100%': { transform: 'translateY(0px) translateX(0px)', opacity: '0.6' },
					'33%': { transform: 'translateY(-15px) translateX(10px)', opacity: '1' },
					'66%': { transform: 'translateY(10px) translateX(-8px)', opacity: '0.8' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'scale-in': 'scale-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up': 'slide-up 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'slide-up-stagger': 'slide-up-stagger 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'mesh-shift': 'mesh-shift 20s ease-in-out infinite',
				'luminous-drift': 'luminous-drift 8s ease-in-out infinite',
				'ambient-pulse': 'ambient-pulse 6s ease-in-out infinite',
				'twinkle': 'twinkle 4s ease-in-out infinite',
				'slow-zoom': 'slow-zoom 8s linear infinite',
				'grid-emerge': 'grid-emerge 8s ease-out infinite',
				'grid-wave': 'grid-wave 4s ease-in-out infinite',
				'mesh-flow': 'mesh-flow 6s ease-in-out infinite',
				'wave-flow': 'wave-flow 8s ease-in-out infinite',
				'energy-sweep-1': 'energy-sweep-1 8s linear infinite',
				'energy-sweep-2': 'energy-sweep-2 8s linear infinite',
				'energy-sweep-3': 'energy-sweep-3 8s linear infinite',
				'float-data': 'float-data 12s ease-in-out infinite',
				'central-glow': 'central-glow 8s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
				'neural-pulse': 'neural-pulse var(--neural-pulse-duration) ease-in-out infinite',
				'neural-flow': 'neural-flow var(--neural-flow-duration) linear infinite',
				'neural-connect': 'neural-connect var(--neural-connect-duration) ease-in-out infinite',
				'data-stream': 'data-stream 12s linear infinite',
				'quantum-field': 'quantum-field 20s linear infinite',
				'matrix-rain': 'matrix-rain 8s linear infinite',
				'holographic-shimmer': 'holographic-shimmer 3s linear infinite',
				'neural-network-expansion': 'neural-network-expansion 4s ease-out infinite'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'fast': 'var(--transition-fast)',
				'neural': 'var(--transition-neural)',
				'quantum': 'var(--transition-quantum)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
