import { AuthService } from "@features/auth/service/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "@ui-kit/loader/ui/Loader";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";

import { FC, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@ui-kit/button/Button";
import { Checkbox } from "@ui-kit/checkbox/Checkbox";
import { Form } from "@ui-kit/form/Form";
import { Input } from "@ui-kit/input/ui/Input";

import { AuthForm } from "@features/auth/ui/form/AuthForm";
import { RegisterFormZodValidator, IRegisterForm } from "@entities/register/form/RegisterForm";

import "@features/register/ui/form/RegisterForm.scss";

export const RegisterForm: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterForm>({
		defaultValues: {
			username: "",
			email: "",
			rememberMe: false,
		},
		resolver: zodResolver(RegisterFormZodValidator),
	});

	const toast = useRef<IRefToast>(null);
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: AuthService.register,
	});

	const onSubmit: SubmitHandler<IRegisterForm> = async ({ email, username }) => {
		mutation.mutate(
			{ email, username },
			{
				onSuccess: ({ data: { code_token } }) => {
					navigate({
						to: "/auth/confirm-code",
						search: () => ({
							code_token: code_token,
							email: email,
						}),
					});
				},
				onError: (error) => {
					toast.current?.show({ type: "error", detail: error.message, info: "" });
				},
			},
		);
	};


	return (
		<AuthForm linkOpt={{ to: "/auth/login", text: "Уже есть аккаунт? Войти" }}>
			<Form className={'register-form'} onSubmit={handleSubmit(onSubmit)}>
				<Input
					{...register('username')}
					error={errors.username?.message}
					placeholder={"Введите имя пользователя"}
				/>
				<Input
					{...register('email')}
					error={errors.email?.message}
					placeholder={"Введите ваш email"}
				/>
				<span className={"register-form__space-remember"}>
					<Checkbox label={"Запомнить меня"}/>
				</span>
				<Button
					type={'submit'}
					disabled={mutation.isPending}
					className={'register-form__btn'}
				>
					Зарегистрироваться
					{mutation.isPending && (
						<Loader size={'20px'} color={"white"}/>
					)}
				</Button>
				<Toast ref={toast}/>
			</Form>
		</AuthForm>
	);
};