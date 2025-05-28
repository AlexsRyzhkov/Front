import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

import '@ui-kit/loader/ui/Loader.scss';

interface ILoaderProps {
	size: string;
	color: string;
}

export const Loader: FC<ILoaderProps> = ({ size, color }) => {
	return (
		<Icon icon={'progress_activity'} className={'loader'} size={size} color={color}/>
	);
};