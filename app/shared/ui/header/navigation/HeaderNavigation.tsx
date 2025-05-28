import { useLocation } from "@tanstack/react-router";
import { motion } from "motion/react";

import { Link } from "@ui-kit/link/Link";

import '@shared/ui/header/navigation/HeaderNavigation.scss';

export const HeaderNavigation = () => {
	const menu = [
		{
			name: 'Проекты',
			link: '/projects',
		},
		{
			name: 'Задачи',
			link: '',
		},
		{
			name: 'Команды',
			link: '',
		},
		{
			name: 'Приложения',
			link: '',
		},
	];

	const location = useLocation();

	return (
		<motion.section className={'header-navigation'}>
			{menu.map((item, index) => (
				<div className={'header-navigation__btn'} key={index}>
					<Link className={'header-navigation__link'}>
						{item.name}
					</Link>
					{item.link === location.pathname && (<motion.div className={'header-navigation__underline'}/>)}
				</div>
			))}
		</motion.section>
	);
};