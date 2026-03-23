/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1F1F1F",
        orange: "#EC6539",
        blue: "#0081CC",
        green: "#006F48",
      },
      screens: {
        xs: "431px",
        sm: "640px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      regular: ["Neue Montreal"],
    },
    fontSize: {
      sm: "14px",
      md: "18px",
    },
  },
  variants: {
    fill: ["hover", "focus"], // this line does the trick
    extend: {
      cursor: ["disabled"],
      textOpacity: ["disabled"],
      textColor: ["disabled"],
    },
  },
};
