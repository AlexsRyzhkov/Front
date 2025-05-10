import { useTableContext } from "@ui-kit/table/ui/context/TableContext";
import { FC } from "react";

import '@ui-kit/table/ui/header/TableHeader.scss';
import { Icon } from "@ui-kit/icon/icon";

export const TableHeader: FC = () => {
	const { headers } = useTableContext();

	console.log(headers);

	return (
		<thead className={'table-header'}>
		<tr className={'table-header__row'}>
			{headers.map((header) => (
				<th className={'table-header__cell'} key={header.id}>
					<div className={'table-header__cell-content'}>
						{header.name}
						<Icon
							icon={'arrow_right_alt'}
							className={'table-header__cell-content-sort-icon'}
							size={'20px'}
						/>
					</div>
				</th>
			))}
		</tr>
		</thead>
	);
};

