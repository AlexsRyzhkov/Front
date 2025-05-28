import { IProjectCodeRepoForm } from "@features/project-code/model/ProjectCode";
import { useRefreshIntegration } from "@features/project-code/query/useIntegration";
import { CodeService } from "@features/project-code/service/CodeService";
import { ProjectCodeForm } from "@features/project-code/ui/form/ProjectCodeForm";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import axios from "axios";
import { FC, Fragment, useRef } from "react";

interface IProjectCodeModalCreate {
	open: boolean;
	onClose: () => void;
}

export const ProjectCodeModalCreate: FC<IProjectCodeModalCreate> = ({
	open,
	onClose,
}) => {
	const toast = useRef<IRefToast>(null);

	const refreshCode = useRefreshIntegration();

	const createGitflic = useMutation({
		mutationFn: CodeService.create,
		onSuccess: () => {
			refreshCode();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({
					type: "error",
					info: "Ошибка создания подключения к gitflic",
					detail: "Ошибка сервера",
				});
			}
		},
	});

	const param = useParams({
		from: "/_authentication/projects/$id/boards/$boardId/git",
	});

	const onCreate = (data: IProjectCodeRepoForm) => {
		createGitflic.mutate({
			projectID: param.id,
			repositoryUrl: data.url,
			AccessToken: data.token,
		});
	};


	return (
		<Fragment>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Создать подключение"}
					onHide={onClose}
				/>
				<Modal.Body>
					<ProjectCodeForm
						token={''}
						url={''}
						onClose={onClose}
						onSave={onCreate}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</Fragment>
	);
};