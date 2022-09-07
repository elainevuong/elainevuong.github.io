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
        grouparooblue: "#29abe2", 
        airbytepurple: "#9579fd",
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