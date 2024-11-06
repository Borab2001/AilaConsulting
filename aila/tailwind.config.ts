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
      },
      width : {
        "header" : "calc(100% - 2rem)"
      },
      colors: {
        "background": "rgb(5, 5, 5)",
        "bento": "rgb(16, 16, 16)",
        "border": "rgb(25, 25, 25)",
        "element": "rgb(31, 31, 31)",
        "elementBorder": "rgb(33, 33, 33)",
        "title": "rgb(204, 204, 204)",
        "subtitle": "rgb(117, 117, 117)",
        "text": "rgb(153, 153, 153)",
        "primary": "rgb(230, 230, 230)",
      }
    },
  },
  plugins: [],
};
export default config;
