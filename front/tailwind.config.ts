import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/shared/components/ui/*.{js,ts,jsx,tsx,mdx}",
		"./src/shared/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/_app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/features/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		fontFamily: {
			sans: ["var(--font-manrope)", "sans-serif"],
			Manrope_Bold: ["var(--font-manrope-bold)", "serif"],
			Manrope_ExtraBold: ["var(--font-manrope-extrabold)", "sans-serif"],
			Manrope_ExtraLight: ["var(--font-manrope-extralight)", "sans-serif"],
			Manrope_Light: ["var(--font-manrope-light)", "sans-serif"],
			Manrope_Medium: ["var(--font-manrope-medium)", "sans-serif"],
			Manrope_SemiBold: ["var(--font-manrope-semibold)", "sans-serif"],
		},
		screens: {
			'sx': '480px', // => @media (min-width: 480px) { ... }
			'sm': '640px', // => @media (min-width: 640px) { ... }
			'md': '768px', // => @media (min-width: 768px) { ... }
			'lg': '1024px', // => @media (min-width: 1024px) { ... }
			'xl': '1280px', // => @media (min-width: 1280px) { ... }
			'2xl': '1536px', // => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require('@tailwindcss/typography'),
	],
};
export default config;
