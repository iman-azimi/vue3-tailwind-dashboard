/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['jakarta'],
      },
      colors: {
        // ...
        dark: {
          900: '#202443',
          800: '#252849',
          700: '#2A2F54',
        },
        // ...
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { transform: 'translateY(-18px)' },
        '25%': { transform: 'translateY(5px)' },
        '50%': { transform: 'translateY(10px)' },
        '75%': { transform: 'translateY(15px)' },
        '100%': { transform: 'translateY(`18px)' },
      },
      ping: {
        '75%': { transform: 'scale(2)', opacity: 0 },
        '100%': { transform: 'scale(2)', opacity: 0 },
      },
    },
    animation: {
      fadeIn: 'fadeIn 0.4s ease-in',
      ping: 'ping 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
    boxShadow: {
      purple: '2px 6px 26px 0px rgba(106,89,221,0.3)',
    },
  },
  plugins: [],
}
