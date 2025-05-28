import { ICommit, ICommitList } from "@features/task/model/CommitModel";
import { $axios } from "@shared/http/http";

export class CommiteService {
	static group = '/v1/integration';

	static async getAllCommits(integrationID: string, branchName: string) {
		const { data } = await $axios.get<ICommitList>(`${CommiteService.group}/${integrationID}/commits`, {
			params: {
				branch: branchName,
			},
		});

		return data;
	}
}