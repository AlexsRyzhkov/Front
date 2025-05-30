import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
	component: RootLayout,
});

function RootLayout() {
	return (
		<div style={{ background: '#FAFBFC' }}>
			<Outlet/>
			<ReactQueryDevtools/>
			<TanStackRouterDevtools/>
		</div>
	);
}