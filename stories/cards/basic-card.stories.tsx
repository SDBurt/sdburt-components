import type { Meta, StoryObj } from "@storybook/react";

import BasicCard from "@/components/card/basic-card";

const meta: Meta<typeof BasicCard> = {
  title: "Cards/BasicCard",
  component: BasicCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof BasicCard>;

const testComponentChild = (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus
      velit eget turpis rutrum, elementum sagittis urna fermentum. Etiam non.
    </p>
  </div>
);

export const Primary: Story = {
  args: {
    title: "Lorem ipsum dolor.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed.",
    children: testComponentChild,
  },
};
