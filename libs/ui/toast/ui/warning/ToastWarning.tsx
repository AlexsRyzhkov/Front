import { IToastInfo } from "@ui-kit/toast/ui/Toast.types";
import { FC } from "react";
import { ToastBase } from "../base/ToastBase";

export const ToastWarning: FC<IToastInfo> = (props) => {
	return (
		<ToastBase
			{...props}
			icon={() => (
				<span className="material-symbols-rounded" style={{ color: "#ffc01d" }}>
					dangerous
				</span>
			)}
		/>
	);
};