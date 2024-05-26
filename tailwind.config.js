/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#ff6a32',
        secondry: '#fbecd9',
        appWhite: '#ffffff',
        appBalck: '#545454',
        cardBg: '#FFF2EE',
        buttonBg: '#FBD9CC',
        appGray: '#737373',
        secoundryText: '#2B2B2B80',
      },
    },
  },
  plugins: [],
};
