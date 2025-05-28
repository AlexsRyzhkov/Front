import { ColumnService } from "@features/project-board/service/ColumnService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useColumn = (params: { projectId: string, boardId: string }) => {
	return useQuery({
		queryKey: ['columns', params.projectId, params.boardId],
		queryFn: () => ColumnService.getAll({
			projectId: params.projectId,
			boardId: params.boardId,
		}),
	});
};

export const useRefreshColumn = () => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({
			queryKey: ['columns'],
		});
	};
};