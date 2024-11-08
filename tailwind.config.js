/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      dropShadow: {
        'custom': '30px 20px 25px #133E87 ', // Custom drop shadow with specified values
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

