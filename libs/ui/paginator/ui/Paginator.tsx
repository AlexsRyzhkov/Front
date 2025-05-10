import clsx from "clsx";
import { FC } from "react";

import { PaginatorBackButton } from "@ui-kit/paginator/ui/back-button/PaginatorBackButton";
import { PaginatorEllipsis } from "@ui-kit/paginator/ui/ellipsis/PaginatorEllipsis";
import { PaginatorNextButton } from "@ui-kit/paginator/ui/next-button/PaginatorNextButton";
import { PaginatorPageButton } from "@ui-kit/paginator/ui/page-button/PaginatorPageButton";

import { LayoutGroup, motion } from 'motion/react';

import '@ui-kit/paginator/ui/Paginator.scss';

interface IPaginatorProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
}

export const Paginator: FC<IPaginatorProps> = ({
	currentPage,
	totalPages,
	onPageChange,
}) => {

	const renderPageNumber = () => {
		const pages = [];

		pages.push(
			<PaginatorPageButton
				key={1}
				page={1}
				currentPage={currentPage}
				onPageChange={onPageChange}
			/>,
		);

		if (currentPage == 4) {
			pages.push(
				<PaginatorPageButton
					key={2}
					page={2}
					currentPage={currentPage}
					onPageChange={onPageChange}
				/>,
			);
		}

		if (currentPage > 4) {
			pages.push(<PaginatorEllipsis key={-1}/>);
		}

		for (let i = Math.max(2, Math.min(currentPage - 1, totalPages - 4)); i <= Math.min(totalPages - 1, Math.max(currentPage + 1, 5)); i++) {
			pages.push(<PaginatorPageButton key={i} page={i} currentPage={currentPage} onPageChange={onPageChange}/>);
		}


		if (currentPage < totalPages - 3) {
			pages.push(<PaginatorEllipsis key={-2}/>);
		}

		if (currentPage === totalPages - 3) {
			pages.push(
				<PaginatorPageButton
					key={totalPages - 1}
					page={totalPages - 1}
					currentPage={currentPage}
					onPageChange={onPageChange}/>,
			);
		}


		if (totalPages > 1) {
			pages.push(
				<PaginatorPageButton
					key={totalPages}
					page={totalPages}
					currentPage={currentPage}
					onPageChange={onPageChange}
				/>,
			);
		}

		return pages;
	};

	return (
		<motion.div className={clsx('paginator')}>
			<PaginatorBackButton/>
			<LayoutGroup>
				{renderPageNumber()}
			</LayoutGroup>
			<PaginatorNextButton/>
		</motion.div>
	);
};