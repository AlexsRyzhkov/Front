import { ProjectNavigateBtn } from "@widget/project/ui/naviagate/btn/ProjectNavigateBtn";
import { FC } from "react";

import { ProjectNavigateDescription } from "@widget/project/ui/naviagate/description/ProjectNavigateDescription";
import { ProjectNavigateExpandList } from "@widget/project/ui/naviagate/expand-list/ProjectNavigateExpandList";

import { Divider } from "@ui-kit/divider/Divider";

import '@widget/project/ui/naviagate/ProjectNavigate.scss';


interface IProjectNavigateProps {
	projectId: string;
	boardId: string;
}

export const ProjectNavigate: FC<IProjectNavigateProps> = ({
	projectId,
	boardId,
}) => {

	return (
		<div className={'project-navigate'}>
			<ProjectNavigateDescription/>
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
					{
						title: "Список",
						link: `/projects/${projectId}/boards/${boardId}/list-task`,
						icon: "list-icon",
					},
					{
						title: "Все задачи",
						link: `/projects/${projectId}/boards/${boardId}/all-task`,
						icon: "data_table",
					},
					{
						title: "Календарь",
						link: `/projects/${projectId}/boards/${boardId}/calendar`,
						icon: "calendar_month",
					},
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
			<ProjectNavigateExpandList
				title={"Уведомления"}
				listLinks={[
					{
						title: "Telegram",
						link: `/projects/${projectId}/boards/${boardId}/telegram`,
						icon: "telegram-icon",
					},
				]}
			/>
			<Divider/>
			<ProjectNavigateBtn icon={'settings'} title={'Настройки'}/>
		</div>
	);
};