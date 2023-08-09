/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./starter-code/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        400: 400,
        700: 700,
      },
      colors: {
        violet: "#5964E0",
        "light-violet": "#939BF4",
        "very-dark-blue": "#19202D",
        midnight: "#121721",
        "light-grey": "#F4F6F8",
        grey: "#9DAEC2",
        "dark-grey": "#6E8098",
      },
      fontSize: {
        "1.4rem": "1.4rem",
        "1.6rem": "1.6rem",
        "2rem": "2rem",
        "2.4rem": "2.4rem",
        "2.8rem": "2.8rem",
      },
      borderRadius: {
        "0.3rem": "0.3rem",
        "0.5rem": "0.5rem",
        "0.6rem": "0.6rem",
        "header-radius": "0rem 0rem 0rem 10rem",
      },
      lineHeight: {
        norm: "normal",
        "2.6rem": "2.6rem",
      },
      backgroundImage: {
        "desk-img": "url(../assets/desktop/bg-pattern-header.svg)",
      },
      maxWidth: {
        73: "73rem",
        120: "120rem",
        144: "144rem",
      },
      screens: {
        max: { max: "68.75em" },
        mid: { max: "50em" },
        smid: { max: "43.75em" },
        sma: { max: "31.25em" },
      },
    },
  },
  plugins: [],
};
