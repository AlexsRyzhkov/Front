import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

import '@ui-kit/paginator/ui/back-button/PaginatorBackButton.scss';

interface IPaginatorBackButtonProps {
	onClick?: () => void;
}

export const PaginatorBackButton: FC<IPaginatorBackButtonProps> = ({ onClick }) => {
	return (
		<Button className={'paginator-back-btn'} variant={'no_background'} onClick={onClick}>
			<Icon icon={'arrow_back_ios'}/>
		</Button>
	);
};