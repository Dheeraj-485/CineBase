/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode:'class',
    theme: {
      extend: {
        screens:{
          "other":{'min':"240px",'max ':'1250px'}
        },
        colors:{
          darkbg:"#1E2938",
          blue:{
            850:"#14b8a6"
          }
        }
      },
    },
    plugins: [],
  }