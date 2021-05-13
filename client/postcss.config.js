const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    postcssPresetEnv({
      stage: 3,
    }),
  ],
};
