/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  theme: {
    extend: {
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        scaleUpDown: 'scaleUpDown 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

