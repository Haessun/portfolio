/* eslint-disable @typescript-eslint/no-var-requires */

// const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      // NOTE: 본 템플릿은 대부분이 모노톤으로 이루어져 있습니다. primary 컬러만 수정하여 사용하시는 것을 권장드립니다.
      colors: {
        GRAY_LIGHT: "#f1f3f5",
        GRAY: "#adb5bd",
        GRAY_HEAVY: "#868e96",
        GRAY_EXTRAHEAVY: "#495057",
        BLACK: "#212529",
        /**
         * @description selection(드래그 블록)에 사용되는 컬러입니다.
         */
        PRIMARY_LIGHT: "#c3fae8",

        /**
         * @description 자기소개의 이름 부분, code tag의 darkmode에 사용되는 컬러입니다.
         */
        // PRIMARY: "#12b886",
        PRIMARY: "#5D26C1",

        PRIMARY_NAME: "#A770EF",

        /**
         * @description code tag, link hover icon에 사용되는 컬러입니다.
         */
        PRIMARY_HEAVY: "#087f5b",

        /**
         * @description 페이지 최상단 gradient의 시작 컬러입니다.
         */
        // GRADIENT_FROM: "#59C173",
        // GRADIENT_FROM: "#a17fe0",
        GRADIENT_FROM: "#CF8BF3",

        /**
         * @description 페이지 최상단 gradient의 종료 컬러입니다.
         */
        GRADIENT_TO: "#CF8BF3",
      },
      fontSize: {
        '1.5xl': '1.375rem', // 22px (중간값: xl=20px, 2xl=24px)
        '2.5xl': '1.625rem', // 26px (중간값, 2xl=24px, 3xl=30px)
      },
    },
  },
  plugins: [],
};
