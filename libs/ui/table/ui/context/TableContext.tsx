import { PropsWithChildren, createContext, useContext, useRef, useEffect } from "react";
import { useStore } from "zustand";

import { createTableStore, TTableStore } from "@ui-kit/table/store/TableStore";
import { ITableStoreParams } from "@ui-kit/table/store/TableStore.type";

const TableContext = createContext<TTableStore | null>(null);

interface ITableProvider extends PropsWithChildren, ITableStoreParams {

}

export const TableProvider = ({
	children,
	data = [],
	...storeParams
}: ITableProvider) => {
	const store = useRef(createTableStore({ ...storeParams, data })).current;
	const { setStore } = useStore(store, (state) => state);

	useEffect(() => {
		setStore({ ...storeParams, data });

	}, [JSON.stringify({ ...storeParams, data })]);

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
