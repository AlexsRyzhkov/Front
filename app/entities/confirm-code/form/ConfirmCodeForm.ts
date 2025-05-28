import { z } from "zod";

export interface IConfirmCodeForm {
	code: string;
}

export const ConfirmCodeFormZodValidator = z.object({
	code: z.string().nonempty("Поле не маожет быть пустым!").length(6, { message: "Код должен быть длинной 6 символов" }),
});