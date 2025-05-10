import { immer } from "zustand/middleware/immer";
import { createStore } from "zustand/vanilla";

import { TTFoxKitStore } from "@lib-store/fox-kit/FoxKitContextStore.types";

export const createFoxKitStore = () => {
	return createStore<TTFoxKitStore>()(
		immer((set) => ({
			refModalContainer: null,

			setRefModalContainer: (el) => set((state) => ({ refModalContainer: el })),
		})),
	);
};

export type TFoxKitStoreReturn = ReturnType<typeof createFoxKitStore>;