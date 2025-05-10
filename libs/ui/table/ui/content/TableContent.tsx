import { FC, PropsWithChildren } from "react";

interface ITableContentProps extends PropsWithChildren {
}

export const TableContent: FC<ITableContentProps> = ({ children }) => {
	return (
		<table className={'table'}>
			{children}
		</table>
	);
};