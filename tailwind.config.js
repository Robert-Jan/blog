/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './lib/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "code": {
              background: 'var(--tw-prose-pre-bg)',
              padding: '2px 6px',
              color: 'var(--tw-prose-pre-code)',
              "border-radius": '5px'
            },
            "code::before": { content: '' },
            "code::after": { content: '' }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: 'class'
}
