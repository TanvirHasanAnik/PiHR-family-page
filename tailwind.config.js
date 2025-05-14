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
      colors: {
        dropDownTextGray: '#667085',
        hoverBG: '#f9fafb'
      }
    },
  },
  presets: [vivakitPreset], 
  plugins: [],
}

