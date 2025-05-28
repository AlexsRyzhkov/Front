import { useClickAway } from "@ui-hooks/useClickAway";
import { InplaceContent } from "@ui-kit/inplace/ui/content/InplaceContent";
import { InplaceDisplay } from "@ui-kit/inplace/ui/display/InplaceDisplay";
import { FC, ReactElement, useState, useEffect, useRef } from "react";

interface IInplaceProps {
	open?: boolean;
	onOpen?: () => void;
	onClose?: () => void;

	children: ReactElement[];
}

export const Inplace: FC<IInplaceProps> = ({
	open = false,
	onOpen,
	onClose,
	children,
}) => {
	let display: ReactElement = children[0];
	let content: ReactElement = children[1];

	if (display.type !== InplaceDisplay || content.type !== InplaceContent) {
		return null;
	}

	const [isOpen, setIsOpen] = useState(open);

	useEffect(() => {
		if (isOpen !== open) {
			setIsOpen(open);
		}
	}, [open]);

	const onOpenContent = () => {
		setIsOpen(true);

		if (onOpen) {
			onOpen();
		}
	};

	const onCloseContent = () => {
		setIsOpen(false);

		if (onClose) {
			onClose();
		}
	};

	const refContainer = useRef<HTMLDivElement>(null);

	useClickAway(refContainer, onCloseContent);

	return (
		<div className={'inplace'} ref={refContainer}>
			{!isOpen ? (
				<div className={'inplace-display'} onClick={onOpenContent}>
					{display}
				</div>
			) : (
				<div className={'inplace-content'}>
					{content}
				</div>
			)}
		</div>
	);
};