import { motion, MotionProps } from "motion/react";
import { PropsWithChildren, FC, RefObject, CSSProperties } from "react";

interface IDropdownContentProps extends PropsWithChildren {
	ref: RefObject<any | null>;
	x: number;
	y: number;
	alignX: "left" | "right";
	style?: CSSProperties;
}

export const DropdownContent: FC<IDropdownContentProps> = ({
	ref,
	x,
	y,
	alignX,
	children,
	style,
}) => {
	const animation: MotionProps = {
		initial: { scale: 0.7, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0.7, opacity: 0 },
		transition: { duration: 0.1 },
	};

	return (
		<motion.div
			className={'dropdown'}
			ref={ref}
			style={{ [alignX]: x, top: y, ...style, transformOrigin: `top ${alignX}` }}
			{...animation}
		>
			{children}
		</motion.div>
	);
};