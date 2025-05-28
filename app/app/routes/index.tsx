import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: () => <></>,
	beforeLoad: () => {
		return redirect({
			to: '/projects',
		});
	},
});
