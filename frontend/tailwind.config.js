/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        img1: "url('./src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
}