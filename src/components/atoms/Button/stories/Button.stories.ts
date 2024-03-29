import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../index";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "@jumpit-ui-kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["tiny", "small", "medium", "large", "xlarge", "xxlarge"],
    },
    colorScheme: {
      control: "select",
      options: ["primary", "black", "gray", "white"],
    },
    variant: {
      control: "inline-radio",
      options: ["filled", "outline", "link"],
    },
    shape: {
      control: "inline-radio",
      options: ["square", "rounded", "circle"],
    },
    isDisabled: { control: "inline-radio", options: [true, false] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LargePrimary: Story = {
  args: {
    size: "large",
    colorScheme: "primary",
    variant: "filled",
    shape: "rounded",
    children: "Button",
  },
};
