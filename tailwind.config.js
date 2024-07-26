/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      default: ['Lemon', 'serif', 'sans-serif'],
    },
    colors: {
      primary: '#FF7D29',
      primary2: '#399918',
      secondary: '#FF0000',
      secondary2: '#FFDE00',
      light: '#FCF8F3',
      dark: '#0C0C0C',
      dark2: '#151515',
      dark3: '#303030',
    },
    extend: {
      letterSpacing: {
        large: '0.2em',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
