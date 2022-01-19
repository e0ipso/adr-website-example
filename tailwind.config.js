const path = require('path');
const twConfig = require('@lullabot/gatsby-theme-adr/tailwind.config');

const themePath = path.dirname(
  require.resolve('@lullabot/gatsby-theme-adr/tailwind.config'),
);

module.exports = {
  ...twConfig,
  content: [
    `${themePath}/src/**/*.{js,jsx,ts,tsx}`,
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    ...twConfig.theme,
    fontFamily: {
      sans: ['LibreFranklin', 'Helvetica', 'Arial', 'sans-serif'],
      serif: ['Vollkorn', 'Georgia', 'serif'],
      mono: ['Consolas', 'monospace'],
    },
  },
};
