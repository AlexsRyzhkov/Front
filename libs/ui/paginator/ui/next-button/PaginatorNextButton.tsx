import { FC } from "react";

import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";

import '@ui-kit/paginator/ui/next-button/PaginatorNextButton.scss';

interface IPaginatorNextButtonProps {
	onClick?: () => void;
}

export const PaginatorNextButton: FC<IPaginatorNextButtonProps> = ({ onClick }) => {
	return (
		<Button className={'paginator-next-btn'} variant={'no_background'} onClick={onClick
		}>
			<Icon icon={'arrow_forward_ios'}/>
		</Button>
	);
};