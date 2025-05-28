import { Button } from "@ui-kit/button/Button";
import { Dropdown } from "@ui-kit/dropdown";
import { Icon } from "@ui-kit/icon/icon";
import { useRef } from "react";

import '@shared/ui/header/notification/HeaderNotification.scss';

export const HeaderNotification = () => {
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<div className={'header-notification'}>
			<Button
				ref={btnRef}
				variant={'no_background'}
				size={'small'}
			>
				<Icon icon={'notifications'} className={'header-notification__icon'}/>
			</Button>
			<Dropdown ref={btnRef}>

			</Dropdown>
		</div>
	);
};