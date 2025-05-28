import { CodeService } from "@features/project-code/service/CodeService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface IUseBranches {
	projectId: string;
}

export const useBranches = (params: IUseBranches) => {
	return useQuery({
		queryKey: ['branches'],
		queryFn: () => CodeService.getBranches(params.projectId),
		retry: false,
	});
};

export const useRefreshBranches = () => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({ queryKey: ['branches'] });
	};
};