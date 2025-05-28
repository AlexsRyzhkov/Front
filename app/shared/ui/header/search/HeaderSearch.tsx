import { Icon } from "@ui-kit/icon/icon";
import { Input } from "@ui-kit/input";

import '@shared/ui/header/search/HeaderSearch.scss';

export const HeaderSearch = () => {
	const leftIcon = () => (
		<Icon className={'header-search__icon'} icon={'search'}/>
	);

	return (
		<Input
			leftIcon={leftIcon}
			pt={{
				container: "header-search",
				inputContainer: "header-search__input-container",
			}}
			placeholder={'Введите ваш запрос... '}
		/>
	);
};