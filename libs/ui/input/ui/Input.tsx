import clsx from "clsx";
import { FC, InputHTMLAttributes } from "react";

import '@ui-kit/input/ui/Input.scss';

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string,
	label?: string,
	pt?: {
		container?: string
		errContainer?: string
		input?: string
	}
}

export const Input: FC<TInputProps> = ({ error, className, pt, label, ...inputProps }) => {
	return (
		<div className={clsx('fox-input', pt?.container)}>
			{label && (
				<span>{label}</span>
			)}
			<input {...inputProps} className={clsx(
				'fox-input__input',
				error && 'fox-input__input--error',
				className)}/>
			{error && (
				<div className={clsx('fox-input__err-container', pt?.errContainer)}>
					<span className="fox-input__err">{error}</span>
				</div>
			)}
		</div>
	);
};