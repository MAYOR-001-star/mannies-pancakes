/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        gold : '#f97316',
      },
      boxShadow : {
        shadower : '0 5px 15px #0000001a',
        shadowlight: '0 5px 15px rgba(0, 0, 0, 0.1);'
      },
      height: {
        custom: 'auto !important'
      },
    },
  },
  plugins: [],
}