import clsx from "clsx";
import { FC, CSSProperties } from "react";

import '@ui-kit/icon/Icon.scss';

interface IIconProps {
	icon: string;
	className?: string;
	size?: string;
	style?: CSSProperties;
}

export const Icon: FC<IIconProps> = ({ className, icon, size, style }) => {
	return (
		<span className={clsx('material-symbols-rounded', 'icon', className)} style={{ fontSize: size, ...style }}>
			{icon}
		</span>
	);
};