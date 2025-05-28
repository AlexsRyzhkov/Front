import { ProjectService } from "@features/projects/service/projects";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface IUseMyProject {
	page: number;
	perPage: number;
}

export const useMyProjects = ({
	page = 1,
	perPage = 10,
}: IUseMyProject) => {
	return useQuery({
		queryKey: ['my-projects', page, perPage],
		queryFn: () => ProjectService.getMyProjects({ page, perPage }),
	});
};


export const useRefreshMyProject = () => {
	const qClient = useQueryClient();

	return () => {
		qClient.refetchQueries({ queryKey: ['my-projects'] });
	};
};