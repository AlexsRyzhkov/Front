import { FC, FormEvent, PropsWithChildren, useCallback, FormHTMLAttributes } from "react";

interface IFormProps extends PropsWithChildren, FormHTMLAttributes<HTMLFormElement> {}

export const Form: FC<IFormProps> = ({ children, onSubmit, ...otherProps }) => {
	const onSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (onSubmit) {
			onSubmit(e);
		}
	}, []);

	return (
		<form onSubmit={onSubmitForm} {...otherProps}>
			{children}
		</form>
	);
};