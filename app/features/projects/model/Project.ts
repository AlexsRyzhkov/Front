import { z } from "zod";

export interface IProject {
	id: string;
	name: string;
	type: string;
	project_url: string;
	board_id: string;
}

export interface IProjects {
	data: IProject[];
	page: number;
	per_page: number;
	total: number;
}

export interface IProjectForm {
	name: string;
	board_name: string;
	url: string;
}

export const ProjectForm = z.object({
	name: z.string().nonempty("Не может быть пустым"),
	board_name: z.string().nonempty("Не может быть пустым"),
	url: z.string(),
});