import { createSplitterStore, TSplitterStore } from "@ui-kit/splitter/store/SplitterStore";
import { createContext, PropsWithChildren, FC, useRef, useContext, useEffect } from "react";
import { useStore } from "zustand";

const SplitterContext = createContext<TSplitterStore | null>(null);

interface ISplitterProviderProps extends PropsWithChildren {
	leftSize?: number;
	rightSize?: number;

	leftMinSize?: number;
	rightMinSize?: number;

	layout: "vertical" | "horizontal";
}

export const SplitterProvider: FC<ISplitterProviderProps> = ({
	leftSize,
	rightSize,

	leftMinSize,
	rightMinSize,

	layout,

	children,
}) => {
	const store = useRef(createSplitterStore()).current;
	const {
		setLeftSize,
		setRightSize,
		setLeftMinSize,
		setRightMinSize,
		setLayout,
	} = useStore(store, state => state);

	useEffect(() => {
		if (leftSize && leftSize > 0 && leftSize < 100) {
			setLeftSize(leftSize);
			setRightSize(100 - leftSize);
		} else if (rightSize && rightSize > 0 && rightSize < 100) {
			setLeftSize(100 - rightSize);
			setRightSize(rightSize);
		}
	}, [leftSize, rightSize, leftMinSize, rightMinSize]);

	useEffect(() => {
		if (leftMinSize && leftMinSize > 0 && leftMinSize < 100) {
			setLeftMinSize(leftMinSize);
		}
		if (rightMinSize && rightMinSize > 0 && rightMinSize < 100) {
			setRightMinSize(rightMinSize);
		}
	}, [leftMinSize, rightMinSize]);

	useEffect(() => {
		setLayout(layout);
	}, [layout]);

	return (
		<SplitterContext.Provider value={store}>
			{children}
		</SplitterContext.Provider>
	);
};

export const useSplitterContext = () => {
	const store = useContext(SplitterContext);

	if (!store) {
		throw new Error("useSplitterContext must be used within SplitterProvider");
	}

	return useStore(store, state => state);
};