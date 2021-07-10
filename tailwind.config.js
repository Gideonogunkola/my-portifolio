module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    darkSelector: ".dark-mode",
    extend: {
      fontFamily: {
        begum: ["begum", "serif"]
      },
      fontSize: {
        normal: ["1.3rem", "20px"],
        h1: ["3.6rem", ""]
      },
      colors: {
        pryColor: {
          light: "#A6DFF8",
          DEFAULT: "#27AAE1",
          dark: "#08A0DF"
        },
        secColor: {
          DEFAULT: "#090C10"
        }
      },
      boxShadow: {
        before:
          "0 4px 6px -1px rgba(0, 0, 0, .4), 0 2px 4px -1px rgba(0, 0, 0, .4)",
        now:
          "0 4px 6px -1px rgba(0, 0, 0, .7), 0 2px 4px -1px rgba(0, 0, 0, .4)"
      },
      margin: {
        "100": "30rem",
        "200": "40rem"
      },
      height: {
        normal: "4.6rem",
        sub: "4.3rem",
        high: "90%"
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%"
      }
    }
  },
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd",
      "hover",
      "focus",
      "responsive"
    ],
    borderColor: [
      "dark",
      "dark-focus",
      "dark-focus-within",
      "hover",
      "focus",
      "responsive"
    ],
    textColor: [
      "dark",
      "dark-hover",
      "dark-active",
      "hover",
      "responsive",
      "focus"
    ]
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-dark-mode")()]
};
