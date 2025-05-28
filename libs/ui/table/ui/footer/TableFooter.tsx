import clsx from "clsx";
import { FC } from "react";

import { Paginator } from "@ui-kit/paginator";
import { useTableContext } from "@ui-kit/table/ui/context/TableContext";

import '@ui-kit/table/ui/footer/TableFooter.scss';

interface ITableFooterProps {}

export const TableFooter: FC<ITableFooterProps> = ({}) => {
	const { paginator, page, totalPages, setPage } = useTableContext();

	return (
		<tfoot className={'table-foot'}>
		{paginator && (
			<tr className={clsx('table-foot__row')}>
				<td className={clsx('table-foot__cell')}>
					<div className={'table-foot__paginator'}>
						<Paginator
							currentPage={page}
							totalPages={totalPages}
							onPageChange={setPage}
						/>
					</div>
				</td>
			</tr>
		)}
		</tfoot>
	);
};