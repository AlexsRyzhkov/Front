import { ToastPresetAnimation } from "@ui-kit/toast/ui/preset-animation/ToastPresetAnimation";
import { v4 as uuidv4 } from 'uuid';
import { FC, RefObject, useState, useImperativeHandle, useCallback } from "react";
import { IToastsItem, IShowParams, IRefToast } from "@ui-kit/toast/ui/Toast.types";

import { AnimatePresence, motion } from 'motion/react';
import { ZIndex } from "../../../enums/enums";

import { ToastSuccess } from "./succes/ToastSuccess";
import { ToastError } from "@ui-kit/toast/ui/error/ToastError";
import { ToastInfo } from "@ui-kit/toast/ui/info/ToastInfo";
import { ToastWarning } from "@ui-kit/toast/ui/warning/ToastWarning";
import { Button } from "@ui-kit/button/Button";

import '@ui-kit/toast/ui/Toast.scss';

interface IToast {
	ref: RefObject<IRefToast | null>;
}

export const Toast: FC<IToast> = ({ ref }) => {
	const [toasts, setToasts] = useState<IToastsItem[]>([]);

	const removeToastById = (id: string) => {
		setToasts(prev => prev.filter((v) => v.id !== id));
	};

	useImperativeHandle(ref, () => ({
		show: (params: IShowParams) => {
			setToasts(prev => {
				const id = uuidv4();

				const onCloseClick = () => {
					removeToastById(id);
				};

				setTimeout(() => removeToastById(id), 20000);

				if (params.type === 'info') {
					return [{
						id: id,
						Component: () => (
							<ToastInfo
								info={params.info}
								detail={params.detail}
								onClose={onCloseClick}
							/>
						),
					}, ...prev];
				} else if (params.type === 'error') {
					return [{
						id: id,
						Component: () => (
							<ToastError
								info={params.info}
								detail={params.detail}
								onClose={onCloseClick}
							/>
						),
					}, ...prev];
				} else if (params.type == 'warn') {
					return [{
						id: id,
						Component: () => (
							<ToastWarning
								info={params.info}
								detail={params.detail}
								onClose={onCloseClick}
							/>
						),
					}, ...prev];
				} else if (params.type == 'success') {
					return [{
						id: id,
						Component: () => (
							<ToastSuccess
								info={params.info}
								detail={params.detail}
								onClose={onCloseClick}
							/>
						),
					}, ...prev];
				}

				return toasts;
			});
		},
	}));

	const onCloseAll = useCallback(() => {
		setToasts([]);
	}, []);

	return (
		<div className={'fox-task-toast'} style={{ zIndex: ZIndex.zIndexToast }}>
			{toasts.length ? (
				<Button
					className={'fox-task-toast__close-all'}
					onClick={onCloseAll}
				>
					Закрыть все
				</Button>
			) : null}
			<div className={'fox-task-toast__list'}>
				<AnimatePresence initial={false}>
					{toasts.map(({ id, Component }) => (
						<ToastPresetAnimation key={id}>
							<Component/>
						</ToastPresetAnimation>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
};