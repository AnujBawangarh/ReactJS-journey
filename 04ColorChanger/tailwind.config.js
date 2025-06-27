/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
             lavender: {
               50: '#f5f3ff',
               100: '#ede9fe',
               200: '#ddd6fe',
               300: '#c4b5fd',
               400: '#a78bfa',
               500: '#8b5cf6',
               600: '#7c3aed',
               700: '#6d28d9',
               800: '#5b21b6',
               900: '#4c1d95',
             },
             olive: {
               50: '#f7fee7',
               100: '#ecfccb',
               200: '#d9f99a',
               300: '#bef56d',
               400: '#a1e95a',
               500: '#84d74d',
               600: '#6ab73b',
               700: '#569b31',
               800: '#467d27',
               900: '#38621f',
             },
           },},
  },
  plugins: [],
}

