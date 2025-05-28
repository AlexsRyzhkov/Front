import { RefObject, useEffect } from "react";

export const useOutside = (
	btnRef: RefObject<HTMLElement | null>,
	dropDownRef: RefObject<HTMLElement | null>,
	callback: () => void,
) => {
	useEffect(() => {
		const onOutsideClick = (e: MouseEvent) => {
			if (btnRef.current && dropDownRef.current &&
				(!btnRef.current.contains(e.target as Node) && !dropDownRef.current.contains(e.target as Node))) {
				callback();
			}
		};

		window.addEventListener('mouseup', onOutsideClick);

		return () => window.removeEventListener('mouseup', onOutsideClick);

	}, [btnRef.current, dropDownRef.current, callback]);
};