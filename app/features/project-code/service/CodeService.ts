import { ICodeRepo, IBranchList, TaskCreate } from "@features/project-code/model/ProjectCode";
import { $axios } from "@shared/http/http";

export class CodeService {
	static group = '/v1/integration';

	static async get(projectID: string) {
		const { data } = await $axios.get<ICodeRepo>(`${CodeService.group}/project/${projectID}`);

		return data;
	}

	static async create(params: {
		projectID: string;
		repositoryUrl: string;
		AccessToken: string;
	}) {
		const { data } = await $axios.post(`${CodeService.group}/gitflic`, {
			project_id: params.projectID,
			repository_url: params.repositoryUrl,
			access_token: params.AccessToken,
			is_self_hosted: false,
		});

		return data;
	}

	static async update(params: {}) {
		const { data } = await $axios.put(`${CodeService.group}`, {});

		return data;
	}

	static async delete(id: string) {
		const { data } = await $axios.delete(`${CodeService.group}/${id}`);

		return data;
	}

	static async getBranches(projectID: string) {
		const { data } = await $axios.get<IBranchList>(`${CodeService.group}/project/${projectID}/branches`, {
			params: {
				refresh: true,
			},
		});

		return data;
	}
}