const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#27374D",
        base: "#526D82",
        secondary: "#9DB2BF",
        primary: "#DDE6ED",
      },
    },
  },
  plugins: [],
};
