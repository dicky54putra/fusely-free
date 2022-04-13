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
  },
  plugins: [],
};
