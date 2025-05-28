import { useNavigate, useLocation } from "@tanstack/react-router";
import { PropsWithChildren, FC } from "react";

import { ProjectNavigateBase } from "@widget/project/ui/naviagate/base/ProjectNavigateBase";

import '@widget/project/ui/layout/ProjectLayout.scss';

interface IProjectLayoutProps extends PropsWithChildren {
	projectId: string;
	boardId: string;
}

export const ProjectLayout: FC<IProjectLayoutProps> = ({
	children,
	projectId,
	boardId,
}) => {
	const location = useLocation();

	return (
		<section className={'project-layout'}>
			<nav className={'project-layout__nav'}>
				{!location.pathname.includes('settings') ? (
					<ProjectNavigateBase
						projectId={projectId}
						boardId={boardId}
					/>
				) : (
					<div>
						Setting
					</div>
				)}
			</nav>
			<div className={'project-layout__content'}>
				{children}
			</div>
		</section>
	);
};