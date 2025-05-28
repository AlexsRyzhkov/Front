import { FC } from "react";

import '@shared/ui/page-title/ProjectPageTitle.scss';

interface IProjectPageTitleProps {
	title: string;
}

export const ProjectPageTitle: FC<IProjectPageTitleProps> = ({ title }) => {
	return (
		<h1 className={'project-page-title'}>{title}</h1>
	);
};