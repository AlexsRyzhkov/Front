import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@ui-kit/input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "@ui-kit/form/Form";
import { ProjectCodeRepoForm, IProjectCodeRepoForm } from "@features/project-code/model/ProjectCode";
import { Button } from "@ui-kit/button/Button";
import { FC } from "react";

import './ProjectCodeForm.scss';

interface IProjectCodeForm {
	url: string;
	token: string;
	onSave: (data: IProjectCodeRepoForm) => void;
	onClose: () => void;
}

export const ProjectCodeForm: FC<IProjectCodeForm> = ({
	url,
	token,
	onSave,
	onClose,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IProjectCodeRepoForm>({
		defaultValues: {
			url,
			token,
		},
		resolver: zodResolver(ProjectCodeRepoForm),
	});

	const onSubmit: SubmitHandler<IProjectCodeRepoForm> = (data) => onSave(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)} className={'project-code-form'}>
			<Input
				{...register('url')}
				label={"Ссылка на репозиторий"}
				placeholder={"http://localhost:8080"}
				error={errors.url?.message}
			/>
			<Input
				{...register('token')}
				label={"API токен доступа"}
				placeholder={"bvbyryrhzdzbgsdbngs"}
				error={errors.url?.message}
			/>
			<div className={'project-code-form__btn'}>
				<Button type={'button'} variant={'cancel'} onClick={onClose}>Отменить</Button>
				<Button variant={'primary'}>Сохранить</Button>
			</div>
		</Form>
	);
};