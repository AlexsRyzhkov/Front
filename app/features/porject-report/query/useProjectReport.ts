import { useQuery } from "@tanstack/react-query";

import { ProjectReportService } from "@features/porject-report/service/ProjectReportService";

interface IUseProjectReport {
	project_id: string;
	board_id: string;
}

export const useProjectReport = (params: IUseProjectReport) => {
	return useQuery({
		queryKey: ['project-report', params.project_id, params.board_id],
		queryFn: () => ProjectReportService.get(params.project_id, params.board_id),
	});
};