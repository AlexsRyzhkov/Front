import { Fragment, useRef, useState, MouseEvent, FC } from "react";


import { IProjectForm } from "@features/projects/model/Project";
import { ProjectsModalDelete } from "@features/projects/ui/modal/delete/ProjectsModalDelete";
import { ProjectsModalUpdate } from "@features/projects/ui/modal/update/ProjectsModalUpdate";
import { Button } from "@ui-kit/button/Button";
import { Dropdown } from "@ui-kit/dropdown";
import { Icon } from "@ui-kit/icon/icon";

import '@features/projects/ui/btn/table-option/ProjectsBtnTableOption.scss';

interface IProjectsBtnTableOptionProps {
	projectID: string;
	data: Omit<IProjectForm, 'board_name'>;
}

export const ProjectsBtnTableOption: FC<IProjectsBtnTableOptionProps> = ({
	projectID,
	data,
}) => {
	const ref = useRef<HTMLButtonElement>(null);

	const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
	const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

	const onOpenEdit = (e: MouseEvent) => {
		e.stopPropagation();
		setIsOpenUpdateModal(true);
	};

	const onDeleteEdit = (e: MouseEvent) => {
		e.stopPropagation();
		setIsOpenDeleteModal(true);
	};

	console.log(data);

	return (
		<Fragment>
			<Button
				size={'little'}
				padding={'4px'}
				variant={'no_background'}
				onClick={(e) => e.stopPropagation()}
				ref={ref}
			>
				<Icon icon={'more_horiz'}/>
			</Button>
			<Dropdown ref={ref} className={'project-btn-table-option'}>
				<Button
					className={'project-btn-table-option__update'}
					variant={'no_background'}
					onClick={onOpenEdit}
				>
					<Icon icon={'edit'}/>
					Обновить
				</Button>
				<Button
					className={'project-btn-table-option__delete'}
					variant={'no_background'}
					onClick={onDeleteEdit}
				>
					<Icon icon={'delete'}/>
					Удалить
				</Button>
			</Dropdown>
			<ProjectsModalUpdate
				open={isOpenUpdateModal}
				onClose={() => setIsOpenUpdateModal(false)}
				id={projectID}
				data={data}
			/>
			<ProjectsModalDelete
				open={isOpenDeleteModal}
				onClose={() => setIsOpenDeleteModal(false)}
				id={projectID}
			/>
		</Fragment>
	);
};