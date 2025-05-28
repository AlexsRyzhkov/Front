import { IProjectColumnForm } from "@features/project-board/model/ProjectBoard";
import { useRefreshColumn } from "@features/project-board/query/useColumn";
import { ColumnService } from "@features/project-board/service/ColumnService";
import { ProjectBoardFormColumn } from "@features/project-board/ui/form/column/ProjectBoardFormColumn";
import { useMutation } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { Button } from "@ui-kit/button/Button";
import { Modal } from "@ui-kit/modal";
import { Toast } from "@ui-kit/toast/ui/Toast";
import { IRefToast } from "@ui-kit/toast/ui/Toast.types";
import axios from "axios";
import { FC, useRef, useState } from "react";

import './ProjectBoardColumnCreate.scss';

export const ProjectBoardColumnCreate: FC = () => {
	const [visible, setVisible] = useState(false);

	const toast = useRef<IRefToast>(null);

	const refreshColumn = useRefreshColumn();

	const createColumn = useMutation({
		mutationFn: ColumnService.create,
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

	const onClose = () => setVisible(false);

	const params = useParams({ from: "/_authentication/projects/$id/boards/$boardId/board" });

	const onSave = (data: IProjectColumnForm) => {
		createColumn.mutate({
			name: data.name,
			projectId: params.id,
			boardId: params.boardId,
		});
	};

	return (
		<div className={'project-board-column-create'}>
			<Button
				className={'project-board-column-create__btn'}
				onClick={() => setVisible(true)}
			>
				Добавить колонку
			</Button>
			<Modal
				visible={visible} onBackgroundClick={onClose}
			>
				<Modal.Header title={"Создание колонки"} onHide={onClose}/>
				<Modal.Body className={'project-board-column-create__modal-body'}>
					<ProjectBoardFormColumn
						name={''}
						onSave={onSave}
						onClose={onClose}
					/>
				</Modal.Body>
			</Modal>
			<Toast ref={toast}/>
		</div>
	);
};