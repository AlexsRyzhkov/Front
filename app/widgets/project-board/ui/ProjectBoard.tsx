import {
	useSensors,
	useSensor,
	MouseSensor,
	TouchSensor,
	PointerSensor, DndContext, DragStartEvent, DragEndEvent, DragOverlay,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useColumn, useRefreshColumn } from "@features/project-board/query/useColumn";
import { ColumnService } from "@features/project-board/service/ColumnService";
import { ProjectBoardColumnCreate } from "@features/project-board/ui/btn/create/ProjectBoardColumnCreate";
import { ITask } from "@features/project-code/model/ProjectCode";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import { ProjectBoardColumn } from "@widget/project-board/ui/column/ProjectBoardColumn";
import axios from "axios";
import { FC, useState, useEffect, useRef } from "react";

import '@widget/project-board/ui/ProjectBoard.scss';
import { createPortal } from "react-dom";

export const ProjectBoard: FC = () => {
	const params = useParams({ from: '/_authentication/projects/$id/boards/$boardId/board' });
	const { data } = useColumn({
		projectId: params.id,
		boardId: params.boardId,
	});

	const [columns, setColumns] = useState(data ?? []);
	const [activeColumn, setActiveColumn] = useState<any>(null);

	useEffect(() => {
		setColumns(data ?? []);
	}, [JSON.stringify(data)]);

	const onDragStart = (event: DragStartEvent) => {
		if (event.active.data.current?.type === 'Column') {
			console.log(event.active.data);

			setActiveColumn(event.active.data.current);
			return;
		}
	};

	console.log(activeColumn);

	const toast = useRef<IRefToast>(null);
	const refreshColumns = useRefreshColumn();

	const reorderColumn = useMutation({
		mutationFn: ColumnService.reorder,
		onSuccess: () => {
			refreshColumns();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({
					type: "error",
					info: "Ошибка изменения порядка колонки",
					detail: error.response?.data,
				});
			}
		},
	});

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!over || (active.id === over.id)) return;

		setColumns((columns) => {
			const activeColumnIndex = columns.findIndex((col) => col.id === active.id);
			const overColumnIndex = columns.findIndex((col) => col.id === over.id);

			reorderColumn.mutate({
				columnId: activeColumn.id,
				boardId: params.boardId,
				order: overColumnIndex,
			});

			return arrayMove(columns, activeColumnIndex, overColumnIndex);
		});

		setActiveColumn(null);
	};

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 3,
			},
		}),
	);

	const [tasks, setTasks] = useState<ITask[]>([]);

	return (
		<DndContext
			sensors={sensors}
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<div className={'project-board'}>
				<SortableContext items={columns.map((column) => column.id)}>
					{columns?.map((column) => (
						<ProjectBoardColumn
							key={column.id}
							id={column.id}
							name={column.name}
							canComplete={column.can_complete_task}
						/>
					))}
				</SortableContext>
				<ProjectBoardColumnCreate/>
			</div>
			{createPortal(
				<DragOverlay>
					{activeColumn && (
						<ProjectBoardColumn
							canComplete={activeColumn.canComplete}
							name={activeColumn.name}
							id={activeColumn.id}
						/>
					)}
				</DragOverlay>,
				document.body,
			)}
		</DndContext>
	);
};