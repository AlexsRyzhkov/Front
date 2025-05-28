import { CodeService } from "@features/project-code/service/CodeService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface IUseIntegration {
	projectId: string;
}

export const useIntegrations = (params: IUseIntegration) => {
	return useQuery({
		queryKey: ['integration'],
		queryFn: () => CodeService.get(params.projectId),
		retry: false,
	});
};

export const useRefreshIntegration = () => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({ queryKey: ['integration'] });
	};
};