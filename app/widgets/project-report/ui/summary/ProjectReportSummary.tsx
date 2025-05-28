import { FC } from 'react';

import { Icon } from "@ui-kit/icon/icon";

import '@widget/project-report/ui/summary/ProjectReportSummary.scss';

interface IProjectReportSummaryProps {
	title: string,
	icon: string,
	count: number,
}

export const ProjectReportSummary: FC<IProjectReportSummaryProps> = ({
	title,
	icon,
	count,
}) => {
	return (
		<div className={'project-report-summary'}>
			<div className={'project-report-summary__icon'}>
				<Icon icon={icon} size={'32px'} color={'rgba(68,84,111,0.8)'}/>
			</div>
			<div className={'project-report-summary__content'}>
				<p className={'project-report-summary__content-title'}>{title}: {count}</p>
				<span className={'project-report-summary__content-helper'}>За последние 7 дней</span>
			</div>
		</div>
	);
};