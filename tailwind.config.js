/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Blue': '#004aad',
        'Blue-hover': '#004badd1',
      },
      fontFamily: {
        'heebo': ['Heebo', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
