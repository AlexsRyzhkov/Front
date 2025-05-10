import { Link as TanstackLink, LinkComponentProps } from "@tanstack/react-router";
import clsx from "clsx";
import { FC } from "react";

import '@ui-kit/link/Link.scss';

interface IClinkProps extends LinkComponentProps {}

export const Link: FC<IClinkProps> = ({ className, ...otherProps }) => {
	return (
		<TanstackLink className={clsx('foxtask-link', className)} {...otherProps}/>
	);
};