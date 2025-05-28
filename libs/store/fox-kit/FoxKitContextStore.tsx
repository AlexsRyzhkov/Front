import { immer } from "zustand/middleware/immer";
import { createStore } from "zustand/vanilla";

import { TTFoxKitStore } from "@lib-store/fox-kit/FoxKitContextStore.types";

export const createFoxKitStore = () => {
	return createStore<TTFoxKitStore>()(
		immer((set) => ({
			refModalContainer: null,
			refDropDownContainer: null,


			setRefModalContainer: (el) => set(() => ({ refModalContainer: el })),
			setRefDropDownContainer: (el) => set(() => ({ refDropDownContainer: el })),
		})),
	);
};

export type TFoxKitStoreReturn = ReturnType<typeof createFoxKitStore>;