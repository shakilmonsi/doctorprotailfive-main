/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  daisyui: {
    themes: [
      {
        doctortheme: {
        primary: "#0FCFEC",

        secondary:'#19D3AE',
         
 accent: "#1dcdbc",
          
 neutral: "#2b3440",
          
 "base-100": "#ffffff"

        },
      },
    ],
  },
  theme: {
    extend: {},
  },
 
    plugins: [require("daisyui")],
  
}

