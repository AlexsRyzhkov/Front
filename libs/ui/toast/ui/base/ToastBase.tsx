import clsx from "clsx";
import { FC } from "react";

import "@ui-kit/toast/ui/base/ToastBase.scss";

interface IToastBaseProps {
	info: string;
	detail?: string;
	icon: FC;
	className?: string;
	onClose?: () => void;
}

export const ToastBase: FC<IToastBaseProps> = ({ info, detail, icon: Icon, className, onClose }) => {
	return (
		<div className={clsx('toast-base', className)}>
			<div className={clsx('toast-base__icon')}>
				<Icon/>
			</div>
			<div className={clsx('toast-base__content')}>
				<h4 className={'toast-base__info'}>{info}</h4>
				{detail && (
					<p className={'toast-base__detail'}>{detail}</p>
				)}
			</div>
			<button className={'toast-base__close'} onClick={onClose}>
				<span className="material-symbols-rounded">
					close
				</span>
			</button>
		</div>
	);
};