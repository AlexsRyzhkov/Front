import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";
import { FC } from "react";

import '@ui-kit/paginator/ui/back-button/PaginatorBackButton.scss';

export const PaginatorBackButton: FC = () => {
	return (
		<Button className={'paginator-back-btn'} variant={'no_background'}>
			<Icon icon={'arrow_back_ios'}/>
		</Button>
	);
};