import { IConfirmCodeForm, ConfirmCodeFormZodValidator } from "@entities/confirm-code/form/ConfirmCodeForm";
import { AuthService } from "@features/auth/service/AuthService";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Loader } from "@ui-kit/loader/ui/Loader";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import axios, { AxiosError } from "axios";
import { FC, useRef, useState } from "react";

import { Form } from "@ui-kit/form/Form";
import { InputOpts } from "@ui-kit/input-opt/InputOpt";
import { Button } from "@ui-kit/button/Button";

import "@features/confirm-code/ui/form/ConfirmCodeForm.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IConfirmCodeFormProps {
	codeToken: string;
	email: string;
}

export const ConfirmedCodeForm: FC<IConfirmCodeFormProps> = ({ codeToken, email }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IConfirmCodeForm>({
		defaultValues: {
			code: '',
		},
		resolver: zodResolver(ConfirmCodeFormZodValidator),
	});

	const navigate = useNavigate();
	const toast = useRef<IRefToast>(null);

	const verifyCodeMutation = useMutation({
		mutationFn: AuthService.verifyCode,
	});

	const onSubmit: SubmitHandler<IConfirmCodeForm> = ({ code }) => {
		verifyCodeMutation.mutate(
			{ codeToken, code },
			{
				onSuccess: ({ data: { access_token } }) => {
					localStorage.setItem("access_token", access_token);

					navigate({
						to: "/projects",
					});
				},
				onError: (error) => {
					if (axios.isAxiosError(error)) {
						toast.current?.show({
							type: "error",
							info: "Ошибка",
							detail: error.response?.data as string,
						});
					}
				},
			},
		);
	};

	const resendCodeMutation = useMutation({
		mutationFn: AuthService.resendCode,
	});

	const onResendCode = () => {
		resendCodeMutation.mutate(
			{ email },
			{
				onSuccess: ({ data: { code_token } }) => {
					navigate({
						to: '/auth/confirm-code',
						search: () => ({
							code_token: code_token,
							email: email,
						}),
					});

					toast.current?.show({
						type: "success",
						info: "Успешная отправка",
						detail: `Код отправлен на почту ${email}`,
					});
				},
				onError: (error) => {
					if (axios.isAxiosError(error)) {
						toast.current?.show({
							type: "error",
							info: "Ошибка",
							detail: error.response?.data as string,
						});
					}
				},
			},
		);
	};

	return (
		<div className={'confirm-code-form'}>
			<Form className={"confirm-code-form__form"} onSubmit={handleSubmit(onSubmit)}>
				<InputOpts {...register('code')} number={6} filter={'number'} error={errors.code?.message}/>
				<Button disabled={verifyCodeMutation.isPending}>
					Проверить
					{verifyCodeMutation.isPending && (
						<Loader size={'20px'} color={'white'}/>
					)}
				</Button>
			</Form>
			<span
				className={'confirm-code-form__send-again'}
				onClick={onResendCode}
			>
				Не получили письмо? Отправить письмо повторно
			</span>
			<Toast ref={toast}/>
		</div>
	);
};