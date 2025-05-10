import { Form } from "@ui-kit/form/Form";
import { InputOpts } from "@ui-kit/input-opt/InputOpt";
import { FC } from "react";

import "@features/confirm-code/ui/form/ConfirmCodeForm.scss";
import { Button } from "@ui-kit/button/Button";

export const ConfirmedCodeForm: FC = () => {
	return (
		<div className={'confirm-code-form'}>
			<Form className={"confirm-code-form__form"}>
				<InputOpts number={6} filter={'number'}/>
				<Button>Проверить</Button>
			</Form>
			<span className={'confirm-code-form__send-again'}>Не получили письмо? Отправить письмо повторно</span>
		</div>
	);
};