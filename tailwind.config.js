/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F28C08",
          100: "#DE8007",
          200: "#B76A06",
          300: "#8F5304",
          500: "#402502",
          600: "#0A0600",
        },
        backgroundColor: "#fffcf4", // ✅ define a named color like this
        textColor: "#505050",
        formBackgroundColor: "rgba(53, 30, 0, 0.8)",
        placeHolderColor: "rgba(187, 184, 176, 0.5)",
      },
      backgroundImage: {
        hero: "url('/public/hero/01_Hero.png')",
        contactUsOne: "url('/public/contact/01_contact.jpg')",
        contactUsTwo: "url('/public/contact/02_contact.jpg')",
      },
      fontFamily: {
        antic: ["Antic Didone", "serif"],
        arapey: ["Arapey", "serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1195px",
      },
    },
  },
  plugins: [],
};
