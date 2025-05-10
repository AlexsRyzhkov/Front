import { Button } from "@ui-kit/button/Button";
import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

import "@ui-kit/modal/ui/header/ModalHeader.scss";

interface IModalHeaderProps extends PropsWithChildren {
	title?: string;
	onHide?: () => void;
	className?: string;
}

export const ModalHeader: FC<IModalHeaderProps> = ({
	title,
	onHide,
	children,
	className,
}) => {
	return !children ? (
		<div className={clsx('modal-header', className)}>
			<h3 className={clsx('modal-header__title')}>{title}</h3>
			<Button
				variant={'no_background'}
				className={'modal-header__close-btn'}
				onClick={onHide}
			>
				<span className={'material-symbols-rounded'}>
					close
				</span>
			</Button>
		</div>
	) : (
		<div className={clsx(className)}>
			{children}
		</div>
	);
};