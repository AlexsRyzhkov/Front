import { PropsWithChildren, FC } from "react";

interface IInplaceDisplayProps extends PropsWithChildren {}

export const InplaceDisplay: FC<IInplaceDisplayProps> = ({ children }) => {
	return children;
};