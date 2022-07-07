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
  
        'header-image': "url('/image/toghraq2.jpg')",
      }

    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }

  },
  plugins: [],
}
