import { ProjectCodeConnectCard } from "@features/project-code/ui/connect/card/ProjectCodeConnectCard";
import { ProjectCodeModalCreate } from "@features/project-code/ui/modal/create/ProjectCodeModalCreate";
import { FC, Fragment, useState } from "react";

export const ProjectCodeConnectGitflic: FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Fragment>
			<ProjectCodeConnectCard
				icon={'gitflic-icon'}
				title={'Gitflic'}
				onClick={() => setIsOpen(true)}
			/>
			<ProjectCodeModalCreate
				open={isOpen}
				onClose={() => setIsOpen(false)}
			/>
		</Fragment>
	);
};