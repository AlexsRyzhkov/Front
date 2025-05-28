import { RefObject, useState, useCallback, useLayoutEffect } from "react";

export const useCoordinates = <T extends HTMLElement, E extends HTMLElement>(
	refBtn: RefObject<E | null>,
	refDropDown: RefObject<T | null>,
) => {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
	});
	const [alignX, setAlignX] = useState<"left" | "right">("left");

	const changeCoordinates = useCallback(() => {
		if (!refBtn.current) return;
		if (!refDropDown.current) return;

		const dropdownRect = refDropDown.current.getBoundingClientRect();
		const btnRect = refBtn.current.getBoundingClientRect();

		if (btnRect.left + dropdownRect.width + 50 < window.innerWidth) {
			setAlignX('left');
			setCoordinates({
				x: btnRect.left,
				y: btnRect.bottom,
			});
		} else if (btnRect.right - dropdownRect.width - 50 > 0) {
			setAlignX('right');
			setCoordinates({
				x: window.innerWidth - btnRect.right,
				y: btnRect.bottom,
			});
		} else if (alignX === 'left') {
			setCoordinates({
				x: btnRect.left,
				y: btnRect.bottom,
			});
		} else {
			setCoordinates({
				x: window.innerWidth - btnRect.right,
				y: btnRect.bottom,
			});
		}
	}, [refDropDown.current, refBtn.current, setAlignX]);

	useLayoutEffect(() => {
		changeCoordinates();

		window.addEventListener('resize', changeCoordinates);

		return () => window.removeEventListener('resize', changeCoordinates);
	}, [refDropDown.current, refBtn.current, setAlignX]);

	return {
		coordinates,
		alignX,
	};
};