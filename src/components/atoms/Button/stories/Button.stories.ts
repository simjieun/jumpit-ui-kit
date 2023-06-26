import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../index";
import {
  ButtonColorSchemes,
  ButtonShapes,
  ButtonSizes,
  ButtonVariants,
} from "../type";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "@jumpit/uikit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "size" },
    colorScheme: { control: "colorScheme" },
    variant: { control: "variant" },
    shape: { control: "shape" },
    disabled: { control: "disabled" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LargePrimary: Story = {
  args: {
    size: ButtonSizes.LARGE,
    colorScheme: ButtonColorSchemes.PRIMARY,
    variant: ButtonVariants.OUTLINE,
    shape: ButtonShapes.SQUARE,
    children: "Button",
  },
};
