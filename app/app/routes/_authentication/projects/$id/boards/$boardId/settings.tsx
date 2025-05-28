import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_authentication/projects/$id/boards/$boardId/settings',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_authentication/projects/$id/boards/$boardId/settings"!</div>
  )
}
