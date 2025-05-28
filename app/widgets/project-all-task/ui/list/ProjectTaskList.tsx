import { FC } from "react";

import { TaskCard } from "@features/task/ui/card/TaskCard";

import '@widget/project-all-task/ui/list/ProjectTaskList.scss';

export const ProjectTaskList: FC = () => {
	const tasks = new Array(100).fill(0);

	return (
		<div className={'project-task-list'}>
			<div className={'project-task-list__body'}>
				{tasks.map(() => (
					<TaskCard/>
				))}
			</div>
		</div>
	);
};