/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        newsroom: {
          paper: '#ffffff',
          ink: '#111111',
          muted: '#4b4b4b',
          border: '#e8e8e8',
          accent: '#c1121f',
          accentDark: '#8f0d17',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'Trebuchet MS', 'sans-serif'],
      },
      boxShadow: {
        newsroom: '0 18px 45px -24px rgba(15, 15, 15, 0.28)',
      },
      backgroundImage: {
        newsroom:
          'radial-gradient(circle at 12% 20%, rgba(193, 18, 31, 0.08), transparent 38%), radial-gradient(circle at 88% 0%, rgba(0, 0, 0, 0.06), transparent 30%)',
      },
    },
  },
  plugins: [],
}
