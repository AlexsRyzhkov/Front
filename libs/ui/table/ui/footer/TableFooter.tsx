import clsx from "clsx";
import { FC } from "react";

import { Paginator } from "@ui-kit/paginator";
import { useTableContext } from "@ui-kit/table/ui/context/TableContext";

import '@ui-kit/table/ui/footer/TableFooter.scss';

interface ITableFooterProps {
	onChangePage?: (page: number) => void;
}

export const TableFooter: FC<ITableFooterProps> = ({}) => {
	const { paginator, setPage } = useTableContext();

	console.log(paginator.totalPage);

	return (
		<tfoot className={'table-foot'}>
		{paginator && (
			<tr className={clsx('table-foot__row')}>
				<td className={clsx('table-foot__cell')}>
					<div className={'table-foot__paginator'}>
						<Paginator
							currentPage={paginator?.page}
							totalPages={paginator?.totalPage}
							onPageChange={setPage}
						/>
					</div>
				</td>
			</tr>
		)}
		</tfoot>
	);
};