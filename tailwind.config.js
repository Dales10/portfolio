/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '490px',
      },
      spacing: {
        '4.7': '4.7rem',
        '100': '25rem',
        '125': '31.25rem',
      },
      inset: {
        '250': '62.5rem',
      },
      colors: {
        "background": "#000005",
      },
      blur: {

      }
    },
  },
  plugins: [],
}
