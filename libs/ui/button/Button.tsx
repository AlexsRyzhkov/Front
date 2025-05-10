import clsx from "clsx";
import { FC, ButtonHTMLAttributes, PropsWithChildren } from "react";

import '@ui-kit/button/Button.scss';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "outline_gray" | 'no_background';
	size?: "little" | "small" | "medium" | "large";
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = "primary",
	size = "medium",
	...otherProps
}) => {
	const variantsToCss = {
		primary: "fox-button--primary",
		outline_gray: "fox-button--outline-gray",
		no_background: "fox-button--no-background",
	};

	const variantSize = {
		little: "fox-button--font-little",
		small: "fox-button--font-small",
		medium: "fox-button--font-medium",
		large: "fox-button--font-large",
	};

	return (
		<button
			className={clsx(
				'fox-button',
				variantsToCss[variant],
				variantSize[size],
				className,
			)}
			{...otherProps}
		>
			{children}
		</button>
	);
};