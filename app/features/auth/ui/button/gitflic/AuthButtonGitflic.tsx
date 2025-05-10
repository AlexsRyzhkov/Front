import { Button } from "@ui-kit/button/Button";
import { FC, MouseEventHandler } from "react";

import gitlabLogo from "@features/auth/assert/gitflic.png";

import "@features/auth/ui/button/gitflic/AuthButtonGitflic.scss";

interface IAuthButtonGitflicProps {
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const AuthButtonGitflic: FC<IAuthButtonGitflicProps> = ({ onClick }) => {
	return (
		<Button
			className={'gitflic-button'}
			type={'button'}
			onClick={onClick}
			variant={'outline_gray'}
		>
			<img className={'gitflic-button__logo'} src={gitlabLogo} alt={"Кнопка gitlab"}/>
			Gitlab
		</Button>
	);
};