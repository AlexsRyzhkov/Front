import { useSortable, SortableContext } from "@dnd-kit/sortable";
import { ProjectBoardModalCreateTask } from "@features/project-board/ui/modal/create-task/ProjectBoardModalCreateTask";
import { ProjectBoardModalUpdateTask } from "@features/project-board/ui/modal/update-task/ProjectBoardModalUpdateTask";
import { useTaskByColumnID } from "@features/task/query/useTaskByColumnID";
import { useParams } from "@tanstack/react-router";
import { AxiosError } from "axios";
import clsx from "clsx";
import { FC } from "react";

import { TaskCard } from "@features/task/ui/card/TaskCard";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";

import { CSS } from "@dnd-kit/utilities";

import '@widget/project-board/ui/column/ProjectBoardColumn.scss';
import {
	ProjectBoardBtnOptionsColumn,
} from "@features/project-board/ui/btn/options/column/ProjectBoardBtnOptionsColumn";

interface ProjectBoardColumnProps {
	canComplete: boolean;
	name: string;
	id: string;
}

export const ProjectBoardColumn: FC<ProjectBoardColumnProps> = ({ id, canComplete, name }) => {
	const {
		setNodeRef,
		attributes,
		listeners,
		transform,
		transition,
		isDragging,
	} = useSortable({
		id: id,
		data: {
			type: "Column",
			id: id,
			canComplete,
			name,
		},
	});

	const style = {
		transition,
		transform: CSS.Transform.toString(transform),
	};

	const { data, isError } = useTaskByColumnID(id);

	const safeTask = isError ? [] : data;

	const tasksIDs = (safeTask || []).map((task) => task.id);

	if (isDragging) {
		return (
			<div
				ref={setNodeRef}
				style={style}
				className={'project-board-column__overlay'}
			>
			</div>
		);
	}

	return (
		<div
			className={'project-board-column'}
			ref={setNodeRef}
			style={style}
		>
			<div className={'project-board-column__header'}>
				<div
					className={'project-board-column__title-container'}
					{...attributes}
					{...listeners}
				>
					<span className={clsx(
						'project-board-column__title',
						canComplete && 'project-board-column__title--completed',
					)}>
						{name}
					</span>
					{canComplete && (<Icon icon={"check_small"} size={'30px'}/>)}
				</div>
				{!canComplete && (
					<div className={'project-board-column__action'}>
						<ProjectBoardModalCreateTask columnID={id}/>
						<ProjectBoardBtnOptionsColumn id={id} name={name}/>
					</div>
				)}
			</div>
			<div className={'project-board-column__task-list'}>
				{safeTask?.map((task) => (
					<ProjectBoardModalUpdateTask task={task} columnID={id} key={task.id}/>
				))}
			</div>
		</div>
	);
};