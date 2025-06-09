/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,html}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          30: "#f4bd77",
          50: "#F28C08",
          100: "#DE8007",
          200: "#B76A06",
          300: "#8F5304",
          500: "#402502",
          600: "#0A0600",
        },
        backgroundColor: "#fffcf4",
        textColor: "#505050",
        formBackgroundColor: "rgba(53, 30, 0, 0.8)",
        placeHolderColor: "rgba(187, 184, 176, 0.5)",
        formPlaceHolderColor: "#BBB8B080",
      },
      backgroundImage: {
        hero: "url('/public/hero/01_Hero.jpeg')",
        heroMobile: "url('/public/hero/03_Hero.jpeg')",
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
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
        'slide-up': 'slideUp 1.2s ease-out',
        'slide-up-delayed': 'slideUp 1.2s ease-out 0.3s',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'slide-right': 'slideRight 1s ease-out',
        'rotate-slow': 'rotateSlow 15s linear infinite',
        'bounce-subtle': 'bounceSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "700px",
        xl: "1195px",
      },
    },
  },
  plugins: [],
};
