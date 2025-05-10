import { Icon } from "@ui-kit/icon/icon";
import { FC, useState, useEffect, ChangeEvent, useCallback, InputHTMLAttributes } from "react";
import clsx from "clsx";

import "@ui-kit/checkbox/Checkbox.scss";

type  ICheckboxProps = {
	label?: string;

	pt?: {
		container_checkbox: string
		mark: string
		label: string
	};


} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox: FC<ICheckboxProps> = ({ value, onChange, label, type, pt, ...otherProps }) => {
	const [checked, setChecked] = useState(value ?? false);

	useEffect(() => {
		if (value && value !== checked) {
			setChecked(value);
		}
	}, [value]);

	const onChangeCheckbox = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);

		if (onChange) {
			onChange(e);
		}
	}, []);

	return (
		<label className={'fox-checkbox'} htmlFor={"checkbox"}>
			<span
				className={clsx(
					"fox-checkbox__checkbox-container",
					checked && "fox-checkbox__checkbox-container--checked",
					pt?.container_checkbox,
				)}>
				<Icon
					className={clsx(
						'fox-checkbox__mark',
						checked && 'fox-checkbox__mark--checked',
						pt?.mark,
					)}
					icon={'check'}
				/>
				<input
					id={'checkbox'}
					type={'checkbox'}
					onChange={onChangeCheckbox}
					className="fox-checkbox__input"
					{...otherProps}
				/>
			</span>
			{label && (
				<span className={clsx('fox-checkbox__label', pt?.label)}>{label}</span>
			)}
		</label>
	);
};