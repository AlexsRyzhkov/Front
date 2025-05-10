import { FC, PropsWithChildren, Key } from "react";
import { motion } from "motion/react";


export const ToastPresetAnimation: FC<PropsWithChildren & { key: Key }> = ({ children }) => {
	const transition = { duration: 0.15, ease: 'easeOut' };

	return (
		<motion.div
			initial={{ scale: 0.8, height: 0, opacity: 0, transition }}
			animate={{ scale: 1, height: 'auto', opacity: 1, transition }}
			exit={{ scale: 0.8, height: 0, opacity: 0, transition }}
		>
			{children}
		</motion.div>
	);
};