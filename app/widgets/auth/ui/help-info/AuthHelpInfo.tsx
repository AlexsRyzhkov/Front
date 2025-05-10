import clsx from "clsx";
import { FC, HTMLAttributes } from "react";

import "@widget/auth/ui/help-info/AuthHelpInfo.scss";


interface IAuthHelpInfoProps extends HTMLAttributes<HTMLSpanElement> {
	text: string;
}

export const AuthHelpInfo: FC<IAuthHelpInfoProps> = ({ text, className, ...otherProps }) => {
	return (
		<span className={clsx('auth-help-info', className)} {...otherProps}>{text}</span>
	);
};