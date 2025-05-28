import './LabelsList.scss';
import { FC } from "react";

interface ILabelsList {
	labels: string[];
	onClick?: () => void;
}

export const LabelsList: FC<ILabelsList> = ({ labels, onClick }) => {
	return (
		<div className={'labels-list'} onClick={onClick}>
			{labels.map((label, index) => (
				<div className={'labels-list__label'} key={index}>
					{label}
				</div>
			))}
		</div>
	);
};