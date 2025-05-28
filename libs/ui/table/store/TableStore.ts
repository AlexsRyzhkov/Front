import { createStore } from "zustand";
import { ITableStore, ITableStoreParams } from "@ui-kit/table/store/TableStore.type";
import { immer } from "zustand/middleware/immer";

interface ICreateTableParams extends ITableStoreParams {}

export const createTableStore = ({
	data = [],
	columns,

	loading,

	paginator,
	rows,
	first,
	totalPages,
	onChangePage,

	hover,
	onRowClick,
	onCellClick,
}: ICreateTableParams) => {
	return createStore<ITableStore>()(
		immer(
			(set) => ({
				data: data,

				headers: columns.map((column) => ({
					name: column.header,
					sortable: !!column.sortable,
					sort: column.sort ?? null,
					template: column.templateHeaderCell ?? null,
					align: column.align ?? 'start',
				})),
				fields: columns.map((column) => ({
					name: column.field,
					template: column.templateBodyCell ?? null,
					align: column.align ?? 'start',
				})),

				loading: loading,

				paginator: paginator,
				page: first,
				rows: rows,
				totalPages: totalPages,
				onChangePage: onChangePage,

				hover: hover,
				onRowClick: onRowClick,
				onCellClick: onCellClick,

				setPage: (page) => set((state) => {
					state.page = page;

					state.onChangePage(page);
				}),

				setHover: (hover) => set((state) => {
					state.hover = hover;
				}),

				setData: (data) => set((state) => {
					state.data = data;
				}),

				setOnClick: (onRowClick, onCellClick) => set((state) => {
					state.onRowClick = onRowClick;
					state.onCellClick = onCellClick;
				}),

				setColumns: (columns) => set((state) => {
					state.headers = columns.map((column) => ({
						name: column.header,
						sortable: !!column.sortable,
						sort: column.sort ?? null,
						template: column.templateHeaderCell ?? null,
						align: column.align ?? 'start',
					}));

					state.fields = columns.map((column) => ({
						name: column.field,
						template: column.templateBodyCell ?? null,
						align: column.align ?? 'start',
					}));
				}),

				setPaginator: (setting) => set((state) => {
					state.paginator = setting.paginator;
					state.rows = setting.rows;
					state.page = setting.first;
					state.totalPages = setting.totalPages;
					state.onChangePage = setting.onChangePage;
				}),
			}),
		),
	);
};

export type TTableStore = ReturnType<typeof createTableStore>