import { FC } from 'react';

import '@shared/ui/project-default-logo/ProjectDefaultLogo.scss';

interface IProjectLogo {
	size?: string;
}

export const ProjectDefaultLogo: FC<IProjectLogo> = ({ size = '40px' }) => {
	return (
		<div style={{ height: size, width: size }} className={'project-default'}>
			<img src={'/project-logo.svg'} alt={''} className={'project-default__logo'}/>
		</div>
	);
};