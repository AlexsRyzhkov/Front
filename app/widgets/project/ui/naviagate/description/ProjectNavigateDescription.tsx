import { useProject } from "@features/projects/query/useProject";
import { ProjectDefaultLogo } from "@shared/ui/project-default-logo/ProjectDefaultLogo";

import '@widget/project/ui/naviagate/description/ProjectNavigateDescription.scss';
import { FC } from "react";

interface IProjectNavigateDescriptionProps {
	projectID: string;
}

export const ProjectNavigateDescription: FC<IProjectNavigateDescriptionProps> = ({ projectID }) => {

	const { data } = useProject(projectID);

	return (
		<div className={'project-navigate-description'}>
			<div className={'project-navigate-description__logo'}>
				<ProjectDefaultLogo/>
			</div>
			<div className={'project-navigate-description__desc'}>
				<span className={'project-navigate-description__title'}>{data?.name ?? "Поиск"}</span>
				<span className={'project-navigate-description__type'}>{data?.type ?? "Поиск"}</span>
			</div>
		</div>
	);
};