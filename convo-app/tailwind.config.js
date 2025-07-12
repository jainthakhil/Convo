module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {fontFamily: {
        akaya: ['"Akaya Kanadaka"', 'system-ui'],
      },},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}