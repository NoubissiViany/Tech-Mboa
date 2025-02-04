/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#04FA74",
          200: "#006B3D",
          300: "#04312A",
        },
        secondary: {
          100: "#FE9706",
          200: "#FBBF24",
          300: "#FFD301"
        },
        neutral: {
          100: "#F5F5F5",
          200: "#F5FBFA",
          300: "#D9DFC6",
          400: "#080909"
        },
        success: "#10B981",
        danger: "#F72D20",
        warning: "#FACC15",
        info: "#3B82F6",
      },
    },
  },
  plugins: [],
}