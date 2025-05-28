import { CommiteService } from "@features/task/service/CommiteService";
import { useQuery, useQueryClient } from "@tanstack/react-query";


export const useCommitByBranchID = (integrationID: string, branchName: string) => {
	return useQuery({
		queryKey: ['commit', integrationID, branchName],
		queryFn: () => CommiteService.getAllCommits(integrationID, branchName),
		refetchInterval: 30000,
	});
};

export const useRefetchCommitByBranchID = (branchID: string) => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({ queryKey: ['commit', branchID] });
	};
};