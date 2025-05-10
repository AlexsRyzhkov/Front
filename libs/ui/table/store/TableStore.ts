import { createStore } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { ITableStore, ITableStoreParams } from "@ui-kit/table/store/TableStore.type";
import { immer } from "zustand/middleware/immer";

interface ICreateTableParams extends ITableStoreParams {}

export const createTableStore = ({
	loading,
	paginator,
	data = [],
	columns,
	onChangePage,
}: ICreateTableParams) => {
	return createStore<ITableStore>()(
		immer(
			(set) => ({
				data: data,

				loading: loading,
				paginator: {
					page: paginator?.page || 1,
					perPage: paginator?.perPage || 10,
					totalPage: paginator?.totalPage || Math.ceil(data?.length / (paginator?.perPage || 10)) || 1,
				},

				headers: columns.map((column) => ({
					id: uuidv4(),
					name: column.header,
					sortable: !!column.sortable,
				})),
				fields: columns.map((column) => ({
					id: uuidv4(),
					name: column.field,
				})),

				setPage: (page) => set((state) => {
					if (state.paginator) {
						state.paginator.page = page;

						if (onChangePage) {
							onChangePage(page);
						}
					}
				}),

				setStore: (store) => set((state) => {
					state.loading = store.loading;
					state.data = store.data;

					state.headers = store.columns.map((column) => ({
						id: uuidv4(),
						name: column.header,
						sortable: !!column.sortable,
					}));

					state.fields = store.columns.map((column) => ({
						id: uuidv4(),
						name: column.field,
					}));
				}),
			}),
		),
	);
};

export type TTableStore = ReturnType<typeof createTableStore>