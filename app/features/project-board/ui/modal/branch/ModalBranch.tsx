import { IBranch } from "@features/project-code/model/ProjectCode";
import { useBranches, useRefreshBranches } from "@features/project-code/query/useBranches";
import { useParams } from "@tanstack/react-router";
import { Icon } from "@ui-kit/icon/icon";
import { Modal } from "@ui-kit/modal";
import { Fragment, useState, FC } from "react";

import './ModalBranch.scss';

interface IModalBranch {
	currentBranchID?: string;
	onSave: (branch: IBranch) => void;
}

export const ModalBranch: FC<IModalBranch> = ({
	currentBranchID,
	onSave,
}) => {
	const [open, setOpen] = useState(false);

	const onClose = () => setOpen(false);

	const params = useParams({
		from: "/_authentication/projects/$id/boards/$boardId",
	});

	const { data: branches } = useBranches({ projectId: params.id });

	const refetchBranches = useRefreshBranches();

	const otherBranches = branches?.items.filter((branch) => branch.id !== currentBranchID);

	const activeBranch = branches?.items.find((br) => br.id === currentBranchID);

	const onSaveBranch = (branch: IBranch) => {
		onSave(branch);
		setOpen(false);
	};

	const onOpen = () => {
		refetchBranches();
		setOpen(true);
	};

	return (
		<Fragment>
			<span onClick={onOpen}>
				{activeBranch ? activeBranch.name : "Выбрать ветку"}
			</span>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Выбрать ветку"}
					onHide={onClose}
				/>
				<Modal.Body className={'branch-list'}>
					{otherBranches?.length === 0 && (
						<div className={'branch-emtpy'}>Нет доступных веток</div>
					)}

					{otherBranches?.map((branch) => (
						<div key={branch.id} className={'branch-item'} onClick={() => onSaveBranch(branch)}>
							<Icon icon={'graph_1'}/>
							<p>{branch.name}</p>
						</div>
					))}
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};