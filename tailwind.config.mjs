/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				white: "#fff",
				dark: "#2d211b",
				primary: {
					50: "#f6f5f0",
					100: "#e9e5d8",
					200: "#d5ceb3",
					300: "#bcaf88",
					400: "#a89567",
					500: "#9d875b",
					600: "#836c4b",
					700: "#6a543e",
					800: "#5a4739",
					900: "#4f3f34",
					950: "#2d211b",
				},
				secondary: {
					50: "#f6f5f5",
					100: "#e7e6e6",
					200: "#d2cfd0",
					300: "#b2aeaf",
					400: "#8b8586",
					500: "#706a6b",
					600: "#605a5b",
					700: "#514d4d",
					800: "#464445",
					900: "#3e3b3b",
					950: "#151414",
				},
				whatsapp: "#25D366",
			},
			fontFamily: {
				plusJakarta: ["Plus Jakarta Sans", "sans-serif"],
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
		},
	},
	plugins: [],
}
