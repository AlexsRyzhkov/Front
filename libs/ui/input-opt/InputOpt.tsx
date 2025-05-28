import { FC, useRef, InputHTMLAttributes, RefObject, useState, useEffect, useCallback, ChangeEvent } from "react";
import clsx from "clsx";

import "@ui-kit/input-opt/InputOpt.scss";

interface IInputOptProps extends InputHTMLAttributes<HTMLInputElement> {
	value?: string;
	number: number;
	error?: string;
	filter?: 'number';
}

export const InputOpts: FC<IInputOptProps> = ({
	value,
	onChange,
	number,
	className,
	error,
	filter,
	...otherInputProps
}) => {
	const filterReg = {
		number: /^\d*$/,
	};

	const [chars, setChars] = useState("");

	const changeChars = (value: string) => {
		if (filter && !filterReg[filter].test(value)) {
			return;
		}

		setChars(value.slice(0, number));
	};

	useEffect(() => {
		if (value && chars != value) {
			changeChars(value);
		}
	}, [value]);

	const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		changeChars(e.target.value);

		if (onChange) {
			onChange(e);
		}
	}, []);


	const [isActive, setIsActive] = useState(false);

	return (
		<div className={clsx('input-opt')}>
			<input
				className={clsx('input-opt__input')}
				onChange={onChangeInput}
				value={chars}
				onFocus={() => {setIsActive(true);}}
				onBlur={() => {setIsActive(false);}}
				{...otherInputProps}
			/>
			<div className={clsx("input-opt__chars")}>
				{Array(number).fill(0).map((_, index) => (
					<div className={clsx(
						'input-opt__char',
						error && 'input-opt__char--error',
						chars.length === index && isActive && 'input-opt__char--active',
						chars.length === number && isActive && chars.length - 1 === index && 'input-opt__char--active',
					)} key={index}>
						{chars.length > index ? chars[index] : " "}
						{chars.length === index && isActive && (<span className="input-opt__blinking-cursor">|</span>)}
					</div>
				))}
			</div>
			{error && (
				<span className={'input-opt__error'}>
					{error}
				</span>
			)}
		</div>
	);
};