import { PropsWithChildren, createContext, useContext, useRef, useEffect } from "react";
import { useStore } from "zustand";

import { createTableStore, TTableStore } from "@ui-kit/table/store/TableStore";
import { ITableStoreParams } from "@ui-kit/table/store/TableStore.type";

const TableContext = createContext<TTableStore | null>(null);

interface ITableProvider extends PropsWithChildren, ITableStoreParams {

}

export const TableProvider = ({
	data,

	columns,

	children,
	loading,

	paginator,
	rows,
	first,
	totalPages,
	onChangePage,

	hover,
	onRowClick,
	onCellClick,
}: ITableProvider) => {
	const store = useRef(createTableStore({
		data,
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
	})).current;
	const { setPaginator, setColumns, setHover, setOnClick, setData } = useStore(store, (state) => state);

	useEffect(() => {
		setData(data);
	}, [JSON.stringify(data)]);

	useEffect(() => {
		setColumns(columns);
	}, [JSON.stringify(columns)]);

	useEffect(() => {
		setPaginator({
			paginator,
			rows,
			first,
			totalPages,
			onChangePage,
		});
	}, [paginator, rows, first, totalPages, onChangePage]);

	useEffect(() => {
		setHover(hover);
	}, [hover]);

	useEffect(() => {
		setOnClick(onRowClick, onCellClick);
	}, [onCellClick, onRowClick]);

	return (
		<TableContext.Provider value={store}>
			{children}
		</TableContext.Provider>
	);
};


export const useTableContext = () => {
	const store = useContext(TableContext);

	if (!store) {
		throw new Error("useTableContext must be used to useTableContext");
	}

	return useStore(store, state => state);
};
