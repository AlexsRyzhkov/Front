import { ITableColumn } from "@ui-kit/table/ui/column/TableColumn";

export interface ITableStoreParams {
	loading: boolean;
	paginator?: IPaginator;
	data: any[];
	columns: ITableColumn[];

	onChangePage?: (page: number) => void;
}

export type  TData = Record<string, any>

export interface IPaginator {
	page: number,
	perPage: number,
	totalPage: number,
}

export interface IHeader {
	id: string,
	name: string,
	sortable: boolean,
}

export interface IField {
	id: string,
	name: string,
}

export interface ITableStore {
	data: any[];

	headers: IHeader[];
	fields: IField[];


	loading: boolean;
	paginator: IPaginator;


	setPage: (page: number) => void;
	setStore: (store: ITableStoreParams) => void;
}