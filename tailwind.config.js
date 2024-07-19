/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
        primary: '#004AAD',
        secondary: '#F9F9F9',
        titleFont: '#006cff',
        normalFont: '#6f6f6f',
        footer:"#69C800",
      },
    },
  },
  plugins: [],
}
