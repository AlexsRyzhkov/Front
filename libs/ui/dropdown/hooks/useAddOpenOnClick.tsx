import { useOutside } from "@ui-kit/dropdown/hooks/useOutside";
import { RefObject, useState, useEffect } from "react";

export const useAddOpenOnClick = <T extends HTMLElement, E extends HTMLElement>(
	ref: RefObject<T | null>,
	dropDownRef: RefObject<E | null>,
) => {
	const [isOpen, setIsOpen] = useState(false);

	const onClick = () => {
		setIsOpen(prev => !prev);
	};

	useEffect(() => {
		ref.current?.addEventListener("click", onClick);

		return () => ref.current?.removeEventListener("click", onClick);
	}, [ref.current]);

	useOutside(ref, dropDownRef, () => setIsOpen(false));

	return isOpen;
};