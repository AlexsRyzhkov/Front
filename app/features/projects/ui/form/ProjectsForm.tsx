import { IProjectForm, ProjectForm } from "@features/projects/model/Project";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@ui-kit/button/Button";
import { FC } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@ui-kit/input";

import { Form } from "@ui-kit/form/Form";

import '@features/projects/ui/form/ProjectsForm.scss';

interface IProjectsFormProps {
	isEdit?: boolean;
	data: IProjectForm;
	onSave: (data: IProjectForm) => void;
	onCancel?: () => void;
}

export const ProjectsForm: FC<IProjectsFormProps> = ({ isEdit, data, onSave, onCancel }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProjectForm>({
		defaultValues: {
			...data,
		},
		resolver: zodResolver(ProjectForm),
	});

	const onSubmit: SubmitHandler<IProjectForm> = (data) => onSave(data);

	return (
		<Form className={'projects-form'} onSubmit={handleSubmit(onSubmit)}>
			<Input
				{...register('name')}
				label={'Название проекта'}
				placeholder={'Foxtask.project'}
				error={errors.name?.message}
			/>
			{!isEdit && (
				<Input
					{...register('board_name')}
					label={'Название доски'}
					placeholder={'Аналитика'}
					error={errors.board_name?.message}
				/>)}
			<Input
				{...register('url')}
				label={"url"}
				placeholder={'http://10.101.10.1/foxtask.ru'}
				error={errors.url?.message}
			/>

			<div className={'projects-form__btn'}>
				<Button variant={'cancel'} onClick={onCancel} type={'button'}>
					Отменить
				</Button>
				<Button variant={'primary'} type={'submit'}>
					Сохранить
				</Button>
			</div>
		</Form>
	);
};