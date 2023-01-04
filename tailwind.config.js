/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"mouse-memoirs": ["var(--font-mouse-memoirs)", ...defaultTheme.fontFamily.sans],
				"lato": ["var(--font-lato)", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}