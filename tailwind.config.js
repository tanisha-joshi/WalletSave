/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        "500":"600px",
      },
      fontSize:{
        "xsm":"12px"
      }
    },
  },
  plugins: [require("daisyui")],
}