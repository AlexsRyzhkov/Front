import { FC, PropsWithChildren } from "react";

import '@shared/ui/auth-layout/AuthLayout.scss';

export const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={'auth-layout'}>
			{children}
		</div>
	);
};