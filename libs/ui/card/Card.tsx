import { FC, PropsWithChildren, HTMLAttributes } from "react";
import clsx from "clsx";

import '@ui-kit/card/Card.scss';

export type TCardProps = HTMLAttributes<HTMLDivElement> & {}

export const Card: FC<PropsWithChildren & TCardProps> = ({ children, className, ...divProps }) => {
	return (
		<div className={clsx('fox-card', className)} {...divProps}>
			{children}
		</div>
	);
};