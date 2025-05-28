import { IProjects, IProject, IProjectForm } from "@features/projects/model/Project";

import { $axios } from "@shared/http/http";

export class ProjectService {
	static group = '/v1/projects';

	static async getMyProjects({
		page = 1,
		perPage = 10,
	}: { page: number, perPage: number }) {
		const { data } = await $axios.get<IProjects>(`${ProjectService.group}/my`, {
			params: {
				page,
				per_page: perPage,
			},
		});

		return data;
	}

	static async create(params: IProjectForm) {
		const { data } = await $axios.post<IProject>(`${ProjectService.group}`, {
			...params,
		});

		return data;
	}

	static async update(params: { id: string, name: string, url: string }) {
		const { data } = await $axios.put<IProject>(`${ProjectService.group}/${params.id}`, {
			name: params.name,
			url: params.url,
		});

		return data;
	}

	static async delete(params: { id: string }) {
		const { data } = await $axios.delete(`${ProjectService.group}/${params.id}`);

		return data;
	}

	static async getOne(id: string) {
		const { data } = await $axios.get<IProject>(`${ProjectService.group}/${id}`);
		return data;
	}
}
