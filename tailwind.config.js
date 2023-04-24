/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors:{
        'greenD' : "#3D550C",
        'greenYellow' : "#ECF87F",
        'greenB' : "#81B622"
      },
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
      },
      fontWeight: {
        'regular' : 400,
        'semibold': 600,
        'bold': 700,
      },
      backgroundImage: {
        "cs": "url(../assets/img/informatique.jpg)"
      },
      textDecorationThickness:{
        "underline-offset-thick": "8px"
      },
      width: {
        "max-w-imgM":"600px",
        "max-w-imglg":"650px",
      },
      screens: {
        'ssm': '410px',
        'blg': '1200px'
      }
    },
    
  },
  plugins: [],
}

