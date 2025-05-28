import { Breadcrumbs } from "@ui-kit/breadcrumbs/ui/Breadcrumbs";
import { ProjectTaskList } from "@widget/project-all-task/ui/list/ProjectTaskList";
import { ProjectPageTitle } from "@shared/ui/page-title/ProjectPageTitle";
import { FC } from "react";

import '@pages/project-all-task/ui/ProjectAllTaskPage.scss';

export const ProjectAllTaskPage: FC = () => {
	const breadcrumbs = [
		{
			title: 'Проекты',
			link: '',
		},
		{
			title: 'Название проекта',
			link: '',
		},
		{
			title: 'Все задачи',
			link: '',
		},
	];

	return (
		<div className={'project-all-task-page'}>
			<Breadcrumbs links={breadcrumbs}/>
			<ProjectPageTitle title={"Все задачи"}/>
			<div className={'project-all-task-page__content'}>
				<div className={'project-all-task-page__list'}>
					<ProjectTaskList/>
				</div>
				<div className={'project-all-task-page__'}>

				</div>
			</div>
		</div>
	);
};