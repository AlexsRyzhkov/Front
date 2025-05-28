import { useProjectReport } from "@features/porject-report/query/useProjectReport";
import { useParams } from "@tanstack/react-router";
import { Breadcrumbs } from "@ui-kit/breadcrumbs/ui/Breadcrumbs";

import "@pages/project-report/ui/ProjectReportPage.scss";
import { ProjectReportSummary } from "@widget/project-report/ui/summary/ProjectReportSummary";
import { ProjectPageTitle } from "@shared/ui/page-title/ProjectPageTitle";

export const ProjectReportPage = () => {
	const { id, boardId } = useParams({
		from: "/_authentication/projects/$id/boards/$boardId/report",
		select: param => param,
	});

	const breadcrumbs = [
		{
			title: "Проекты",
			link: "/projects",
		},
		{
			title: "Название проекта",
			link: "",
		},
	];

	const { data } = useProjectReport({
		project_id: id,
		board_id: boardId,
	});

	const displayData = data ?? {
		completed_count: 0,
		updated_count: 0,
		created_count: 0,
	};

	return (
		<section className={'project-report-page'}>
			<Breadcrumbs links={breadcrumbs}/>
			<ProjectPageTitle title={"Сводка"}/>
			<div className={'project-report-page__summary'}>
				<ProjectReportSummary title={'Выполнено'} icon={'check_circle'} count={displayData.completed_count}/>
				<ProjectReportSummary title={'Обновлено'} icon={'edit'} count={displayData.updated_count}/>
				<ProjectReportSummary title={'Создано'} icon={'library_add'} count={displayData.created_count}/>
			</div>
		</section>
	);
};