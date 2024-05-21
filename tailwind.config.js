/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pr: "#85C872",
        sc: "#285A84",
        bg: "#EBEBEB",
        tgry: "#857878",
        gry: "#FBFBFB",
        lgry: "#555555",
        dgry: "#333333",
        "warning-red": "#E21C4A",
      },
      fontSize: {
        xxs: "8px",
        large: "20px",
        xlarge: "24px",
      },
      fontFamily: {
        "nunito-regular": ["Nunito_400Regular"],
        "nunito-medium": ["Nunito_500Medium"],
        "nunito-bold": ["Nunito_700Bold"],
      },
    },
  },
  plugins: [],
};
