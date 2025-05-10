import { TableColumn, ITableColumn } from "@ui-kit/table/ui/column/TableColumn";
import { TableContent } from "@ui-kit/table/ui/content/TableContent";
import { ReactElement, Fragment, useRef, useEffect, useState } from "react";

import { TableFooter } from "@ui-kit/table/ui/footer/TableFooter";
import { TableBody } from "@ui-kit/table/ui/body/TableBody";
import { TableProvider } from "@ui-kit/table/ui/context/TableContext";
import { TableHeader } from "@ui-kit/table/ui/header/TableHeader";

import { IPaginator, TData } from "@ui-kit/table/store/TableStore.type";

import '@ui-kit/table/ui/Table.scss';

interface ITableProps {
	data: any[];
	children: (ReactElement | null | boolean) | (ReactElement | null | boolean)[];

	loading?: boolean;
	paginator?: boolean;


	onChangePage?: (page: number) => void;
}

export const Table = ({
	children,
	loading,
	...contextProps
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
			columns={columns}
			loading={!!loading}
			{...contextProps}
		>
			<TableContent>
				<TableHeader/>
				<TableBody/>
				<TableFooter/>
			</TableContent>
		</TableProvider>
	);
};