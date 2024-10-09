/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {

        //brand
        "brand-25": "#FCFAFF",
        "brand-50": "#F9F5FF",
        "brand-100": "#F4EBFF",
        "brand-200": "#E9D7FE",
        "brand-300": "#D6BBFB",
        "brand-400": "#B692F6",
        "brand-500": "#9E77ED",
        "brand-600": "#7F56D9",
        "brand-700": "#6941C6",
        "brand-800": "#53389E",
        "brand-900": "#42307D",

        //gray
        "gray-25": "#FCFCFD",
        "gray-50": "#F9FAFB",
        "gray-100": "#F2F4F7",
        "gray-200": "#E4E7EC",
        "gray-300": "#D0D5DD",
        "gray-400": "#98A2B3",
        "gray-500": "#667085",
        "gray-600": "#475467",
        "gray-700": "#344054",
        "gray-800": "#1D2939",
        "gray-900": "#101828",

        //error
        "error-25": "#FFFBFA",
        "error-50": "#FEF3F2",
        "error-100": "#FEE4E2",
        "error-200": "#FECDCA",
        "error-300": "#FDA29B",
        "error-400": "#F97066",
        "error-500": "#F04438",
        "error-600": "#D92D20",
        "error-700": "#B42318",
        "error-800": "#912018",
        "error-900": "#7A271A",

        //warning
        "warning-25": "#FFFCF5",
        "warning-50": "#FFFAEB",
        "warning-100": "#FEF0C7",
        "warning-200": "#FEDF89",
        "warning-300": "#FEC84B",
        "warning-400": "#FDB022",
        "warning-500": "#F79009",
        "warning-600": "#DC6803",
        "warning-700": "#B54708",
        "warning-800": "#93370D",
        "warning-900": "#7A2E0E",

        //success
        "success-25": "#F6FEF9",
        "success-50": "#ECFDF3",
        "success-100": "#D1FADF",
        "success-200": "#A6F4C5",
        "success-300": "#6CE9A6",
        "success-400": "#32D583",
        "success-500": "#12B76A",
        "success-600": "#039855",
        "success-700": "#027A48",
        "success-800": "#05603A",
        "success-900": "#054F31",

      },
      boxShadow: {
        'btn-brand-focus': '#F4EBFF 0px 0px 0px 4px',
        'btn-gray-focus': '#F2F4F7 0px 0px 0px 4px',
        'btn-error-focus': '#FEE4E2 0px 0px 0px 4px',
        'btn-warning-focus': '#FEF0C7 0px 0px 0px 4px',
        'btn-success-focus': '#D1FADF 0px 0px 0px 4px',
      },
    },
  },
  plugins: [],
}