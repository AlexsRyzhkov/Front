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

interface IProjectsModalDeleteProps {
	open: boolean;
	onClose: () => void;
	id: string;
	data: Omit<IProjectForm, 'board_name'>;
}

export const ProjectsModalUpdate: FC<IProjectsModalDeleteProps> = ({ id, open, data, onClose }) => {
	const toast = useRef<IRefToast>(null);

	const refreshProjectList = useRefreshMyProject();

	const updateProject = useMutation({
		mutationFn: ProjectService.update,
		onSuccess: () => {
			refreshProjectList();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({ type: "error", info: "Ошибка обновления", detail: "Ошибка сервера" });
			}
		},
	});

	const onUpdate = (data: IProjectForm) => {
		updateProject.mutate({ id: id, name: data.name, url: data.url });
	};

	return (
		<>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Обновить проект"}
					onHide={onClose}
				/>
				<Modal.Body>
					<ProjectsForm
						isEdit
						data={{
							...data,
							board_name: "Пустое поле",
						}}
						onSave={onUpdate}
						onCancel={onClose}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</>
	);
};