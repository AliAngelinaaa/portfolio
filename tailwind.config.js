/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      animation: {
        blob: "blob 30s infinite",
        rainbow: "rainbow 5s linear infinite",
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "10%": { transform: "translate(-30px, 50px) scale(1.05)" },
          "20%": { transform: "translate(60px, -70px) scale(0.95)" },
          "30%": { transform: "translate(-80px, 40px) scale(1.1)" },
          "40%": { transform: "translate(100px, -60px) scale(0.9)" },
          "50%": { transform: "translate(-50px, -100px) scale(1.15)" },
          "60%": { transform: "translate(70px, 80px) scale(0.85)" },
          "70%": { transform: "translate(-90px, -30px) scale(1.1)" },
          "80%": { transform: "translate(40px, 90px) scale(0.9)" },
          "90%": { transform: "translate(-20px, -50px) scale(1.05)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        rainbow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      colors: {
        rose: {
          50: 'var(--color-rose-50, #fff1f2)',
          100: 'var(--color-rose-100, #ffe4e6)',
          200: 'var(--color-rose-200, #fecdd3)',
          300: 'var(--color-rose-300, #fda4af)',
          400: 'var(--color-rose-400, #fb7185)',
          500: 'var(--color-rose-500, #f43f5e)',
          600: 'var(--color-rose-600, #e11d48)',
          700: 'var(--color-rose-700, #be123c)',
          800: 'var(--color-rose-800, #9f1239)',
          900: 'var(--color-rose-900, #881337)',
          950: 'var(--color-rose-950, #4c0519)',
        },
      },
      backgroundImage: {
        'gradient-to-br': 'var(--gradient-to-br)',
        'mesh': 'var(--mesh-gradient)',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft, 0 4px 24px -4px rgba(225, 29, 72, 0.08))',
        'card': 'var(--shadow-card, 0 8px 32px -8px rgba(0, 0, 0, 0.08))',
        'card-hover': 'var(--shadow-card-hover, 0 16px 48px -12px rgba(225, 29, 72, 0.15))',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-delay-2000': { 'animation-delay': '2s' },
        '.animation-delay-4000': { 'animation-delay': '4s' },
        '.animation-delay-6000': { 'animation-delay': '6s' },
        '.animation-delay-8000': { 'animation-delay': '8s' },
        '.glass': {
          'background': 'rgba(255, 255, 255, 0.72)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
        },
        '.glass-nav': {
          'background': 'rgba(255, 255, 255, 0.85)',
          'backdrop-filter': 'blur(16px)',
          '-webkit-backdrop-filter': 'blur(16px)',
        },
        '[data-theme="dark"] .glass': {
          'background': 'rgba(41, 37, 36, 0.92)',
        },
        '[data-theme="dark"] .glass-nav': {
          'background': 'rgba(12, 10, 9, 0.92)',
        },
        '[data-theme="purple"] .glass': {
          'background': 'rgba(255, 255, 255, 0.82)',
        },
        '[data-theme="purple"] .glass-nav': {
          'background': 'rgba(245, 240, 255, 0.92)',
        },
        '[data-theme="purple-dark"] .glass': {
          'background': 'rgba(26, 16, 40, 0.92)',
        },
        '[data-theme="purple-dark"] .glass-nav': {
          'background': 'rgba(15, 10, 26, 0.94)',
        },
      });
    },
  ],
};
