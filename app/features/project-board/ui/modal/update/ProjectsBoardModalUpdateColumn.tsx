import { IProjectColumnForm, ProjectColumnForm } from "@features/project-board/model/ProjectBoard";
import { useRefreshColumn } from "@features/project-board/query/useColumn";
import { ProjectBoardFormColumn } from "@features/project-board/ui/form/column/ProjectBoardFormColumn";
import { FC, useRef } from 'react';
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import { IProjectForm } from "@features/projects/model/Project";
import { useRefreshMyProject } from "@features/projects/query/useMyProjects";
import { ProjectService } from "@features/projects/service/projects";
import { ProjectsForm } from "@features/projects/ui/form/ProjectsForm";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { Modal } from '@ui-kit/modal';
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import { ColumnService } from "@features/project-board/service/ColumnService";

interface IProjectsModalDeleteProps {
	open: boolean;
	onClose: () => void;
	id: string;
	name: string;
}

export const ProjectsBoardModalUpdateColumn: FC<IProjectsModalDeleteProps> = ({ id, open, name, onClose }) => {
	const toast = useRef<IRefToast>(null);

	const refreshColumn = useRefreshColumn();

	const updateProject = useMutation({
		mutationFn: ColumnService.update,
		onSuccess: () => {
			refreshColumn();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({ type: "error", info: "Ошибка обновления", detail: "Ошибка сервера" });
			}
		},
	});

	const onUpdate = (data: IProjectColumnForm) => {
		updateProject.mutate({ columnID: id, name: data.name });
	};

	return (
		<>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Обновить проект"}
					onHide={onClose}
				/>
				<Modal.Body>
					<ProjectBoardFormColumn
						name={name}
						onSave={onUpdate}
						onClose={onClose}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</>
	);
};