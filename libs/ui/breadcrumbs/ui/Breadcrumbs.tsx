import clsx from "clsx";
import { FC, Fragment } from "react";

import { Link } from "@ui-kit/link/Link";

import "@ui-kit/breadcrumbs/ui/Breadcrumbs.scss";

interface IBreadcrumbLink {
	title: string;
	link: string;
}

interface IBreadcrumbsProps {
	links: IBreadcrumbLink[];
}

export const Breadcrumbs: FC<IBreadcrumbsProps> = ({ links }) => {
	return (
		<div className={'breadcrumbs'}>
			{links.map((link, index) => (
				<Fragment key={index}>
					{index > 0 && (
						<span className={'breadcrumbs__divider'}>/</span>
					)}
					<Link className={clsx(
						'breadcrumbs__link',
						index === links.length - 1 && 'breadcrumbs__link--last',
					)} to={link.link as any}>{link.title}</Link>
				</Fragment>
			))}
		</div>
	);
};