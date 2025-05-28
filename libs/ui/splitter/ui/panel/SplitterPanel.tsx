import { FC, PropsWithChildren } from "react";

import '@ui-kit/splitter/ui/panel/SplitterPanel.scss';

interface ISplitterPanelProps extends PropsWithChildren {
	size?: number;
	minSize?: number;
}

export const SplitterPanel: FC<ISplitterPanelProps> = ({ children }) => {
	return children;
};