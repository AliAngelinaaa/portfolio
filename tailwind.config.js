/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 30s infinite",
        rainbow: "rainbow 5s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "10%": {
            transform: "translate(-30px, 50px) scale(1.05)",
          },
          "20%": {
            transform: "translate(60px, -70px) scale(0.95)",
          },
          "30%": {
            transform: "translate(-80px, 40px) scale(1.1)",
          },
          "40%": {
            transform: "translate(100px, -60px) scale(0.9)",
          },
          "50%": {
            transform: "translate(-50px, -100px) scale(1.15)",
          },
          "60%": {
            transform: "translate(70px, 80px) scale(0.85)",
          },
          "70%": {
            transform: "translate(-90px, -30px) scale(1.1)",
          },
          "80%": {
            transform: "translate(40px, 90px) scale(0.9)",
          },
          "90%": {
            transform: "translate(-20px, -50px) scale(1.05)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundColor: {
        'rainbow': 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
        '.animation-delay-6000': {
          'animation-delay': '6s',
        },
        '.animation-delay-8000': {
          'animation-delay': '8s',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

