import { useSplitterContext } from "@ui-kit/splitter/ui/context/SplitterContext";
import { SplitterDivider } from "@ui-kit/splitter/ui/divider/SplitterDivider";
import { useState, useRef, useEffect, FC, ReactElement } from "react";

import '@ui-kit/splitter/ui/content/SplitterContent.scss';

interface ISplitterContainerProps {
	children: ReactElement[];
}

export const SplitterContainer: FC<ISplitterContainerProps> = ({ children }) => {
	const { leftSize, rightSize, layout } = useSplitterContext();

	const [size, setSize] = useState(0);
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();

		setSize(rect.height);
	}, [layout]);

	const flexDirection: Record<string, "row" | "column"> = {
		horizontal: 'row',
		vertical: 'column',
	};

	return (
		<div
			className={'splitter-content'}
			ref={containerRef}
			style={{
				flexDirection: flexDirection[layout] ?? 'row',
			}}
		>
			<div
				className={'splitter-content__panel'}
				style={{
					flexBasis: `${leftSize}%`,
				}}
			>
				{children[0]}
			</div>
			<SplitterDivider height={size} containerRef={containerRef}/>
			<div
				className={'splitter-content__panel'}
				style={{
					flexBasis: `${rightSize}%`,
				}}
			>
				{children[1]}
			</div>
		</div>
	);
};