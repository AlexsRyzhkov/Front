import { FC, useRef } from "react";

import { LoginForm } from "@features/login/ui/form/LoginForm";

import { AuthCard } from "@widget/auth/ui/card/AuthCard";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import { Button } from "@ui-kit/button/Button";

export const LoginPage: FC = () => {
	const toast = useRef<IRefToast>(null);

	let n = 0;

	return (
		<AuthCard helpInfoText={"Войдите, чтобы продолжить"}>
			<LoginForm/>
			<Toast ref={toast}/>
			<Button onClick={() => {
				toast.current?.show({ type: "success", info: "Hello wrold = " + n.toString(), detail: "Hello world" });

				n++;
			}}>Click</Button>
		</AuthCard>
	);
};