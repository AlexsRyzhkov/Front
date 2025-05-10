import { Button } from "@ui-kit/button/Button";
import { Icon } from "@ui-kit/icon/icon";

import '@ui-kit/paginator/ui/next-button/PaginatorNextButton.scss';

export const PaginatorNextButton = () => {
	return (
		<Button className={'paginator-next-btn'} variant={'no_background'}>
			<Icon icon={'arrow_forward_ios'}/>
		</Button>
	);
};