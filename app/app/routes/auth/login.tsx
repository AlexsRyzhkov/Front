import { createFileRoute } from '@tanstack/react-router';

import { LoginPage } from "@pages/login/ui/LoginPage";

export const Route = createFileRoute('/auth/login')({
	component: LoginPage,
});