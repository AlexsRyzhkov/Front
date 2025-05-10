import { useTableContext } from "@ui-kit/table/ui/context/TableContext";
import { FC } from "react";

import '@ui-kit/table/ui/body/TableBody.scss';

export const TableBody: FC = () => {
	const { data, fields, paginator } = useTableContext();

	const dataForRender = data.slice(0, paginator.perPage);

	return (
		<tbody className={'table-body'}>
		{dataForRender.map((row, index) => (
			<tr key={index} className={'table-body__row'}>
				{fields.map((field, index) => (
					<td key={index} className={'table-body__cell'}>
						<div className={'table-body__cell-content'}>
							{row[field.name]}
						</div>
					</td>
				))}
			</tr>
		))}
		</tbody>
	);
};