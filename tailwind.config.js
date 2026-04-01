/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3758F9',
        dark: '#111928',
        muted: '#637381',
        stroke: '#DFE4EA',
      },
      boxShadow: {
        card: '0 1px 3px rgba(166,175,195,0.4)',
        'layout-spec': '0px 10px 20px rgba(92,115,160,0.07)',
        'icon-card': '0px 2px 4px rgba(148,163,184,0.05), 0px 6px 24px rgba(235,238,251,0.4)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

