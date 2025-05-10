import { Meta, StoryObj } from "@storybook/react";

import { Button } from "@ui-kit/button/Button";

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>

export const Basic: Story = {
	args: {
		children: "Hello world",
	},
};