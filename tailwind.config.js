/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,css,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "text-slide":
          "text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide": {
          "0%, 16%": {
            transform: "translateY(0%)",
          },
          "20%, 36%": {
            transform: "translateY(-20%)",
          },
          "40%, 56%": {
            transform: "translateY(-40%)",
          },
          "60%, 76%": {
            transform: "translateY(-60%)",
          },
          "80%, 96%": {
            transform: "translateY(-80%)",
          },
          "100%": {
            transform:
              "translateY(-80%)" /* Keep the last element visible at 100% */,
          },
        },
      },
    },
  },
  plugins: [],
};
