/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-to-br': 'linear-gradient(to bottom right, #ffffff, #5899e2)',
      })
    },
  },
  plugins: [],
}