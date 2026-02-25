/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#4f46e5",
        accent:"#6366f1",
        dark:"#0f172a"
      }
    },
  },
  plugins: [],
}