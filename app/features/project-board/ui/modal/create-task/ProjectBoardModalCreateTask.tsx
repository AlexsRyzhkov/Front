import { ProjectBoardTaskForm } from "@features/project-board/ui/form/task/ProjectBoardTaskForm";
import { IComment, TaskCreate } from "@features/project-code/model/ProjectCode";
import { UseRefreshTasks } from "@features/task/query/useTaskByColumnID";
import { TaskService } from "@features/task/service/TaskService";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import { Fragment, useState, useRef, FC } from "react";

interface IProjectBoardModalCreateTask {
	columnID: string;
}

export const ProjectBoardModalCreateTask: FC<IProjectBoardModalCreateTask> = ({ columnID }) => {
	const [isOpen, setIsOpen] = useState(false);
	const toast = useRef<IRefToast>(null);

	const onOpen = () => setIsOpen(true);

	const onClose = () => setIsOpen(false);

	const refetchTasks = UseRefreshTasks();

	const createComment = useMutation({
		mutationFn: async () => {},
	});

	const createTask = useMutation({
		mutationFn: TaskService.createTask,
	});

	const onCreate = (task: TaskCreate, comment: IComment[]) => {
		createTask.mutate(
			task,
			{
				onSuccess: () => {
					refetchTasks();
					setIsOpen(false);
				},
				onError: () => {
					toast.current?.show({
						type: "error",
						info: "Ошибка создания",
						detail: "Ошибка создания задачи",
					});
				},
			},
		);
	};

	return (
		<Fragment>
			<Button className={'project-board-column__btn'} onClick={onOpen}>
				<Icon icon={'add'}/>
			</Button>
			<Modal visible={isOpen} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Создать задачу"}
					onHide={onClose}
				/>
				<Modal.Body>
					<ProjectBoardTaskForm
						columnID={columnID}
						onClose={onClose}
						onSave={onCreate}
						isLoading={createTask.isPending}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</Fragment>
	);
};