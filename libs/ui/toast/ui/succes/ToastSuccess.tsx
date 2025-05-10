import { ToastBase } from "@ui-kit/toast/ui/base/ToastBase";
import { IToastInfo } from "@ui-kit/toast/ui/Toast.types";
import { FC } from "react";

export const ToastSuccess: FC<IToastInfo> = (props) => {
	return (
		<ToastBase
			{...props}
			icon={() => (
				<span className="material-symbols-rounded" style={{ color: "#11af75" }}>
					check_circle
				</span>
			)}
		/>
	);
};