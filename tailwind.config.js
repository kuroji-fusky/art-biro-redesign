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
				"mouse-memoirs": ["Mouse Memoirs", ...defaultTheme.fontFamily.sans],
				"lato": ["Lato", ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
