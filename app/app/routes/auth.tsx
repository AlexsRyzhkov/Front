import { Outlet, createFileRoute, redirect } from '@tanstack/react-router';

import { AuthLayout } from "@shared/ui/auth-layout/AuthLayout";

export const Route = createFileRoute('/auth')({
	component: RouteComponent,
	beforeLoad: async ({ location }) => {
		if (location.pathname === '/auth') {
			return redirect({
				to: "/auth/login",
			});
		}

		if (localStorage.getItem('access_token')) {
			return redirect({
				to: "/projects",
			});
		}
	},
});

function RouteComponent() {


	return (
		<AuthLayout>
			<Outlet/>
		</AuthLayout>
	);
}
