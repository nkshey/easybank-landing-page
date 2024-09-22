/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      "dark-blue": "hsl(233, 26%, 24%)",
      "lime-green": "hsl(136, 65%, 51%)",
      "bright-cyan": "hsl(192, 70%, 51%)",
      "grayish-blue": "hsl(233, 8%, 62%)",
      "light-grayish-blue": "hsl(220, 16%, 96%)",
      "very-light-gray": "hsl(0, 0%, 98%)",
      white: "hsl(0, 0%, 100%)",
    },

    fontFamily: {
      sans: ["Public Sans", "sans-serif"],
    },

    fontWeight: {
      light: 300,
      normal: 400,
      bold: 700,
    },

    extend: {
      backgroundImage: {
        "mobile-pattern": "url('/images/bg-intro-mobile.svg')",
        "desktop-pattern": "url('/images/bg-intro-desktop.svg')",
      },

      screens: {
        mid: "580px",
        lgPlus: "1240px",
      },
    },
  },
  plugins: [],
};
