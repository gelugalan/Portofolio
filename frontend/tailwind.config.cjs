module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0ea5a4',
          50: '#ecfdfd',
          100: '#cffafe',
          200: '#99f6f0',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4'
        },
        muted: '#64748b'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto']
      },
      boxShadow: {
        subtle: '0 6px 18px rgba(15, 23, 42, 0.06)'
      }
    }
  },
  plugins: []
}
