module.exports = {
  content: [
    "docusaurus.config.js",
    "src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  corePlugins: {
    preflight: false,
  },
};