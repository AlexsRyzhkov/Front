import { icons } from "@ui-kit/icon/icons/Icons";
import clsx from "clsx";
import { FC, CSSProperties } from "react";

import '@ui-kit/icon/Icon.scss';

interface IIconProps {
	icon: string;
	className?: string;
	size?: string;
	style?: CSSProperties;
	color?: string;
	fill?: boolean,
	onClick?: () => void;
}

export const Icon: FC<IIconProps> = ({ className, icon, size, style, color, fill = true, onClick }) => {
	if (icon.includes('-icon')) {
		const IconSvg = icons[icon];

		return (
			<IconSvg
				className={className}
				style={{
					height: size,
					width: size,
					padding: '3px',
				}}
				fill={color}
				onClick={onClick}
			/>
		);
	}

	return (
		<span
			className={clsx('material-symbols-rounded', 'icon', !fill && 'icon--fill-zero', className)}
			style={{ fontSize: size, ...style, color }}
			onClick={onClick}
		>
			{icon}
		</span>
	);
};