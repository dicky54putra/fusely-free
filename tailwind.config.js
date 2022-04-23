module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        h1: "88px",
        h2: "64px",
        h3: "56px",
        h4: "46px",
        h5: "42px",
        h6: "34px",
        body1: "34px",
        body2: "26px",
        body3: "26px",
        body4: "24px",
        h1sm: "50px",
        h2sm: "40px",
      },
      colors: {
        primary: {
          500: "#164E63",
          400: "#0E7490",
          300: "#06B6D4",
          200: "#67E8F9",
          100: "#CFFAFE",
        },
        secondary: {
          500: "#FC4A6E",
          400: "#FD6584",
          300: "#FD9BAE",
          200: "#FED7DF",
          100: "#FEEBEF",
        },
        neutral: {
          500: "#2F2E41",
          400: "#717082",
          300: "#9893A3",
          200: "#CFCFDE",
          100: "#FFFFFF",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      serif: ["Playfair Display", "serif"],
    },
    fontSize: {
      h1: "86px",
      h2: "60px",
      h3: "50px",
      h4: "40px",
      h5: "34px",
      h6: "28px",
      body1: "20px",
      body2: "18px",
      body3: "16px",
      h1sm: "46px",
      h2sm: "34px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
