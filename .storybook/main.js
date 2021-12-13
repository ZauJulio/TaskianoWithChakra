const path = require('path')

module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  ignore: ['../src/components/Headers'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-postcss',
    '@storybook/addon-essentials',
    'storybook-addon-next-router'
  ],
  staticDirs: ['../public'],
  framework: '@storybook/react',
  webpackFinal: async (config) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../src')
    ]

    return config
  }
}
