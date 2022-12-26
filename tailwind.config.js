module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1D4ED8",
          secondary: "#050b19",
          accent: "#F6F6F6",
          neutral: "#FFB700",
          "base-100": "#ffffff",
          error: "#FA5C5C",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
};
