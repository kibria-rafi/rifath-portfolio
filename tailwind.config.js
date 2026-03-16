/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        newsroom: {
          paper: '#ffffff',
          paperSoft: '#fbf9f6',
          ink: '#111111',
          inkSoft: '#222222',
          muted: '#4b4b4b',
          mutedSoft: '#6b6b6b',
          border: '#e8e8e8',
          accent: '#c1121f',
          accentDark: '#8f0d17',
          accentBright: '#dc2626',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Source Sans 3', 'Trebuchet MS', 'sans-serif'],
      },
      boxShadow: {
        newsroom: '0 18px 45px -24px rgba(15, 15, 15, 0.28)',
        editorial: '0 24px 44px -26px rgba(17, 24, 39, 0.3)',
        card: '0 10px 22px -14px rgba(15, 23, 42, 0.28)',
      },
      backgroundImage: {
        newsroom:
          'radial-gradient(circle at 12% 20%, rgba(193, 18, 31, 0.08), transparent 38%), radial-gradient(circle at 88% 0%, rgba(0, 0, 0, 0.06), transparent 30%)',
        newsgrain:
          'linear-gradient(90deg, rgba(17, 17, 17, 0.03) 1px, transparent 1px), linear-gradient(rgba(17, 17, 17, 0.03) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
