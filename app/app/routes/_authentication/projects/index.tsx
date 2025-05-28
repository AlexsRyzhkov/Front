import { ProjectsPage } from "@pages/projects/ui/ProjectsPage";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentication/projects/')({
	component: ProjectsPage,
});

