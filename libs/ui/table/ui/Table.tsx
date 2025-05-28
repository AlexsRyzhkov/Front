import { TableColumn, ITableColumn } from "@ui-kit/table/ui/column/TableColumn";
import { TableContent } from "@ui-kit/table/ui/content/TableContent";
import { ReactElement } from "react";

import { TableFooter } from "@ui-kit/table/ui/footer/TableFooter";
import { TableBody } from "@ui-kit/table/ui/body/TableBody";
import { TableProvider } from "@ui-kit/table/ui/context/TableContext";
import { TableHeader } from "@ui-kit/table/ui/header/TableHeader";


import '@ui-kit/table/ui/Table.scss';

interface ITableProps {
	data: any[];
	children: (ReactElement | null | boolean) | (ReactElement | null | boolean)[];

	loading?: boolean;

	paginator?: boolean;
	rows?: number;
	first?: number;
	totalPages?: number;
	onChangePage?: (page: number) => void;

	hover?: 'row' | 'cell';
	onRowClick?: (rowData: any) => void;
	onCellClick?: (cellData: any) => void;

	onChangeSort?: (sortData: any) => void;
}

export const Table = ({
	data = [],

	children,
	loading,

	paginator = false,
	rows = 10,
	first = 1,
	totalPages = Math.ceil(data.length / rows),
	onChangePage = () => {},

	hover = 'row',
	onRowClick = () => {},
	onCellClick = () => {},
}: ITableProps) => {
	const columns: ITableColumn[] = [];

	if (Array.isArray(children)) {
		for (const child of children) {
			if (typeof child !== 'boolean' && child?.type === TableColumn) {
				columns.push(child.props as ITableColumn);
			}
		}
	} else {
		if (typeof children !== 'boolean' && children?.type === TableColumn) {
			columns.push(children.props as ITableColumn);
		}
	}

	return (
		<TableProvider
			data={data}

			columns={columns}
			loading={!!loading}

			paginator={paginator}
			rows={rows}
			first={first}
			totalPages={totalPages}
			onChangePage={onChangePage}

			hover={hover}
			onRowClick={onRowClick}
			onCellClick={onCellClick}
		>
			<TableContent>
				<TableHeader/>
				<TableBody/>
				<TableFooter/>
			</TableContent>
		</TableProvider>
	);
};