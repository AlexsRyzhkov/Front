import { LabelsList } from "@features/project-board/ui/form/task/label-list/LabelsList";
import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { Input } from "@ui-kit/input";
import { Modal } from "@ui-kit/modal";
import { useState, Fragment, KeyboardEvent, FC } from "react";

import './ModalLabel.scss';

interface IModalLabel {
	labels: string[]
	onSave: (labels: string[]) => void,
}

export const ModalLabel: FC<IModalLabel> = ({
	labels = [],
	onSave,
}) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");
	const [newLabels, setNewLabels] = useState<string[]>(labels);

	const onOpen = () => {
		setNewLabels(labels);
		setOpen(true);
	};

	const onEnterPress = (e: KeyboardEvent) => {
		if (e.key === "Enter" && value.trim() !== "") {
			setNewLabels(prev => [...prev, value]);
			setValue("");
		}
	};

	const onClose = () => {
		setOpen(false);
	};

	const removeLabel = (index: number) => {
		setNewLabels(prev => prev.filter((_, i) => i !== index));
	};

	const onSaveLabels = () => {
		onSave(newLabels);
		setOpen(false);
	};

	return (
		<Fragment>
			<div onClick={onOpen}>
				{labels.length === 0 ? (
					<div>Добавить метки</div>
				) : (
					<LabelsList labels={labels}/>
				)}
			</div>
			<Modal visible={open} onBackgroundClick={onClose}>
				<Modal.Header
					title={"Добавить метку"}
					onHide={onClose}
				/>
				<Modal.Body className={'label-list'}>
					<Input
						value={value}
						onChange={(e) => setValue(e.target.value)}
						onKeyDown={onEnterPress}
						placeholder={"Название метки"}
					/>
					<div className={'label-list__list'}>
						{newLabels.map((label, index) => (
							<div className={'label-list__label'} key={index}>
								{label}

								<Icon
									icon={'close'}
									size={'20px'}
									onClick={() => removeLabel(index)}
									className={'label-list__delete'}
								/>
							</div>
						))}
					</div>
					<div className={'label-list__btn'}>
						<Button variant={'cancel'} onClick={onClose}>Отмена</Button>
						<Button variant={'primary'} onClick={onSaveLabels}>Сохранить</Button>
					</div>
				</Modal.Body>
			</Modal>
		</Fragment>
	);
};