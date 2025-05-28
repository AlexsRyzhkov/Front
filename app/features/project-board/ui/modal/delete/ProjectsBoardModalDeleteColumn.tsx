import { useRefreshColumn } from "@features/project-board/query/useColumn";
import { ColumnService } from "@features/project-board/service/ColumnService";
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

export const ProjectsBoardModalDeleteColumn: FC<IProjectsModalDeleteProps> = ({ id, open, onClose }) => {
	const toast = useRef<IRefToast>(null);

	const refreshColumn = useRefreshColumn();

	const deleteProject = useMutation({
		mutationFn: ColumnService.delete,
		onSuccess: () => {
			refreshColumn();
			onClose();
		},
		onError: (error) => {
			if (axios.isAxiosError(error)) {
				toast.current?.show({ type: "error", info: "Ошибка удаления", detail: error.response?.data });
			}
		},
	});

	const onDelete = () => {
		deleteProject.mutate({ id });
	};

	return (
		<>
			<Modal visible={open} className={'project-modal-delete'} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Удалить колонку"}
					onHide={onClose}
					className={'project-modal-delete__header'}
				/>
				<Modal.Body className={'project-modal-delete__body'}>
					<Icon icon={'error'} size={'64px'} color={'#e34848'}/>
					<p>Вы уверены что хотите удалить колонку?</p>
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