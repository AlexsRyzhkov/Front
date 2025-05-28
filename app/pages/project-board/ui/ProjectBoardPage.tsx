import { Breadcrumbs } from "@ui-kit/breadcrumbs/ui/Breadcrumbs";
import { Icon } from "@ui-kit/icon/icon";
import { Input } from "@ui-kit/input";
import { ProjectBoard } from "@widget/project-board/ui/ProjectBoard";
import { ProjectPageTitle } from "@shared/ui/page-title/ProjectPageTitle";

import '@pages/project-board/ui/ProjectBoardPage.scss';

export const ProjectBoardPage = () => {
	const breadcrumbs = [
		{
			title: 'Проекты',
			link: '',
		},
		{
			title: 'название проекта',
			link: '',
		},
		{
			title: 'Название доски',
			link: '',
		},
	];

	return (
		<section className={'project-board-page'}>
			<Breadcrumbs links={breadcrumbs}/>
			<ProjectPageTitle title={'Доска'}/>
			{/*<Input*/}
			{/*	leftIcon={() => (*/}
			{/*		<Icon icon={'search'}/>*/}
			{/*	)}*/}
			{/*	pt={{*/}
			{/*		container: 'project-board-page__search',*/}
			{/*	}}*/}
			{/*	placeholder={'Поиск'}*/}
			{/*/>*/}
			<ProjectBoard/>
		</section>
	);
};