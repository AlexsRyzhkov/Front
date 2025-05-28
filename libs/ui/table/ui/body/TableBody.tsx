import clsx from "clsx";
import { FC } from "react";

import { useTableContext } from "@ui-kit/table/ui/context/TableContext";

import '@ui-kit/table/ui/body/TableBody.scss';

export const TableBody: FC = () => {
	const { data, fields, rows, page, hover, onRowClick, onCellClick } = useTableContext();

	let dataForRender;
	if ((page - 1) * rows < data.length) {
		dataForRender = data.slice((page - 1) * rows, page * rows);
	} else {
		dataForRender = data.slice(0, rows);
	}

	return (
		<tbody className={'table-body'}>
		{dataForRender.map((rowData, index) => (
			<tr
				key={index}
				className={clsx(
					'table-body__row',
					hover === 'row' && 'table-body__row--hover',
				)}
				onClick={() => onRowClick(rowData)}
			>
				{fields.map((field, index) => (
					<td
						key={index}
						className={clsx(
							'table-body__cell',
							hover === 'cell' && 'table-body__cell--hover',
						)}
						onClick={() => onCellClick(rowData)}
					>
						<div className={'table-body__cell-content'} style={{ justifyContent: field.align }}>
							{field.template ? field.template(rowData) : rowData[field.name]}
						</div>
					</td>
				))}
			</tr>
		))}
		</tbody>
	);
};