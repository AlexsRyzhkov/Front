import { createFileRoute } from '@tanstack/react-router';

import { ProjectTelegramPage } from "@pages/project-telegram/ui/ProjectTelegramPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/telegram',
)({
	component: ProjectTelegramPage,
});
