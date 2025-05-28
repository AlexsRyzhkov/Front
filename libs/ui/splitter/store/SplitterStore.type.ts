export interface ISplitterStore {
	leftSize: number;
	rightSize: number;

	leftMinSize: number;
	rightMinSize: number;

	layout: "horizontal" | "vertical";

	setLayout: (layout: "horizontal" | "vertical") => void;

	setLeftSize: (size: number) => void;
	setRightSize: (size: number) => void;

	setLeftMinSize: (size: number) => void;
	setRightMinSize: (size: number) => void;
}