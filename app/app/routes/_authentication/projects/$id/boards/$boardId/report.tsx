import { createFileRoute } from '@tanstack/react-router';

import { ProjectReportPage } from "@pages/project-report/ui/ProjectReportPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/report',
)({
	component: ProjectReportPage,
});