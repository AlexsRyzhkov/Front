import { z } from "zod";

export interface ILoginForm {
	email: string;
	rememberMe: boolean;
}

export const LoginFormZodValidation = z.object({
	email: z.string()
		.refine(value => value.trim() !== "", { message: "Поле email не может быть пустым!" })
		.refine(value => z.string().email().safeParse(value).success, { message: "Значение не является почтой!" }),
	rememberMe: z.boolean(),
});