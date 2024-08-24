/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'greenish-yellow': '#d7fb00',
        'mirage': '#171e2e',
        'ebony': '#384052',
        'my-grey': '#9799aa',
        
      },




    },
  },
  plugins: [],
}