import { useRefreshIntegration } from "@features/project-code/query/useIntegration";
import { CodeService } from "@features/project-code/service/CodeService";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import axios from "axios";
import { FC, useRef, useState } from "react";

import './ProjectCodeModalDelete.scss';

interface IProjectCodeModalDelete {
	id: string;
}

export const ProjectCodeModalDelete: FC<IProjectCodeModalDelete> = ({
	id,
}) => {
	const toast = useRef<IRefToast>(null);

	const [isOpen, setIsOpen] = useState(false);

	const onClose = () => setIsOpen(false);

	const codeRefresh = useRefreshIntegration();

	const deleteProject = useMutation({
		mutationFn: CodeService.delete,
		onSuccess: () => {
			codeRefresh();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({ type: "error", info: "Ошибка удаления", detail: error.response?.data });
			}
		},
	});

	const onDelete = () => {
		deleteProject.mutate(id);
	};

	return (
		<>
			<Button
				className={'project-code-content__edit-btn'}
				variant={'no_background'}
				size={'large'}
				onClick={() => setIsOpen(true)}
			>
				<Icon icon={'delete'} size={'16px'}/>
			</Button>
			<Modal visible={isOpen} className={'project-modal-delete'} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Удалить подключение"}
					onHide={onClose}
					className={'project-modal-delete__header'}
				/>
				<Modal.Body className={'project-modal-delete__body'}>
					<Icon icon={'error'} size={'64px'} color={'#e34848'}/>
					<p>Вы уверены что хотите удалить подключение?</p>
				</Modal.Body>
				<Modal.Footer className={'project-modal-delete__footer'}>
					<Button variant={'cancel'} onClick={onClose}>
						Отменить
					</Button>
					<Button variant={'delete'} onClick={onDelete}>
						Удалить
					</Button>
				</Modal.Footer>
			</Modal>
			<Toast ref={toast}/>
		</>
	);
};