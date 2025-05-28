import { FC } from "react";

import { ProjectCodeConnectGitflic } from "@features/project-code/ui/connect/gitflic/ProjectCodeConnectGitflic";

import '@widget/project-code/ui/empty/ProjectCodeEmpty.scss';

export const ProjectCodeEmpty: FC = () => {
	return (
		<div className={'project-code-empty'}>
			<h1 className={'project-code-empty__title'}>Подключить репозиторий</h1>
			<div className={'project-code-empty__btn'}>
				<ProjectCodeConnectGitflic/>
				{/*<ProjectCodeConnectGitlab/>*/}
			</div>
		</div>
	);
};