import { FC } from "react";

import { useTableContext } from "@ui-kit/table/ui/context/TableContext";
import { Icon } from "@ui-kit/icon/icon";

import '@ui-kit/table/ui/header/TableHeader.scss';

export const TableHeader: FC = () => {
	const { headers } = useTableContext();

	return (
		<thead className={'table-header'}>
		<tr className={'table-header__row'}>
			{headers.map((header, index) => (
				<th className={'table-header__cell'} key={index}>
					<div className={'table-header__cell-content'} style={{ justifyContent: header.align }}>
						{header.name}
						{header.sortable && (
							<Icon
								icon={'arrow_right_alt'}
								className={'table-header__cell-content-sort-icon'}
								size={'20px'}
							/>
						)}
					</div>
				</th>
			))}
		</tr>
		</thead>
	);
};

