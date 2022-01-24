module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-a11y',
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    '@storybook/addon-jest/register',
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  }
}