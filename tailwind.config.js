/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#008080",
        secondary: "#404654",
        "primary-light": "#04b0b0",
        danger: "#c72508",
      },
    },
    containers: {
      center: true,
      padding: "1rem",
    },
    gap: {
      16: "16px",
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "640px",
          },
          "@screen md": {
            maxWidth: "768px",
          },
          "@screen lg": {
            maxWidth: "1280px",
          },
          "@screen xl": {
            maxWidth: "1366px",
          },
        },
      });
    },
  ],
};
