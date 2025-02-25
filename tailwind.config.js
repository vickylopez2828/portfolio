/** @type {import('tailwindcss').Config} */
import tailwindAnimated from "tailwindcss-animated";
import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      animation: {
        glow: 'glow 1s ease-in-out infinite', 
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(174,49,252,0.0)' }, 
          '50%': { boxShadow: '0 0 20px rgba(174,49,252,0.8)' }, 
        },
      },
    },
  },
  plugins: [
    tailwindAnimated,
    tailwindScrollbar, 
  ],
}

