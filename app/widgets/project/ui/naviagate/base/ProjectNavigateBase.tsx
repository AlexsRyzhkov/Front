import { useParams, useNavigate } from "@tanstack/react-router";
import { FC } from "react";

import { Divider } from "@ui-kit/divider/Divider";

import { ProjectNavigateBtn } from "@widget/project/ui/naviagate/btn/ProjectNavigateBtn";
import { ProjectNavigateDescription } from "@widget/project/ui/naviagate/description/ProjectNavigateDescription";
import { ProjectNavigateExpandList } from "@widget/project/ui/naviagate/expand-list/ProjectNavigateExpandList";

import '@widget/project/ui/naviagate/base/ProjectNavigateBase.scss';

interface IProjectNavigateBaseProps {
	projectId: string;
	boardId: string;
}

export const ProjectNavigateBase: FC<IProjectNavigateBaseProps> = ({
	projectId,
	boardId,
}) => {
	const params = useParams({
		from: "/_authentication/projects/$id/boards/$boardId",
	});

	const navigate = useNavigate();

	const onMemberClick = () => {
		navigate({ to: "/" });
	};

	return (
		<div className={'project-navigate-base'}>
			<ProjectNavigateDescription projectID={projectId}/>
			<ProjectNavigateExpandList
				title={"Планирование"}
				listLinks={[
					{
						title: "Сводка",
						link: `/projects/${projectId}/boards/${boardId}/report`,
						icon: "bar_chart_4_bars",
					},
					{
						title: "Доска",
						link: `/projects/${projectId}/boards/${boardId}/board`,
						icon: "calendar_view_week",
					},
					// {
					// 	title: "Список",
					// 	link: `/projects/${projectId}/boards/${boardId}/list-task`,
					// 	icon: "list-icon",
					// },
					// {
					// 	title: "Все задачи",
					// 	link: `/projects/${projectId}/boards/${boardId}/all-task`,
					// 	icon: "data_table",
					// },
					// {
					// 	title: "Календарь",
					// 	link: `/projects/${projectId}/boards/${boardId}/calendar`,
					// 	icon: "calendar_month",
					// },
				]}
			/>
			<ProjectNavigateExpandList
				title={"Разработка"}
				listLinks={[
					{
						title: "Код",
						link: `/projects/${projectId}/boards/${boardId}/git`,
						icon: "git-icon",
					},
				]}
			/>
			{/*<ProjectNavigateExpandList*/}
			{/*	title={"Уведомления"}*/}
			{/*	listLinks={[*/}
			{/*		{*/}
			{/*			title: "Telegram",*/}
			{/*			link: `/projects/${projectId}/boards/${boardId}/telegram`,*/}
			{/*			icon: "telegram-icon",*/}
			{/*		},*/}
			{/*	]}*/}
			{/*/>*/}
			<Divider/>
			<ProjectNavigateBtn icon={'diversity_3'} title={'Участники'} onClick={onMemberClick}/>
		</div>
	);
};