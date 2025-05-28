import { RefObject, useEffect } from "react";

export const useResizeObserver = (
	target: RefObject<Element | null>,
	callback: (entry: ResizeObserverEntry, observer: ResizeObserver) => void,
) => {
	useEffect(() => {
		if (!target.current) return;

		const observer = new ResizeObserver((entries, observer) => {
			for (let entry of entries) {
				callback(entry, observer);
			}
		});

		if (Array.isArray(target.current)) {
			for (let entry of target.current) {
				observer.observe(entry);
			}
		} else {
			observer.observe(target.current);
		}

		return () => observer.disconnect();
	}, []);

};