import { useNavigate } from "@tanstack/react-router";
import { FC } from "react";

import { HeaderAppsBtn } from "@shared/ui/header/apps-btn/HeaderAppsBtn";
import { HeaderNavigation } from "@shared/ui/header/navigation/HeaderNavigation";
import { HeaderNotification } from "@shared/ui/header/notification/HeaderNotification";
import { HeaderProfile } from "@shared/ui/header/profile/HeaderProfile";
import { HeaderSearch } from "@shared/ui/header/search/HeaderSearch";
import { Logo } from "@shared/ui/logo/Logo";

import '@shared/ui/header/Header.scss';

export const Header: FC = () => {
	const navigate = useNavigate();

	const onClick = () => {
		navigate({ to: "/projects" });
	};

	return (
		<header className={'header'}>
			<div className={'header__apps-logo'}>
				{/*<HeaderAppsBtn/>*/}
				<Logo onClick={onClick}/>
			</div>
			<div className={'header__navigation'}>
				{/*<HeaderNavigation/>*/}
			</div>
			<div className={'header__profile-other'}>
				{/*<HeaderSearch/>*/}
				{/*<HeaderNotification/>*/}
				<HeaderProfile/>
			</div>
		</header>
	);
};