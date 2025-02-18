/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage :{
        "logoImage": "url('/public/Image/logotype.e4df684f.svg.png)",
        "heroImage":" url('/public/Image/HeroSection.jpg')",
        "cardImage":"url('/public/Image/cardImage.png)",
        "btn1Image":"url('/public/Image/btn1.png')",
        "btn2Image": "url('/public/Image/btn2.png')",
        "coverImage":"url('/public/Image/cover.png",
        "comunityImage":"url('/public/Image/cumunityImage.png')",
        "joincommunity":"url('/public/Image/joinCommunity.png')",
       


      },
      screen:{
         "2xl": "1536px"
      },
      fontFamily: {
       fontsFamily: ['Helvetica', 'Arial', 'sans-serif'], // Add Helvetica here
      },
       
    
      colors: {
        'custom-start': 'rgba(240, 135, 255, 1)',
        'custom-end': 'rgba(110, 31, 206, 1)',
        'custom-middle': 'rgba(110, 31, 206, 0.2)',
      },


    },
  },
  plugins: [],
}