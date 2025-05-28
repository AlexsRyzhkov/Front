import { AuthService } from "@features/auth/service/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "@ui-kit/loader/ui/Loader";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import axios from "axios";
import { FC, PropsWithChildren, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { ILoginForm, LoginFormZodValidation } from "@entities/login/form/LoginForm";

import { Checkbox } from "@ui-kit/checkbox/Checkbox";
import { Form } from "@ui-kit/form/Form";
import { Input } from "@ui-kit/input/ui/Input";
import { Button } from "@ui-kit/button/Button";

import { AuthForm } from "@features/auth/ui/form/AuthForm";

import '@features/login/ui/form/LoginForm.scss';


export const LoginForm: FC<PropsWithChildren> = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<ILoginForm>({
		defaultValues: {
			email: '',
			rememberMe: false,
		},
		resolver: zodResolver(LoginFormZodValidation),
	});

	const navigate = useNavigate();
	const toast = useRef<IRefToast>(null);
	const loginMutation = useMutation({
		mutationFn: AuthService.login,
	});

	const onSubmit: SubmitHandler<ILoginForm> = async ({ email }) => {
		loginMutation.mutate(
			{ email },
			{
				onSuccess: ({ data: { code_token } }) => {
					navigate({
						to: "/auth/confirm-code",
						search: () => ({
							code_token,
							email,
						}),
					});
				},
				onError: (error) => {
					if (axios.isAxiosError(error)) {
						if (error.response?.status === 404) {
							setError('email', { message: "Пользователь не найден" });
						} else {
							toast.current?.show({
								type: "error",
								info: "Ошибка входа",
								detail: error.response?.data,
							});
						}
					}
				},
			},
		);
	};

	return (
		<AuthForm linkOpt={{ to: "/auth/register", text: "Не удалось войти в систему? Создать аккаунт" }}>
			<Form className={'login-form'} onSubmit={handleSubmit(onSubmit)}>
				<Input {...register("email")} error={errors.email?.message} placeholder={'Введите ваш email'}/>
				<span className={'login-form__space-remeberme'}>
					<Checkbox {...register('rememberMe')} label={"Запомнить меня"}/>
				</span>
				<Button type={'submit'} disabled={loginMutation.isPending}>
					Войти
					{loginMutation.isPending && (
						<Loader size={'20px'} color={'white'}/>
					)}
				</Button>
			</Form>
			<Toast ref={toast}/>
		</AuthForm>
	);
};