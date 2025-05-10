import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	"stories": [
		"../libs/ui/**/*.mdx",
		"../libs/ui/**/*.stories.@(js|jsx|mjs|ts|tsx)",
	],
	"addons": [
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@chromatic-com/storybook",
		"@storybook/experimental-addon-test",
	],
	"framework": {
		"name": "@storybook/react-vite",
		"options": {},
	},
};

export default config;