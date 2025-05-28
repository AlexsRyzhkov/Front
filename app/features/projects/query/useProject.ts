import { useQuery } from "@tanstack/react-query";

import { ProjectService } from "@features/projects/service/projects";

export const useProject = (id: string) => {
	return useQuery({
		queryKey: ['project', id],
		queryFn: () => ProjectService.getOne(id),
	});
};