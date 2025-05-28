import { SplitterPanel } from "@ui-kit/splitter/ui/panel/SplitterPanel";
import { ReactElement, FC } from "react";

import { SplitterContainer } from "@ui-kit/splitter/ui/content/SplitterContent";
import { SplitterProvider } from "@ui-kit/splitter/ui/context/SplitterContext";

import '@ui-kit/splitter/ui/Splitter.scss';

interface ISplitterProps {
	layout?: "horizontal" | "vertical";

	children: ReactElement[];
}

interface IPanelProps {
	size?: number;
	minSize?: number;
}

export const Splitter: FC<ISplitterProps> = ({ layout = 'horizontal', children }) => {
	if (children.length !== 2) {
		return null;
	}

	const panelProps: IPanelProps[] = [];

	for (let child of children) {
		if (child.type === SplitterPanel) {
			const props = (child.props as any);

			panelProps.push({
				size: props.size,
				minSize: props.minSize,
			});
		}
	}

	if (panelProps.length !== 2) {
		return null;
	}

	return (
		<SplitterProvider
			leftSize={panelProps[0].size}
			rightSize={panelProps[1].size}

			leftMinSize={panelProps[0].minSize}
			rightMinSize={panelProps[1].minSize}

			layout={layout}
		>
			<SplitterContainer>
				{children}
			</SplitterContainer>
		</SplitterProvider>
	);
};