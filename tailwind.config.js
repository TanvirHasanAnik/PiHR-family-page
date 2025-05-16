import { vivakitPreset } from "@vivakits/react-components";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@vivakits/react-components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfRegular: ['SF Pro regular', 'sans-serif'],
        sfMedium: ['SF Pro medium', 'sans-serif'],
        sfSemibold: ['SF Pro semibold', 'sans-serif'],
      },
      colors: {
        dropDownTextGray: '#667085',
        hoverBG: '#f9fafb'
      }
    },
  },
  presets: [vivakitPreset], 
  plugins: [],
}

