import { ISplitterStore } from "@ui-kit/splitter/store/SplitterStore.type";
import { immer } from "zustand/middleware/immer";
import { createStore } from "zustand/vanilla";

interface ICreateStoreParams {}

export const createSplitterStore = () => {
	return createStore<ISplitterStore>()(
		immer(
			(set) => ({
				leftSize: 50,
				rightSize: 50,

				leftMinSize: -1,
				rightMinSize: -1,

				layout: 'horizontal',

				setLayout: (layout) => set((state) => {
					state.layout = layout;
				}),

				setLeftSize: (size: number) => set((state) => {
					state.leftSize = size;
				}),

				setRightSize: (size: number) => set((state) => {
					state.rightSize = size;
				}),

				setLeftMinSize: (size: number) => set((state) => {
					state.leftMinSize = size;
				}),

				setRightMinSize: (size: number) => set((state) => {
					state.rightMinSize = size;
				}),
			}),
		),
	);
};

export type TSplitterStore = ReturnType<typeof createSplitterStore>;