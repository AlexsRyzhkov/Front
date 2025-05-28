import { createFileRoute } from '@tanstack/react-router';

import { TeamPage } from "@pages/team/ui/TeamPage";

export const Route = createFileRoute('/_authentication/teams/$id/')({
	component: TeamPage,
});