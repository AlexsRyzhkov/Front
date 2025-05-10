import { Icon } from "@ui-kit/icon/icon";
import clsx from "clsx";
import { FC } from "react";

import { ILogoProps } from "@shared/ui/logo/Logo.types";

import '@shared/ui/logo/Logo.scss';

export const Logo: FC<ILogoProps> = ({ className, variant = 'default' }) => {
	return (
		<div
			className={clsx(
				'logo',
				variant == 'auth' && 'logo-auth',
				variant == 'default' && 'logo-default',
				className,
			)}
		>
			<Icon className={'logo__icon'} icon={'network_intel_node'}/>
			<span className={'logo__title'}>Foxtask</span>
		</div>
	);
};