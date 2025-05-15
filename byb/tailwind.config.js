/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
			"open-sans": ["Open Sans", "sans-serif"],
			crimson: ["Crimson Text", "serif"],
			"crimson-pro": ["Crimson Pro", "serif"],
			mono: ["Inconsolata", "monospace"],
		},
		colors: {
      white : "#FFFFFF",
      black : "#000000",
      bgDark : '#1a1a1a',
      gray :	"#333333",
      green : 	"#32CD32",
      red :	"#FF0000",
		
		},
    extend: {},
  },
  plugins: [],
}