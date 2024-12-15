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
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100%' },
        },
      },
    },
  },
  plugins: [],
}
