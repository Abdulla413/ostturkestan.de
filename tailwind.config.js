/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        alkatip: "'ALKATIP-Basma', 'serif'"
      },

      backgroundImage: {
  
        'header-image': "url('/image/toghraq.png')",
      }

    },
   

  },
  plugins: [],
}
