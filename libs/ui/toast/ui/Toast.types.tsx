import { FC } from "react";

export interface IToastsItem {
	id: string;
	Component: FC;
}

export interface IShowParams {
	type: "info" | "success" | "error" | "warn";
	info: string;
	detail?: string;
}

export interface IRefToast {
	show(params: IShowParams): void;
}

export interface IToastInfo {
	info: string;
	detail?: string;
	onClose?: () => void;
}