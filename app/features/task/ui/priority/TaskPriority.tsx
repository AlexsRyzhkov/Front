import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

interface ITaskPriorityProps {
	priority: 2 | 1 | 0 | -1 | -2;
}

export const TaskPriority: FC<ITaskPriorityProps> = ({ priority }) => {
	const priorityIconMap = {
		2: 'hight-2-icon',
		1: 'hight-1-icon',
		0: 'middle-icon',
		[-1]: 'low-1-icon',
		[-2]: 'low-2-icon',
	};


	return (
		<Icon icon={priorityIconMap[priority]} size={'24px'}/>
	);
};