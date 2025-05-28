import { FC } from "react";

import { Button } from "@ui-kit/button/Button";
import { motion } from "motion/react";

import '@ui-kit/paginator/ui/page-button/PaginatorPageButton.scss';

interface IPaginatorPageButtonProps {
	page: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

export const PaginatorPageButton: FC<IPaginatorPageButtonProps> = ({
	page,
	currentPage,
	onPageChange,
}) => {
	const PageButton = () => (
		<Button className={'paginator-page-btn__btn'} onClick={() => onPageChange(page)}>
			{page}
		</Button>
	);

	return (
		<motion.div className={'paginator-page-btn'} initial={false}>
			<PageButton/>
			{page == currentPage ? (
				<motion.div
					id={'paginator-btn__background'}
					className={'paginator-page-btn__background'}
				/>
			) : null}
		</motion.div>
	);

};