module.exports = function () {
  const basePlugins = [
    'babel-plugin-styled-components',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-proposal-optional-chaining',
  ];

  const basePresets = [
    '@babel/preset-react',
  ];

  let presets = [...basePresets];
  let plugins = [...basePlugins];

  return {
    presets,
    plugins,
  };
};
