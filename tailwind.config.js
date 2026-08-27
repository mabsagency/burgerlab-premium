/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DC143C',
        accent: '#FFA500',
        dark: '#0D1117',
        cream: '#F4D9A0',
        gold: '#FFE5CD',
        steak: '#6B4423',
        meat: '#8B5A3C',
        burgundy: '#DC143C',
        lightBg: '#F5F5F5',
        textDark: '#1a1a1a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { textShadow: '0 0 10px rgba(230, 57, 70, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(230, 57, 70, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      boxShadow: {
        'premium': '0 20px 60px rgba(0, 0, 0, 0.4)',
        'glow': '0 0 30px rgba(246, 162, 97, 0.4)',
        'emboss': 'inset 0 2px 4px rgba(255, 255, 255, 0.1), inset 0 -2px 4px rgba(0, 0, 0, 0.3)',
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 20px -5px rgba(230, 57, 70, 0.2)',
      },
      backdrop: {
        'blur-sm': 'blur(4px)',
      },
    },
  },
  plugins: [],
}
