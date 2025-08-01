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
				'sans': ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'montserrat': ['Montserrat', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					dark: 'hsl(var(--background-dark))',
					section: 'hsl(var(--background-section))'
				},
				foreground: {
					DEFAULT: 'hsl(var(--foreground))',
					light: 'hsl(var(--foreground-light))',
					white: 'hsl(var(--foreground-white))'
				},
				brand: {
					primary: 'hsl(var(--brand-primary))',
					'primary-dark': 'hsl(var(--brand-primary-dark))',
					purple: 'hsl(var(--brand-purple))',
					'purple-light': 'hsl(var(--brand-purple-light))'
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
					dark: 'hsl(var(--card-dark))',
					'dark-foreground': 'hsl(var(--card-dark-foreground))'
				},
				glass: {
					border: 'hsl(var(--glass-border))',
					bg: 'hsl(var(--glass-bg))',
					'bg-dark': 'hsl(var(--glass-bg-dark))'
				}
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-section': 'var(--gradient-section)',
				'gradient-card': 'var(--gradient-card)'
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
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.5s ease-out',
				'slide-up': 'slide-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
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
				'pulse-slow': 'pulse-slow 4s ease-in-out infinite'
			},
			transitionProperty: {
				'smooth': 'var(--transition-smooth)',
				'fast': 'var(--transition-fast)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
