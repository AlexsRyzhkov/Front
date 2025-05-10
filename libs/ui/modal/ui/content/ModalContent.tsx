import clsx from "clsx";
import { FC, PropsWithChildren, ReactElement } from "react";
import { motion, MotionProps } from "motion/react";

import "@ui-kit/modal/ui/content/ModalContent.scss";

interface IModalContentProps extends PropsWithChildren {
	className?: string;
}

export const ModalContent: FC<IModalContentProps> = ({ children, className }): ReactElement => {
	const animation: MotionProps = {
		initial: { scale: 0.8 },
		animate: { scale: 1 },
		exit: { scale: 0.8 },
		transition: { duration: 0.1 },
	};

	return (
		<motion.div className={clsx("modal-content", className)} {...animation}>
			{children}
		</motion.div>
	);
};