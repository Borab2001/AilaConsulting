import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "istanbul": "url('/images/4.jpg')",
        "gradient-gray" : "radial-gradient(#eaedf2 0%, #e9edf2 100%)"
      },
      width : {
        "header" : "calc(100% - 2rem)"
      },
      backgroundColor: {
        "gridBlack" : "#0c1015",
      },
      colors: {
        "gridTextWhite" : "#dfdfe0"
      }
    },
  },
  plugins: [],
};
export default config;
