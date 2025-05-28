import { FC, PropsWithChildren } from "react";

interface IInplaceContentProps extends PropsWithChildren {}

export const InplaceContent: FC<IInplaceContentProps> = ({ children }) => {
	return children;
};