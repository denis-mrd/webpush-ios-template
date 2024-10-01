const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5733", // Ваш новый основной цвет
        text: "#FFFFFF",    // Цвет текста
        muted: "#CCCCCC",   // Приглушенный цвет для второстепенных элементов
        warning: "#FFC300", // Цвет предупреждений
        hover: "#FFBD69",   // Цвет при наведении
        section: colors.gray[800], // Фоновый цвет секций
      },
    },
  },
  plugins: [],
}