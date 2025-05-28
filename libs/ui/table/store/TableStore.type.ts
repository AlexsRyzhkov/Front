import { ITableColumn } from "@ui-kit/table/ui/column/TableColumn";
import { ReactNode } from "react";

export interface ITableStoreParams {
	data: any[];
	columns: ITableColumn[];

	loading: boolean;

	paginator: boolean;
	rows: number;
	first: number;
	totalPages: number;
	onChangePage: (page: number) => void;

	hover: 'row' | 'cell';
	onRowClick: (rowData: any) => void;
	onCellClick: (cellData: any) => void;
}

export interface IHeader {
	name: string,

	sortable: boolean,
	sort: "ASC" | "DESC" | null
	align: "start" | "end",

	template: ((rowData: any) => ReactNode) | null;
}

export interface IField {
	name: string,

	align: "start" | "end",
	template: ((rowData: any) => ReactNode) | null;
}

export interface ITableStore {
	data: any[];

	headers: IHeader[];
	fields: IField[];

	loading: boolean;

	paginator: boolean;
	page: number;
	rows: number;
	totalPages: number;
	onChangePage: (page: number) => void;
	setPage: (page: number) => void;

	hover: 'row' | 'cell';
	onRowClick: (rowData: any) => void;
	onCellClick: (cellData: any) => void;

	setPaginator: (setting: ISettingsPaginator) => void;
	setHover: (hover: 'row' | 'cell') => void;
	setOnClick: (onRowClick: (rowData: any) => void, onCellClick: (cellData: any) => void) => void;
	setData: (data: any[]) => void;
	setColumns: (columns: ITableColumn[]) => void;
}

export interface ISettingsPaginator {
	paginator: boolean;
	rows: number;
	first: number;
	totalPages: number;
	onChangePage: (page: number) => void;
}