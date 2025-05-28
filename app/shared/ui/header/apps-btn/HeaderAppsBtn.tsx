import { Button } from "@ui-kit/button/Button";
import { Dropdown } from "@ui-kit/dropdown";
import { useRef, FC } from "react";

import AppsBtnIcon from '@shared/ui/header/apps-btn/assert/AppsBtnIcon.svg?react';
import '@shared/ui/header/apps-btn/HeaderAppsBtn.scss';

export const HeaderAppsBtn: FC = () => {
	const btnRef = useRef<HTMLButtonElement>(null);

	return (
		<section className={'header-apps-btn'}>
			<Button ref={btnRef} className={'header-apps-btn__btn'} variant={'no_background'}>
				<AppsBtnIcon className={'header-apps-btn__icon'}/>
			</Button>
			<Dropdown ref={btnRef}>
				<div className={'header-apps-btn__apps'}>
					Apps for sell
				</div>
			</Dropdown>
		</section>
	);
};