import { z } from "zod";

export interface IColumn {
	id: string;
	name: string;
	can_complete_task: boolean;
}

export interface IProjectColumnForm {
	name: string;
}

export const ProjectColumnForm = z.object({
	name: z.string().nonempty("Не может быть пустым"),
});