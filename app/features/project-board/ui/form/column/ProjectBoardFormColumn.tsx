import {
	IProjectColumnForm,
	ProjectColumnForm,
} from "@features/project-board/model/ProjectBoard";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui-kit/button/Button";
import { Form } from "@ui-kit/form/Form";
import { Input } from "@ui-kit/input";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import './ProjectBoardFormColumn.scss';

interface IProjectBoardFormColumnProps {
	name: string;
	onSave: (data: IProjectColumnForm) => void;
	onClose: () => void;
}

export const ProjectBoardFormColumn: FC<IProjectBoardFormColumnProps> = ({ name, onSave, onClose }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProjectColumnForm>({
		defaultValues: {
			name: name,
		},
		resolver: zodResolver(ProjectColumnForm),
	});

	const onSubmit: SubmitHandler<IProjectColumnForm> = (data) => onSave(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className={'project-board-form-column'}>
			<Input
				{...register('name')}
				label={"Название"}
				placeholder={"Аналитика"}
				error={errors.name?.message}
			/>
			<div className={'project-board-form-column__btn'}>
				<Button type={'button'} variant={'cancel'} onClick={onClose}>Отменить</Button>
				<Button variant={'primary'}>Сохранить</Button>
			</div>
		</Form>
	);
};