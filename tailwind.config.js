/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        'lg': '1320px', // You can adjust the value to your desired maximum width
      },
    },
  },
  plugins: [],
}