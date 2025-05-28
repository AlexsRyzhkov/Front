import { useStore } from "zustand";
import { createContext, FC, PropsWithChildren, useRef, useContext } from "react";

import { createFoxKitStore, TFoxKitStoreReturn } from "@lib-store/fox-kit/FoxKitContextStore";

import {
	FoxKitContextDropdownContainer,
} from "@ui-kit/context/fox-kit/dropdown-container/FoxKitContexDropdownContainer";
import { FoxKitContextModalContainer } from "@ui-kit/context/fox-kit/modal-container/FoxKitContextModalContainer";

import '@ui-kit/context/fox-kit/FoxKitContext.scss';

const FoxKitContext = createContext<TFoxKitStoreReturn | null>(null);

export const FoxKitProvider: FC<PropsWithChildren> = ({ children }) => {
	const store = useRef(createFoxKitStore()).current;

	return (
		<FoxKitContext.Provider value={store}>
			{children}
			<FoxKitContextDropdownContainer/>
			<FoxKitContextModalContainer/>
		</FoxKitContext.Provider>
	);
};

export const useFoxKitContext = () => {
	const store = useContext(FoxKitContext);

	if (!store) {
		throw new Error("useFoxKitContext must be used within the context");
	}

	return useStore(store, state => state);
};