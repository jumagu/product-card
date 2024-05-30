const images = require('@rollup/plugin-image');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  rollup(config, options) {
    config.plugins = [
      postcss({ modules: true }),
      images({ incude: ['**/*.png', '**/*.jpg'] }),
      ...config.plugins,
    ];

    return config;
  },
};
