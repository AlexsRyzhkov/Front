import clsx from "clsx";
import { motion, MotionProps } from "motion/react";
import { FC, PropsWithChildren } from "react";

import "@ui-kit/modal/ui/background/ModalBackground.scss";

interface IModalBackgroundProps extends PropsWithChildren {
	className?: string;
}

export const ModalBackground: FC<IModalBackgroundProps> = ({ className, children }) => {
	const animation: MotionProps = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 0.1 },
	};

	return (
		<motion.div className={clsx('modal-background', className)} {...animation}>
			{children}
		</motion.div>
	);
};