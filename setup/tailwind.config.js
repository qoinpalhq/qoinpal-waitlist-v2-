/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: '#111111',
        secondary: '#FAFFE6',
        accent: '#CCFB00',
        background: '#F0F0F0',
        white: '#FFFFFF',
        black: '#111111',
        'light-gray': '#8C8C8C',
        'dark-gray': '#1F1F1F',
        gradient: {
          start: '#CAF900',
          end: '#FF7A00',
        },
      },
      fontFamily: {
        display: ['red hat display', 'sans'],
      },
      fontSize: {
        '3xl': '3.625rem',
        '2xl': '2.25rem',
        xl: '1.5rem',
        lg: '1.25rem',
        base: '1rem',
        sm: '0.875rem',
        xs: '0.75rem',
      },
    },
  },
  plugins: [],
}

