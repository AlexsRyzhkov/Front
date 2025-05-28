import { ProjectCodeModalDelete } from "@features/project-code/ui/modal/delete/ProjectCodeModalDelete";
import { FC } from "react";

import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";

import { Breadcrumbs } from "@ui-kit/breadcrumbs/ui/Breadcrumbs";
import { ProjectPageTitle } from "@shared/ui/page-title/ProjectPageTitle";

import '@widget/project-code/ui/content/ProjectCodeContent.scss';

interface IProjectCodeContent {
	id: string;
	url: string;
}

export const ProjectCodeContent: FC<IProjectCodeContent> = ({ id, url }) => {
	const breadcrumbs = [
		{
			title: "Проекты",
			link: "",
		},
		{
			title: "Название проекта",
			link: "",
		},
		{
			title: "Код",
			link: "",
		},
	];

	return (
		<section className={'project-code-content'}>
			<Breadcrumbs links={breadcrumbs}/>
			<ProjectPageTitle title={'Код'}/>
			<div className={'project-code-content__header'}>
				<div className={'project-code-content__type'}>
					<Icon icon={'gitflic-icon'} size={'28px'}/>
					<p className={'project-code-content__type-title'}>Gitflic</p>
				</div>
				<div className={'project-code-content__repository'}>
					<Icon icon={'folder_data'} size={'24px'} color={'var(--color-primary)'}/>
					<a className={'project-code-content__project-link'} href={url}>Репозиторий</a>
				</div>
				<ProjectCodeModalDelete id={id}/>
			</div>
			{/*<div className={'project-code-content__commits'}>*/}
			{/*	<h2>Коммиты</h2>*/}
			{/*	<div className={'project-code-content__commits-list'}>*/}
			{/*		*/}
			{/*	</div>*/}
			{/*</div>*/}
		</section>
	);
};