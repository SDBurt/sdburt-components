import type { Meta, StoryObj } from "@storybook/react";

import BlogButton from "@/components/button/blog-button";

const meta: Meta<typeof BlogButton> = {
  title: "Buttons/BlogButton",
  component: BlogButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BlogButton>;

export const Primary: Story = {
  args: {
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed.",
    href: "/",
  },
};
