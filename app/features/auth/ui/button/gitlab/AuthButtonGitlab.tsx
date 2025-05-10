import { Button } from "@ui-kit/button/Button";
import { FC, MouseEventHandler } from "react";

import gitlabLogo from "@features/auth/assert/gitlab.png";

import '@features/auth/ui/button/gitlab/AuthButtonGitlab.scss';

interface IAuthButtonGitflabProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const AuthButtonGitflab: FC<IAuthButtonGitflabProps> = ({ onClick }) => {
	return (
		<Button
			className={'gitlab-button'}
			type={'button'}
			onClick={onClick}
			variant={'outline_gray'}
		>
			<img className={'gitlab-button__logo'} src={gitlabLogo} alt={"Кнопка gitlab"}/>
			Gitlab
		</Button>
	);
};