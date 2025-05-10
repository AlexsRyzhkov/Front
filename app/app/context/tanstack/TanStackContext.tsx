import { FC } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { routeTree } from '@app/routes/gen/routeTree.gen';

const queryClient = new QueryClient();

const router = createRouter({
	routeTree: routeTree,
	context: {
		queryClient,
	},
	defaultPreload: "intent",
	defaultPreloadStaleTime: 0,
	scrollRestoration: true,
});

// Register things for typesafety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

export const TanStackContext: FC = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}/>
		</QueryClientProvider>
	);
};