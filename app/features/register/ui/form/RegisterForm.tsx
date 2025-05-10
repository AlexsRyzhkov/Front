import { FC } from "react";

import { Button } from "@ui-kit/button/Button";
import { Checkbox } from "@ui-kit/checkbox/Checkbox";
import { Form } from "@ui-kit/form/Form";
import { Input } from "@ui-kit/input/ui/Input";

import { AuthForm } from "@features/auth/ui/form/AuthForm";

import "@features/register/ui/form/RegisterForm.scss";

export const RegisterForm: FC = () => {
	return (
		<AuthForm linkOpt={{ to: "/auth/login", text: "Уже есть аккаунт? Войти" }}>
			<Form className={'register-form'}>
				<Input placeholder={"Введите ваш email"}/>
				<span className={"register-form__space-remember"}>
					<Checkbox label={"Запомнить меня"}/>
				</span>
				<Button type={'submit'}>Зарегистрироваться</Button>
			</Form>
		</AuthForm>
	);
};