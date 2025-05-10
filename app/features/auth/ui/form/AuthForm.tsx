import { LinkProps } from "@tanstack/react-router";
import { FC, PropsWithChildren } from "react";

import { Link } from "@ui-kit/link/Link";

import { AuthButtonGitflic } from "@features/auth/ui/button/gitflic/AuthButtonGitflic";
import { AuthButtonGitflab } from "@features/auth/ui/button/gitlab/AuthButtonGitlab";

import '@features/auth/ui/form/AuthForm.scss';

interface IAuthFormProps extends PropsWithChildren {
	linkOpt?: {
		to: LinkProps['to']
		text: string
	};
}

export const AuthForm: FC<IAuthFormProps> = ({ linkOpt, children }) => {
	return (
		<section className={'auth-form'}>
			<div className="auth-form__form">
				{children}
			</div>
			<span className={'auth-form__divider'}>или</span>
			<div className={'auth-form__oauth'}>
				<AuthButtonGitflab/>
				<AuthButtonGitflic/>
			</div>
			{linkOpt && (
				<Link className={'auth-form__link'} to={linkOpt.to}>
					{linkOpt.text}
				</Link>
			)}
		</section>
	);
};