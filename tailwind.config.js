module.exports = {
  content: ['./*.html'],
  darkMode: 'media', 
  theme: {
    screens: { 
      sm: '480px', 
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        midnightblue: "#0a0440", 
        grouparooblue: "#4283da", 
        airbytepurple: "#28374c",
        tailslideblue: "#4283da",
        tailslidenavy: "#28374c",
        tailslideorange: "#f09637",
        link: {
          normal: "#4c74b9",
          decoration: "#d2dcee",
          hover: "#829dce",
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ]
}