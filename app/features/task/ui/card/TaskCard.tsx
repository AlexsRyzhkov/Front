import { ITask } from "@features/project-code/model/ProjectCode";
import { TaskExecutor } from "@features/task/ui/executor/TaskExecutor";
import { TaskLabel } from "@features/task/ui/label/TaskLabel";
import { TaskPriority } from "@features/task/ui/priority/TaskPriority";
import { TaskType } from "@features/task/ui/type/TaskType";
import { FC, Fragment } from "react";

import '@features/task/ui/card/TaskCard.scss';

interface ITaskCardProps {
	onClick?: () => void;
	task: ITask;
}

export const TaskCard: FC<ITaskCardProps> = ({ onClick, task }) => {
	return (
		<Fragment>
			<div className={'task-card'} onClick={onClick}>
				<span className={'task-card__title'}>{task.title}</span>
				<div className={'task-card__labels'}>
					{task.labels?.map((label, index) => (
						<TaskLabel title={label} key={index}/>
					))}
				</div>
				<div className={'task-card__footer'}>
					<TaskType/>
					<div className={'task-card__footer-right'}>
						<TaskPriority priority={0}/>
						<TaskExecutor/>
					</div>
				</div>
			</div>
		</Fragment>
	);
};