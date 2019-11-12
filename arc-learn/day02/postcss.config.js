const prescss = require('precss');
const autoprefixer = require('autoprefixer');
const postcssColorFunction = require('postcss-color-function');

module.exports = {
  plugins: [prescss, autoprefixer, postcssColorFunction]
};
