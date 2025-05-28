import { createFileRoute } from '@tanstack/react-router';

import { ProjectCodePage } from "@pages/project-code/ui/ProjectCodePage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/code',
)({
	component: ProjectCodePage,
});
