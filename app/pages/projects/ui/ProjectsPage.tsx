import { ProjectsBtnTableOption } from "@features/projects/ui/btn/table-option/ProjectsBtnTableOption";
import { useNavigate } from "@tanstack/react-router";
import React, { FC, useState } from "react";

import { Input } from "@ui-kit/input";
import { Table, Column } from "@ui-kit/table";
import { Icon } from "@ui-kit/icon/icon";

import { useMyProjects } from "@features/projects/query/useMyProjects";
import { ProjectsBtnCreate } from "@features/projects/ui/btn/create/ProjectsBtnCreate";

import '@pages/projects/ui/ProjectsPage.scss';


export const ProjectsPage: FC = () => {
	const [paginator, setPaginator] = useState({
		page: 1,
		perPage: 10,
	});

	const { data, isLoading } = useMyProjects(paginator);
	const totalPages = Math.ceil((data?.total || 1) / paginator.perPage);

	const navigate = useNavigate();

	const onRowClick = (data: any) => {
		navigate({
			to: `/projects/${data.id}/boards/${data.board_id}`,
		});
	};

	const onChangePage = (page: number) => {
		setPaginator(prev => ({ ...prev, page }));
	};

	return (
		<main className={'projects-page'}>
			<div className={'projects-page__navigate'}>
				<div className={'projects-page__navigate-logo-input'}>
					<h1 className={'projects-page__navigate-title'}>Проекты</h1>
					<Input
						rightIcon={() => <Icon icon={'search'}/>}
						placeholder="Поиск проектов"
						pt={{
							inputContainer: "projects-page__navigate-input",
						}}
					/>
				</div>
				<div className={'projects-page__navigate-btn'}>
					<ProjectsBtnCreate/>
					{/*<Button variant={'white'}>*/}
					{/*	<Icon icon={'settings'}/>*/}
					{/*</Button>*/}
				</div>
			</div>
			<div className={'projects-page__projects'}>
				<Table
					data={data?.data ?? []}
					paginator
					first={paginator.page}
					rows={paginator.perPage}
					totalPages={totalPages}
					onChangePage={onChangePage}
					onRowClick={onRowClick}
				>
					<Column header={"Название"} field={'name'}/>
					<Column header={"Тип"} field={'type'}/>
					<Column header={"URL-адрес проекта"} field={'url'}/>
					<Column
						header={"Доп. действие"}
						field={''}
						templateBodyCell={(rowData) => (
							<ProjectsBtnTableOption
								projectID={rowData.id}
								data={{
									name: rowData.name,
									url: rowData.url,
								}}
							/>
						)}
						align={'end'}
					/>
				</Table>
			</div>
		</main>
	);
};
