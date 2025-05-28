import { ConfirmCodePage } from '@pages/confirm-code/ui/ConfirmCodePage';
import { createFileRoute, redirect } from '@tanstack/react-router';

interface ISearchParams {
	code_token: string;
	email: string;
}

export const Route = createFileRoute('/auth/confirm-code')({
	component: Component,
	validateSearch: (search): ISearchParams => {
		return {
			code_token: String(search?.code_token) ?? '',
			email: String(search?.email) ?? '',
		};
	},
	beforeLoad: ({ search }) => {
		if (search.code_token.length === 0 || search.email.length === 0) {
			return redirect({ to: "/auth/login" });
		}
	},
});

function Component() {
	const { code_token, email } = Route.useSearch();

	return (
		<ConfirmCodePage codeToken={code_token} email={email}/>
	);
}