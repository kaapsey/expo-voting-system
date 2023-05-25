/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#113A4D',
          200: '#05182B',
        },
      },
      fontFamily: {
        sans: ['Open Sans'],
        custom: ['Aldrich'],
      },
    },
  },
  plugins: [],
};
