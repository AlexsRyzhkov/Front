import { z } from "zod";

export interface ICodeRepo {
	base_url: string,
	created_at: string;
	id: string;
	project_id: string;
	repository_url: string;
}


export interface IProjectCodeRepoForm {
	url: string;
	token: string;
}

export const ProjectCodeRepoForm = z.object({
	url: z.string().nonempty("Не может быть пустым"),
	token: z.string().nonempty("Не может быть пустым"),
});

export interface IBranch {
	id: string;
	is_dead: boolean;
	is_merged: boolean;
	is_work: boolean;
	name: string;
	created_at: string;
}

export interface IBranchList {
	items: IBranch[],
	limit: number,
	page: number;
}

export interface IComment {
	author_member_id: string;
	message: string;
}

export interface ITask {
	id: string;
	title: string;
	description: string;
	assignee_member_id?: string;
	column_id: string;
	board_id: string;
	branch_id?: string;
	is_complete: boolean;
	labels: string[];
	priority: string;
	created_at: string;
	order: number;
}


export interface TaskCreate {
	title: string,
	description: string,
	assignee_member_id?: string;
	column_id: string;
	board_id: string;
	branch_id: string;
	labels: string[];
	priority: number;
}

export interface TaskUpdate {
	id: string;
	title: string;
	description: string;
	assignee_member_id?: string;
	column_id: string;
	branch_id: string;
	is_complete: boolean;
	priority: number;
	labels: string[];
	order: number;
}