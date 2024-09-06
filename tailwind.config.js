/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        // 'ponyo': ["Matemasie"],
     },
      screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
    },
  },
  plugins: [],
}
}
