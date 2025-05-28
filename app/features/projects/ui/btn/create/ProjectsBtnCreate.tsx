import { useState, useRef } from "react";
import { useMutation } from "@tanstack/react-query";

import { IProjectForm } from "@features/projects/model/Project";
import { useRefreshMyProject } from "@features/projects/query/useMyProjects";
import { ProjectService } from "@features/projects/service/projects";
import { ProjectsForm } from "@features/projects/ui/form/ProjectsForm";
import { Button } from "@ui-kit/button/Button";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";

import '@features/projects/ui/btn/create/ProjectsBtnCreate.scss';

export const ProjectsBtnCreate = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toast = useRef<IRefToast>(null);

	const refreshMyProjects = useRefreshMyProject();

	const createProject = useMutation({
		mutationFn: ProjectService.create,
		onSuccess: () => {
			refreshMyProjects();
			setIsOpen(false);
		},
		onError: () => {
			toast.current?.show({ type: 'success', info: "Успешно", detail: "Проект успешно создан" });
		},
	});

	const onCreate = (data: IProjectForm) => {
		createProject.mutate(data);
	};

	const onCancel = () => setIsOpen(false);

	return (
		<div className={'projects-btn-create'}>
			<Button
				size={'small'}
				className={'projects-btn-create__btn'}
				onClick={() => setIsOpen(true)}
			>
				Создать проект
			</Button>
			<Modal
				visible={isOpen}
				onBackgroundClick={() => setIsOpen(false)}
			>
				<Modal.Header
					className={'projects-btn-create-modal__header'}
					onHide={onCancel}
					title={"Создать проект"}
				/>
				<Modal.Body className={'projects-btn-create-modal__body'}>
					<ProjectsForm
						isEdit={false}
						data={{
							name: "",
							board_name: "",
							url: "",
						}}
						onSave={onCreate}
						onCancel={onCancel}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</div>
	);
};