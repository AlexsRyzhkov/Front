import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IModalFooterProps extends PropsWithChildren {
	className?: string;
}

export const ModalFooter: FC<IModalFooterProps> = ({ className, children }) => {
	return (
		<div className={clsx('modal-footer', className)}>
			{children}
		</div>
	);
};