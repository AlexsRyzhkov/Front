import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

interface IModalBodyProps extends PropsWithChildren {
	className?: string;
}

export const ModalBody: FC<IModalBodyProps> = ({ className, children }) => {
	return (
		<div className={clsx('modal-body', className)}>
			{children}
		</div>
	);
};