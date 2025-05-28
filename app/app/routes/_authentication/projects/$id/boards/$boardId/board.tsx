import { createFileRoute } from '@tanstack/react-router';

import { ProjectBoardPage } from "@pages/project-board/ui/ProjectBoardPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/board',
)({
	component: ProjectBoardPage,
});