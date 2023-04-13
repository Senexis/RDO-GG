module.exports = {
  content: [
    "docusaurus.config.js",
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '997px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        'primary': '#CC0000',
        'blurple': '#5865F2',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};