import { FC } from "react";

import { LoginForm } from "@features/login/ui/form/LoginForm";

import { AuthCard } from "@widget/auth/ui/card/AuthCard";

export const LoginPage: FC = () => {
	return (
		<AuthCard helpInfoText={"Войдите, чтобы продолжить"}>
			<LoginForm/>
		</AuthCard>
	);
};