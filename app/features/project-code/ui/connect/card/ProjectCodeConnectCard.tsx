import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

import '@features/project-code/ui/connect/card/ProjectCodeConnectCard.scss';

interface IProjectCodeConnectCardProps {
	icon: "gitlab-icon" | "gitflic-icon";
	title: string;
	onClick?: () => void;
}

export const ProjectCodeConnectCard: FC<IProjectCodeConnectCardProps> = ({
	icon,
	title,
	onClick,
}) => {
	return (
		<div className={'project-code-connect-card'} onClick={onClick}>
			<Icon icon={icon} size={'48px'}/>
			<span className={'project-code-connect-card__title'}>{title}</span>
		</div>
	);
};