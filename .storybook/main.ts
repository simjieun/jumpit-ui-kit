import type { StorybookConfig } from "@storybook/react-webpack5";
const config: StorybookConfig = {
  framework: "@storybook/react-webpack5",
  stories: [
    "../src/components/**/*.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  docs: {
    autodocs: "tag",
  },
};
export default config;
