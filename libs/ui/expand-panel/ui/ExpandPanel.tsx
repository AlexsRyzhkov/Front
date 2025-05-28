import { AnimatePresence, motion, MotionProps } from "motion/react";
import { FC, PropsWithChildren } from "react";

import '@ui-kit/expand-panel/ui/ExpandPanel.scss';

interface IExpandPanelProps extends PropsWithChildren {
	expand: boolean;
}

export const ExpandPanel: FC<IExpandPanelProps> = ({ expand, children }) => {
	const animation: MotionProps = {
		initial: { height: 0 },
		animate: { height: 'auto' },
		exit: { height: 0 },
		transition: { duration: 0.1 },
	};

	return (
		<AnimatePresence>
			{expand && (
				<motion.div className={'expand-panel'} {...animation}>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
};