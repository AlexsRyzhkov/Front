import { useSplitterContext } from "@ui-kit/splitter/ui/context/SplitterContext";
import clsx from "clsx";
import { FC, useRef, useEffect, useCallback, RefObject, SetStateAction, Dispatch, useState } from "react";

import "@ui-kit/splitter/ui/divider/SplitterDivider.scss";

interface ISplitterDividerProps {
	height: number;
	containerRef: RefObject<HTMLDivElement | null>;
}

export const SplitterDivider: FC<ISplitterDividerProps> = ({
	height,
	containerRef,
}) => {
	const {
		setLeftSize,
		setRightSize,
		leftMinSize,
		rightMinSize,
	} = useSplitterContext();

	const isDragging = useRef(false);
	const [isDrag, setIsDrag] = useState(false);

	const onMouseMove = useCallback((e: MouseEvent) => {
		if (!isDragging.current || !containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();

		const leftWidth = Number(((e.clientX - rect.left) / rect.width * 100).toFixed(5));

		if (leftMinSize > leftWidth) {
			setLeftSize(leftMinSize);
			setRightSize(100 - leftMinSize);
			return;
		}

		const rightWidth = Number((100 - leftWidth).toFixed(5));

		if (rightMinSize > rightWidth) {
			setLeftSize(100 - rightMinSize);
			setRightSize(rightMinSize);
			return;
		}


		if (leftWidth > 0 && leftWidth < 100) {
			setLeftSize(leftWidth);
			setRightSize(rightWidth);
		}
	}, [leftMinSize, rightMinSize]);

	useEffect(() => {
		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);

		return () => {
			document.removeEventListener('mousemove', onMouseMove);
			document.removeEventListener('mouseup', onMouseUp);
		};
	}, [leftMinSize, rightMinSize]);

	const onMouseDown = useCallback(() => {
		isDragging.current = true;
		document.body.style.userSelect = 'none';
		setIsDrag(true);
	}, []);

	const onMouseUp = useCallback(() => {
		isDragging.current = false;
		document.body.style.userSelect = 'auto';
		setIsDrag(false);
	}, []);

	return (
		<div
			className={clsx('splitter-divider', isDrag && 'splitter-divider--dragging')}
			style={{ height: height }}
			onMouseDown={onMouseDown}
		/>
	);
};