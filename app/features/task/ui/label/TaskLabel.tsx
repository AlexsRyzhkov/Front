import { FC } from "react";

import '@features/task/ui/label/TaskLabel.scss';

interface ITaskLabelProps {
	title: string;
}

export const TaskLabel: FC<ITaskLabelProps> = ({ title }) => {
	return (
		<div className={'task-label'}>
			{title}
		</div>
	);
};