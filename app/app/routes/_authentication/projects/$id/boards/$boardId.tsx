import { createFileRoute, Outlet, useParams } from '@tanstack/react-router';
import { ProjectLayout } from "@widget/project/ui/layout/ProjectLayout";

export const Route = createFileRoute('/_authentication/projects/$id/boards/$boardId')({
	component: RouteComponent,
});

function RouteComponent() {
	const { id, boardId } = Route.useParams();

	return (
		<ProjectLayout projectId={id} boardId={boardId}>
			<Outlet/>
		</ProjectLayout>
	);
}
