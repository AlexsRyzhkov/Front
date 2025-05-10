import { RegisterPage } from '@pages/register/ui/RegisterPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/register')({
	component: RegisterPage,
});
