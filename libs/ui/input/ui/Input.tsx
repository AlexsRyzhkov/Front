import { FC, InputHTMLAttributes } from "react";
import clsx from "clsx";

import '@ui-kit/input/ui/Input.scss';

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string,
	label?: string,
	pt?: {
		container?: string
		errContainer?: string

		inputContainer?: string
	}
	leftIcon?: FC
	rightIcon?: FC
}

export const Input: FC<TInputProps> = ({
	error,
	className,
	pt,
	label,
	leftIcon: LeftIcon,
	rightIcon: RightIcon,
	...inputProps
}) => {
	return (
		<div className={clsx('fox-input', pt?.container)}>
			{label && (
				<span className={'fox-input__label'}>{label}</span>
			)}
			<div
				className={clsx('fox-input__input-container', error && 'fox-input__input-container--error', pt?.inputContainer)}>
				{LeftIcon && <LeftIcon/>}
				<input {...inputProps} className={clsx(
					'fox-input__input',
					className)}
				/>
				{RightIcon && <RightIcon/>}
			</div>
			{error && (
				<div className={clsx('fox-input__err-container', pt?.errContainer)}>
					<span className="fox-input__err">{error}</span>
				</div>
			)}
		</div>
	);
};