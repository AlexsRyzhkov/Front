import { Button } from "@ui-kit/button/Button";
import { ExpandPanel } from "@ui-kit/expand-panel/ui/ExpandPanel";
import {
	ProjectNavigateExpandListLink,
} from "@widget/project/ui/naviagate/expand-list/link/ProjectNavigateExpandListLink";
import clsx from "clsx";
import { FC, useState } from "react";
import { Icon } from '@ui-kit/icon/icon';

import '@widget/project/ui/naviagate/expand-list/ProjectNavigateExpandList.scss';

interface IListLink {
	title: string;
	link: string;
	icon: string;
}

interface IProjectNavigateExpandListProps {
	title: string;

	listLinks?: IListLink[];
}

export const ProjectNavigateExpandList: FC<IProjectNavigateExpandListProps> = ({
	title,
	listLinks,
}) => {
	const [expand, setExpand] = useState(true);

	const onExpand = () => {
		setExpand(prev => !prev);
	};

	return (
		<div className={'project-navigate-expand-list'}>
			<Button className={'project-navigate-expand-list__btn'} onClick={onExpand}>
				<Icon
					icon={'arrow_back_ios'}
					size={'16px'}
					className={clsx(
						'project-navigate-expand-list__btn-icon',
						!expand && 'project-navigate-expand-list__btn-icon--close',
					)}
					color={'var(--color-primary-darkne)'}
				/>
				{title}
			</Button>
			<ExpandPanel expand={expand}>
				<div className={'project-navigate-expand-list__content'}>
					{listLinks?.map((props, index) => (
						<ProjectNavigateExpandListLink {...props} key={index}/>
					))}
				</div>
			</ExpandPanel>
		</div>
	);
};