import { createFileRoute } from '@tanstack/react-router';

import { TeamsPage } from "@pages/teams/ui/TeamsPage";

export const Route = createFileRoute('/_authentication/teams/')({
	component: TeamsPage,
});