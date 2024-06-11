/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors : {
        dasarbiru : "#1068FF",
        informasi : "#51A8FF",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}

