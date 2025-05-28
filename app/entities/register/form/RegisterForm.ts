import { z } from "zod";

export interface IRegisterForm {
	email: string;
	username: string;
	rememberMe: boolean;
}

export const RegisterFormZodValidator = z.object({
	username: z.string().nonempty("Имя пользователя не может быть пустым!"),
	email: z.string()
		.refine(value => value.trim() !== "", { message: "Email не может быть пустым!" })
		.refine(value => z.string().email().safeParse(value).success, { message: "Значение не является почтой!" }),
	rememberMe: z.boolean(),
});