import { FC } from "react";

import { RegisterForm } from "@features/register/ui/form/RegisterForm";
import { AuthCard } from "@widget/auth/ui/card/AuthCard";

export const RegisterPage: FC = () => {
	return (
		<AuthCard helpInfoText={"Зарегистрируйтесь, чтобы продолжить"}>
			<RegisterForm/>
		</AuthCard>
	);
};