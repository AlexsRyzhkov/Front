import { ConfirmCode } from '@pages/confirm-code/ui/ConfirmCode';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/auth/confirm-code')({
	component: ConfirmCode,
});