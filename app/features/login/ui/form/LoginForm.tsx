import { zodResolver } from "@hookform/resolvers/zod";
import { FC, PropsWithChildren } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Checkbox } from "@ui-kit/checkbox/Checkbox";
import { Form } from "@ui-kit/form/Form";
import { Input } from "@ui-kit/input/ui/Input";
import { Button } from "@ui-kit/button/Button";

import { AuthForm } from "@features/auth/ui/form/AuthForm";
import { LoginFormFields, LoginFormZodValidation } from "@features/login/model/LoginTypes";

import '@features/login/ui/form/LoginForm.scss';


export const LoginForm: FC<PropsWithChildren> = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormFields>({
		defaultValues: {
			email: '',
			rememberMe: false,
		},
		resolver: zodResolver(LoginFormZodValidation),
	});

	const onSubmit: SubmitHandler<LoginFormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthForm linkOpt={{ to: "/auth/register", text: "Не удалось войти в систему? Создать аккаунт" }}>
			<Form className={'login-form'} onSubmit={handleSubmit(onSubmit)}>
				<Input {...register("email")} error={errors.email?.message} placeholder={'Введите ваш email'}/>
				<span className={'login-form__space-remeberme'}>
					<Checkbox {...register('rememberMe')} label={"Запомнить меня"}/>
				</span>
				<Button type={'submit'}>Войти</Button>
			</Form>
		</AuthForm>
	);
};