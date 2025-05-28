import { ConfirmedCodeForm } from "@features/confirm-code/ui/form/ConfirmCodeForm";
import { AuthCard } from "@widget/auth/ui/card/AuthCard";
import { FC } from "react";

import '@pages/confirm-code/ui/ConfirmCodePage.scss';

interface IConfirmCodePageProps {
	codeToken: string;
	email: string;
}

export const ConfirmCodePage: FC<IConfirmCodePageProps> = ({ codeToken, email }) => {
	return (
		<AuthCard className={'confirm-code'}>
			<h2 className={'confirm-code__header'}>Вам отправлен код по электронной почте</h2>
			<div className={"confirm-code__help-info"}>
				Чтобы завершить настройку аккаунта, введите код, который мы отправили на адрес:
			</div>
			<p className={'confirm-code__email'}>{email}</p>
			<ConfirmedCodeForm codeToken={codeToken} email={email}/>
		</AuthCard>
	);
};