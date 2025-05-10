import { ToastBase } from "@ui-kit/toast/ui/base/ToastBase";
import { IToastInfo } from "@ui-kit/toast/ui/Toast.types";
import { FC } from "react";


export const ToastInfo: FC<IToastInfo> = (props) => {
	return (
		<ToastBase
			{...props}
			icon={() => (
				<span className="material-symbols-rounded" style={{ color: "#2a8af0" }}>
					info
				</span>
			)}
		/>
	);
};