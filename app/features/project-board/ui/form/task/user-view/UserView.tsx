import './UserView.scss';
import { FC } from "react";

interface IUserView {
	onClick?: () => void;
}

export const UserView: FC<IUserView> = ({ onClick }) => {
	return (
		<div className={'user-view'} onClick={onClick}>
			<div className={'user-view__ag'}>
				AG
			</div>
			Рыжков Александр
		</div>
	);
};