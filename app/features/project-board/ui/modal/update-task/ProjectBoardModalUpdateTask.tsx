import { useSortable } from "@dnd-kit/sortable";
import { ProjectBoardTaskForm } from "@features/project-board/ui/form/task/ProjectBoardTaskForm";
import { IComment, ITask, TaskCreate } from "@features/project-code/model/ProjectCode";
import { UseRefreshTasks } from "@features/task/query/useTaskByColumnID";
import { TaskService } from "@features/task/service/TaskService";
import { TaskCard } from "@features/task/ui/card/TaskCard";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import { Fragment, useState, useRef, FC } from "react";
import { CSS } from '@dnd-kit/utilities';

interface IProjectBoardModalCreateTask {
	columnID: string;
	task: ITask;
}

export const ProjectBoardModalUpdateTask: FC<IProjectBoardModalCreateTask> = ({ columnID, task }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toast = useRef<IRefToast>(null);

	const onOpen = () => setIsOpen(true);

	const onClose = () => setIsOpen(false);

	const refetchTasks = UseRefreshTasks();

	const createComment = useMutation({
		mutationFn: async () => {},
	});

	const updateTask = useMutation({
		mutationFn: TaskService.updateTask,
	});

	const onUpdate = (updateT: TaskCreate, comment: IComment[]) => {
		updateTask.mutate({
				id: task.id,
				task: {
					id: task.id,
					is_complete: false,
					order: task.order,
					...updateT,
				},
			},
			{
				onSuccess: () => {
					refetchTasks();
					onClose();
				},
			},
		);
	};


	return (
		<Fragment>
			<TaskCard key={task.id} onClick={onOpen} task={task}/>
			<Modal visible={isOpen} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Создать задачу"}
					onHide={onClose}
				/>
				<Modal.Body>
					<ProjectBoardTaskForm
						columnID={columnID}
						onClose={onClose}
						onSave={onUpdate}
						task={task}
						isLoading={updateTask.isPending}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</Fragment>
	);
};