import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import { Card } from "@ui-kit/card/Card";

import { Logo } from "@shared/ui/logo/Logo";
import { AuthHelpInfo } from "@widget/auth/ui/help-info/AuthHelpInfo";

import '@widget/auth/ui/card/AuthCard.scss';


interface IAuthCardProps extends PropsWithChildren {
	helpInfoText?: string;
	className?: string;
}

export const AuthCard: FC<IAuthCardProps> = ({ helpInfoText, className, children }) => {
	return (
		<Card className={clsx("auth-card", className)}>
			<Logo className={"auth-card__logo"} variant={'auth'}/>
			{helpInfoText && (
				<AuthHelpInfo className={'auth-card__help-info'} text={helpInfoText}/>
			)}
			{children}
		</Card>
	);
};