import { IProjectForm } from "@features/projects/model/Project";
import { useRefreshMyProject } from "@features/projects/query/useMyProjects";
import { ProjectService } from "@features/projects/service/projects";
import { ProjectsForm } from "@features/projects/ui/form/ProjectsForm";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { Toast } from "@ui-kit/toast/ui/Toast";
import axios from "axios";
import { FC, useRef } from 'react';
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";

import '@features/projects/ui/modal/delete/ProjectsModalDelete.scss';
import { Modal } from "@ui-kit/modal";

interface IProjectsModalDeleteProps {
	open: boolean;
	onClose: () => void;
	id: string;
}

export const ProjectsModalDelete: FC<IProjectsModalDeleteProps> = ({ id, open, onClose }) => {
	const toast = useRef<IRefToast>(null);

	const refreshProjectList = useRefreshMyProject();

	const deleteProject = useMutation({
		mutationFn: ProjectService.delete,
		onSuccess: () => {
			refreshProjectList();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({ type: "error", info: "Ошибка удаления", detail: error.response?.data });
			}
		},
	});

	const onUpdate = () => {
		deleteProject.mutate({ id });
	};

	return (
		<>
			<Modal visible={open} className={'project-modal-delete'} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Удалить проект"}
					onHide={onClose}
					className={'project-modal-delete__header'}
				/>
				<Modal.Body className={'project-modal-delete__body'}>
					<Icon icon={'error'} size={'64px'} color={'#e34848'}/>
					<p>Вы уверены что хотите удалить проект?</p>
				</Modal.Body>
				<Modal.Footer className={'project-modal-delete__footer'}>
					<Button variant={'cancel'} onClick={onClose}>
						Отменить
					</Button>
					<Button variant={'delete'} onClick={onUpdate}>
						Удалить
					</Button>
				</Modal.Footer>
			</Modal>
			<Toast ref={toast}/>
		</>
	);
};