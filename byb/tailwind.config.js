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
      darkBlue : '#00008B',
      royalBlue: "#4169E1",
      accent: '#3949AB',
      white: "#FFFFFF",
      black : "#000000",
      bgDark: '#1a1a1a',
      LightGray:	"#D3D3D3",
		  button : "#052159"
		},
    extend: {},
  },
  plugins: [],
}