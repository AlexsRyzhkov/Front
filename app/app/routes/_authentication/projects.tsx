import { Projects } from "@pages/projects/Projects";
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentication/projects')({
	component: Projects,
});

