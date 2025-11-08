const path = require('path');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  includePaths: [path.resolve(__dirname, 'postcss.config.js')],
};