import { ProjectsBoardModalDeleteColumn } from "@features/project-board/ui/modal/delete/ProjectsBoardModalDeleteColumn";
import { ProjectsBoardModalUpdateColumn } from "@features/project-board/ui/modal/update/ProjectsBoardModalUpdateColumn";
import { Button } from "@ui-kit/button/Button";
import { Dropdown } from "@ui-kit/dropdown";
import { Icon } from "@ui-kit/icon/icon";

import './ProjectBoardBtnOptionsColumn.scss';
import { useRef, useState, FC } from "react";

interface IProjectBoardBtnOptionsColumn {
	id: string;
	name: string;
}

export const ProjectBoardBtnOptionsColumn: FC<IProjectBoardBtnOptionsColumn> = ({
	id,
	name,
}) => {
	const ref = useRef<HTMLButtonElement>(null);

	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
	const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);

	return (
		<>
			<Button ref={ref} className={'project-board-btn-option-column'}>
				<Icon icon={'more_horiz'}/>
			</Button>
			<Dropdown ref={ref} className={'project-board-btn-option-column__drop-down'}>
				<Button
					className={'project-board-btn-option-column__update'}
					variant={'no_background'}
					onClick={() => setIsOpenUpdateModal(true)}
				>
					<Icon icon={'edit'}/>
					Обновить
				</Button>
				<Button
					className={'project-board-btn-option-column__delete'}
					variant={'no_background'}
					onClick={() => setIsOpenDeleteModal(true)}
				>
					<Icon icon={'delete'}/>
					Удалить
				</Button>
			</Dropdown>
			<ProjectsBoardModalUpdateColumn
				name={name}
				id={id}
				open={isOpenUpdateModal}
				onClose={() => setIsOpenUpdateModal(false)}
			/>
			<ProjectsBoardModalDeleteColumn
				open={isOpenDeleteModal}
				onClose={() => setIsOpenDeleteModal(false)}
				id={id}
			/>
		</>
	);
};