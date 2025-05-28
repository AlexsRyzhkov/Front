import { UserView } from "@features/project-board/ui/form/task/user-view/UserView";
import { Modal } from "@ui-kit/modal";
import { Fragment, useState } from "react";

import './ModalAsign.scss';

export const ModalAsign = () => {
	const [open, setOpen] = useState(false);

	const onClose = () => setOpen(false);

	return (
		<Fragment>
			<UserView/>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Выбрать исполнителя"}
					onHide={onClose}
				/>
				<Modal.Body className={'member-list'}>
					<div className={'member-list__item'}>
						<div className={'member-list__avatar'}>
							AC
						</div>
						<p className={'member-list__fio'}>Рыжков Александр</p>
					</div>
					<div className={'member-list__item'}>
						<div className={'member-list__avatar'}>
							AC
						</div>
						<p className={'member-list__fio'}>Рыжков Александр</p>
					</div>
					<div className={'member-list__item'}>
						<div className={'member-list__avatar'}>
							AC
						</div>
						<p className={'member-list__fio'}>Рыжков Александр</p>
					</div>
					<div className={'member-list__item'}>
						<div className={'member-list__avatar'}>
							AC
						</div>
						<p className={'member-list__fio'}>Рыжков Александр</p>
					</div>
					<div className={'member-list__item'}>
						<div className={'member-list__avatar'}>
							AC
						</div>
						<p className={'member-list__fio'}>Рыжков Александр</p>
					</div>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};