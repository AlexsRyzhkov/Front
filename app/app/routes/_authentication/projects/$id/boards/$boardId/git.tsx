import { ProjectCodePage } from "@pages/project-code/ui/ProjectCodePage";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentication/projects/$id/boards/$boardId/git')({
	component: ProjectCodePage,
});

