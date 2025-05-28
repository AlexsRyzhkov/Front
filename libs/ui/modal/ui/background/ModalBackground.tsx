import clsx from "clsx";
import { motion, MotionProps } from "motion/react";
import { FC, PropsWithChildren } from "react";

import "@ui-kit/modal/ui/background/ModalBackground.scss";

interface IModalBackgroundProps extends PropsWithChildren {
	className?: string;

	onClick?: () => void;
}

export const ModalBackground: FC<IModalBackgroundProps> = ({ className, onClick, children }) => {
	const animation: MotionProps = {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: 0.1 },
	};

	const onBackClick = (e: any) => {
		e.stopPropagation();

		if (e.target === e.currentTarget && onClick) {
			onClick();
		}
	};

	return (
		<motion.div
			className={clsx('modal-background', className)}
			onMouseDown={onBackClick}
			{...animation}
		>
			{children}
		</motion.div>
	);
};