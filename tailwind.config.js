// filepath: /home/kszyszko/repositories/servus-landing/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3B82F6', // Blue-500
        'primary-dark': '#2563EB', // Blue-600
        'primary-light': '#EFF6FF', // Blue-50
        'neutral': '#6B7280', // Gray-500
        'neutral-dark': '#1F2937', // Gray-800
        'neutral-light': '#F9FAFB', // Gray-50
      }
    },
  },
  plugins: [],
}