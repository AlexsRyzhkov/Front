import { FC, ReactNode } from "react";

export interface ITableColumn {
	field: string;
	header: string;

	sortable?: boolean;
	sort?: "ASC" | "DESC" | null;
	templateHeaderCell?: (rowData: any) => ReactNode;
	templateBodyCell?: (rowData: any) => ReactNode;

	align?: "start" | "end";
}

export const TableColumn: FC<ITableColumn> = () => {
	return null;
};