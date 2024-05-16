/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#e8e5e0",
        brown_primary: "#b6a593",
        brown_secondary: "#322b25",
        offdark: "#212121",
      },
    },
  },
  plugins: [],
};
