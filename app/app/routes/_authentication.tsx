import { Header } from "@shared/ui/header/Header";
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authentication')({
	component: RouteComponent,
	beforeLoad: () => {
		if (!localStorage.getItem('access_token')) {
			return redirect({
				to: '/auth/login',
			});
		}
	},
});

function RouteComponent() {
	return (
		<main className={'main'}>
			<Header/>
			<Outlet/>
		</main>
	);
}
