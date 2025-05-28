import { createFileRoute } from '@tanstack/react-router';

import { ProjectAllTaskPage } from "@pages/project-all-task/ui/ProjectAllTaskPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/all-task',
)({
	component: ProjectAllTaskPage,
});
