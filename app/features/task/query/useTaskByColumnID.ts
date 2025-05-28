import { TaskService } from "@features/task/service/TaskService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTaskByColumnID = (columnID: string) => {
	return useQuery({
		queryKey: ['tasks', columnID],
		queryFn: () => TaskService.getByColumnID(columnID),
		retry: false,
	});
};

export const UseRefreshTasks = () => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({ queryKey: ['tasks'] });
	};
};