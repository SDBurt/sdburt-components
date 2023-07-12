import type { Meta, StoryObj } from "@storybook/react";

import LinkCard from "@/components/card/link-card";

const meta: Meta<typeof LinkCard> = {
  title: "Cards/LinkCard",
  component: LinkCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LinkCard>;

export const Primary: Story = {
  args: {
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed.",
    href: "/",
  },
};

export const WithImage: Story = {
  args: {
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed.",
    href: "/",
    imageName: "Lorem Ipsum",
    imageUrl: "https://avatars.githubusercontent.com/u/14956845?v=4",
  },
};

export const WithImageNameOnly: Story = {
  args: {
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed.",
    href: "/",
    imageName: "Lorem Ipsum",
  },
};
