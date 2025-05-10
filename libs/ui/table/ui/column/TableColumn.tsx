import { FC } from "react";

export interface ITableColumn {
	field: string;
	header: string;

	sortable?: boolean;
}

export const TableColumn: FC<ITableColumn> = () => {
	return null;
};