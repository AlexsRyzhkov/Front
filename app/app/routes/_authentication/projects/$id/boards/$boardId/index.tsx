import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute(
	'/_authentication/projects/$id/boards/$boardId/',
)({
	beforeLoad: ({ params }) => {
		// @ts-ignore
		return redirect({ to: `/projects/${params.id}/boards/${params.boardId}/report` });
	},
});
