import clsx from "clsx";
import { FC, ButtonHTMLAttributes, PropsWithChildren, Ref } from "react";

import '@ui-kit/button/Button.scss';

export interface IButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "outline_gray" | 'no_background' | 'white' | 'cancel' | 'delete';
	size?: "little" | "small" | "medium" | "large";
	ref?: Ref<HTMLButtonElement>;
	padding?: string;
}

export const Button: FC<IButtonProps> = ({
	className,
	children,
	variant = "primary",
	size = "medium",
	padding,
	...otherProps
}) => {
	const variantsToCss = {
		primary: "fox-button--primary",
		outline_gray: "fox-button--outline-gray",
		no_background: "fox-button--no-background",
		white: "fox-button--white",
		cancel: 'fox-button--cancel',
		delete: 'fox-button--delete',
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
			style={{ padding: padding }}
			{...otherProps}
		>
			{children}
		</button>
	);
};