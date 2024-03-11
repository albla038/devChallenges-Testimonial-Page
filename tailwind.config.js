/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    colors: {
      yellow: "#F5C044",
      green: "#4CA154",
      black: "#18181B",
      gray: {
        dark: "#52525A",
        medium: "#CCD5E0",
        light: "#FAFAF9",
      },
      white: "#FFFFFF",
    },
    extend: {
      fontFamily: {
        sans: ['"Sora"'],
      },
    },
  },
  plugins: [],
};
