import { useLocation } from "@tanstack/react-router";
import { Icon } from "@ui-kit/icon/icon";
import { Link } from "@ui-kit/link/Link";
import clsx from "clsx";
import { FC, useState } from "react";

import '@widget/project/ui/naviagate/expand-list/link/ProjectNavigateExpandListLink.scss';

interface IProjectNavigateExpandListLinkProps {
	title: string;
	icon: string;
	link: string;
}

export const ProjectNavigateExpandListLink: FC<IProjectNavigateExpandListLinkProps> = ({
	title,
	icon,
	link,
}) => {
	const location = useLocation();

	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = () => {
		setIsHover(true);
	};

	const onMouseLeave = () => {
		setIsHover(false);
	};

	return (
		<Link
			to={link as any}
			className={
				clsx(
					'project-navigate-expand-list-link',
					isHover && 'project-navigate-expand-list-link--hover',
					location.pathname === link && 'project-navigate-expand-list-link--hover',
				)
			}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<Icon icon={icon} size={'22px'} color={
				isHover || location.pathname === link ? 'var(--color-primary)' : 'var(--color-primary-darkne)'
			}/>
			{title}
		</Link>
	);
};