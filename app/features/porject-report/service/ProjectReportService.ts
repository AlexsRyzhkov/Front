import { IProjectReport } from "@features/porject-report/model/ProjectReport";
import { $axios } from "@shared/http/http";

export class ProjectReportService {
	static group = "/v1/report";

	static async get(projectId: string, boardID: string) {
		const { data } = await $axios.post<IProjectReport>(`${ProjectReportService.group}`, {
			project_id: projectId,
			board_id: boardID,
		});

		return data;
	}

}