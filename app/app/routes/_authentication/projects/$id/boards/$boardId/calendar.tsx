import { createFileRoute } from '@tanstack/react-router';

import { ProjectCalendarPage } from "@pages/project-calendar/ui/ProjectCalendarPage";

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/calendar',
)({
	component: ProjectCalendarPage,
});