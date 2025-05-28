import { RefObject, useEffect } from "react";

export const useClickAway = (refs: RefObject<Element[] | Element | null>, onClickAway: () => void) => {
	useEffect(() => {
		const awayClick = (e: MouseEvent) => {
			if (!refs.current) {
				return;
			}

			if (Array.isArray(refs.current)) {
				let isAway = true;

				for (let ref of refs.current) {
					if (ref.contains(e.target as Node)) {
						isAway = false;
						break;
					}
				}

				if (isAway) {
					onClickAway();
				}
			} else {
				if (!refs.current.contains(e.target as Node)) {
					onClickAway();
				}
			}
		};

		document.addEventListener("mousedown", awayClick);

		return () => document.removeEventListener("mousedown", awayClick);

	}, [refs.current, onClickAway]);
};