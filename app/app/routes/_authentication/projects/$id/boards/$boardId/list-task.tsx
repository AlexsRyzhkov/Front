import { createFileRoute } from '@tanstack/react-router';

import { ProjectListTaskPage } from "@pages/project-list-task/ui/ProjectListTaskPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/list-task',
)({
	component: ProjectListTaskPage,
});
