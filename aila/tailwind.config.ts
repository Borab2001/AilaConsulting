import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			'istanbul': "url('/images/istanbulv1.webp')"
  		},
  		width: {
  			'header': 'calc(100% - 2rem)'
  		},
		padding: {
			'menu': '10vh 0 15vh'
		},
  		colors: {
  			'background': 'rgb(5, 5, 5)',
  			'bento': 'rgb(16, 16, 16)',
  			'element': 'rgb(25, 25, 25)',
  			'border': 'rgb(31, 31, 31)',
  			'elementBorder': 'rgb(33, 33, 33)',
  			'title': 'rgb(204, 204, 204)',
  			'subtitle': 'rgb(117, 117, 117)',
  			'text': 'rgb(153, 153, 153)',
  			'primary': 'rgb(230, 230, 230)',
  			// background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			// primary: {
  			// 	DEFAULT: 'hsl(var(--primary))',
  			// 	foreground: 'hsl(var(--primary-foreground))'
  			// },
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
  			// border: 'hsl(var(--border))',
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
  		},
		transitionDuration: {
			"800": "800ms",
		},
		animation: {
			marquee: "marquee var(--duration) linear infinite",
			"marquee-vertical": "marquee-vertical var(--duration) linear infinite",
		},
		keyframes: {
			marquee: {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(calc(-100% - var(--gap)))" },
			},
			"marquee-vertical": {
				from: { transform: "translateY(0)" },
				to: { transform: "translateY(calc(-100% - var(--gap)))" },
			},
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
