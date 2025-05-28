import { FC } from "react";

import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";

import '@widget/project/ui/naviagate/btn/ProjectNavigateBtn.scss';

interface IProjectNavigateBtnProps {
	title: string;
	icon: string;
	onClick?: () => void;
}

export const ProjectNavigateBtn: FC<IProjectNavigateBtnProps> = ({
	title,
	icon,
	onClick,
}) => {
	return (
		<Button
			onClick={onClick}
			className={'project-navigate-btn'}
			variant={'no_background'}
		>
			<Icon icon={icon} size={'22px'}/>
			<p>{title}</p>
		</Button>
	);
};