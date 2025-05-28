import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

import '@features/task/ui/type/TaskType.scss';

export const TaskType: FC = () => {
	return (
		<div className={'task-type'}>
			<Icon className={'task-type__icon'} icon={'check_small'} size={'20px'}/>
			<p className={'task-type__number'}>Task</p>
		</div>
	);
};