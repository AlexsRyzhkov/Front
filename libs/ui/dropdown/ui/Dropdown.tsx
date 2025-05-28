import clsx from "clsx";
import { AnimatePresence } from "motion/react";
import { RefObject, PropsWithChildren, useRef, CSSProperties } from "react";
import { createPortal } from "react-dom";

import { useFoxKitContext } from "@ui-kit/context/fox-kit/FoxKitContex";
import { useAddOpenOnClick } from "@ui-kit/dropdown/hooks/useAddOpenOnClick";
import { useCoordinates } from "@ui-kit/dropdown/hooks/useCoordinate";
import { DropdownContent } from "@ui-kit/dropdown/ui/content/DropdownContent";

import '@ui-kit/dropdown/ui/Dropdown.scss';

interface IDropdown<T extends HTMLElement> extends PropsWithChildren {
	ref: RefObject<T | null>;
	style?: CSSProperties;
	className?: string;
	align?: "left" | "right";
}

export const Dropdown = <T extends HTMLElement>({
	ref,
	children,
	style,
	className,
}: IDropdown<T>) => {
	const { refDropDownContainer } = useFoxKitContext();
	const dropDownRef = useRef<HTMLDivElement>(null);

	const { coordinates, alignX } = useCoordinates(ref, dropDownRef);
	const isOpen = useAddOpenOnClick(ref, dropDownRef);

	const open = isOpen && refDropDownContainer;

	return refDropDownContainer && createPortal(
		open ? (
			<AnimatePresence>
				<DropdownContent
					ref={dropDownRef}
					{...coordinates}
					alignX={alignX}
					style={style}
				>
					<div className={clsx(className)}>
						{children}
					</div>
				</DropdownContent>
			</AnimatePresence>
		) : (
			<AnimatePresence/>
		),
		refDropDownContainer,
	);
};