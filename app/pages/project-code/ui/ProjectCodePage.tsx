import { ICodeRepo } from "@features/project-code/model/ProjectCode";
import { useIntegrations } from "@features/project-code/query/useIntegration";
import { useParams } from "@tanstack/react-router";
import { FC } from "react";

import { ProjectCodeContent } from "@widget/project-code/ui/content/ProjectCodeContent";
import { ProjectCodeEmpty } from "@widget/project-code/ui/empty/ProjectCodeEmpty";

import '@pages/project-code/ui/ProjectCodePage.scss';


export const ProjectCodePage: FC = () => {
	const params = useParams({
		from: '/_authentication/projects/$id/boards/$boardId/git',
	});

	const { data, error } = useIntegrations({
		projectId: params.id,
	});

	const hasRepository = !error;

	const displayData = data || {} as ICodeRepo;

	return (
		<div className={'project-code-page'}>
			{!hasRepository ? (
				<ProjectCodeEmpty/>
			) : (
				<ProjectCodeContent
					url={displayData.repository_url}
					id={displayData.id}
				/>
			)}
		</div>
	);
};