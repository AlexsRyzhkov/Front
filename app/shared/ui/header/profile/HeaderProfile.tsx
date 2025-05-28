import { useNavigate } from "@tanstack/react-router";
import { useRef } from "react";

import { Button } from "@ui-kit/button/Button";
import { Divider } from "@ui-kit/divider/Divider";
import { Dropdown } from "@ui-kit/dropdown";
import { Icon } from "@ui-kit/icon/icon";

import "@shared/ui/header/profile/HeaderProfile.scss";

export const HeaderProfile = () => {
	const btnRef = useRef<HTMLButtonElement>(null);

	const navigate = useNavigate();

	const onProfileClick = () => {
		navigate({ to: "/profile" });
	};

	const onLogoutClick = () => {
		localStorage.removeItem('access_token');
		navigate({ to: '/auth/login' });
	};

	return (
		<div className={'header-profile'}>
			<Button ref={btnRef} className={'header-profile__btn'} variant={'no_background'}>
				AC
			</Button>
			<Dropdown ref={btnRef} className={'header-profile__dropdown'}>
				<div className={'header-profile__dropdown-profile'}>
					<div className={'header-profile__dropdown-profile-icon'}>AС</div>
					<div className={'header-profile__dropdown-profile-content'}>
						<div className={'header-profile__dropdown-fio'}>Alexsander Ryzhkov</div>
						<div className={'header-profile__dropdown-email'}>alexsandr.ryzhkov04@gmail.com</div>
					</div>
				</div>
				<Button
					className={'header-profile__dropdown-btn'}
					variant={'no_background'}
					onClick={onProfileClick}
				>
					<Icon icon={'person'}/>
					<span>Профиль</span>
				</Button>
				<Divider/>
				<Button
					className={'header-profile__dropdown-btn'}
					variant={'no_background'}
					onClick={onLogoutClick}
				>
					<Icon icon={'logout'}/>
					<span>Выйти</span>
				</Button>
			</Dropdown>
		</div>
	);
};