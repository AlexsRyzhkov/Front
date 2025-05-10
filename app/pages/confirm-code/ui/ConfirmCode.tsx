import { ConfirmedCodeForm } from "@features/confirm-code/ui/form/ConfirmCodeForm";
import { AuthCard } from "@widget/auth/ui/card/AuthCard";
import { FC } from "react";

import '@pages/confirm-code/ui/ConfirmCode.scss';

export const ConfirmCode: FC = () => {
	return (
		<AuthCard className={'confirm-code'}>
			<h2 className={'confirm-code__header'}>Вам отправлен код по электронной почте</h2>
			<div className={"confirm-code__help-info"}>
				Чтобы завершить настройку аккаунта, введите код, который мы отправили на адрес:
			</div>
			<p className={'confirm-code__email'}>alexsandr.ryzhkov03@mail.ru</p>
			<ConfirmedCodeForm/>
		</AuthCard>
	);
};