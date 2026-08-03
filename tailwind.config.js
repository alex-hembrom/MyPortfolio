/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#090A0F', 
          card: '#13151F',
          lighter: '#1A1D2D'
        },
        accent: {
          purple: '#8B5CF6',
          indigo: '#6366F1',
          glow: 'rgba(139, 92, 246, 0.15)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}