import { FC, ReactElement } from "react";
import { AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";

import { useFoxKitContext } from "@ui-kit/context/fox-kit/FoxKitContex";
import { ModalBackground } from "@ui-kit/modal/ui/background/ModalBackground";
import { ModalHeader } from "@ui-kit/modal/ui/header/ModalHeader";
import { ModalFooter } from "@ui-kit/modal/ui/footer/ModalFooter";
import { ModalContent } from "@ui-kit/modal/ui/content/ModalContent";
import { ModalBody } from "@ui-kit/modal/ui/body/ModalBody";

import "@ui-kit/modal/ui/Modal.scss";

interface IModalComponents {
	Header: typeof ModalHeader;
	Footer: typeof ModalFooter;
	Body: typeof ModalBody;
}

interface IModalProps {
	visible?: boolean;
	className?: string;
	children?: ReactElement | ReactElement[];
	pt?: {
		back?: string
	};
}

export const Modal: FC<IModalProps> & IModalComponents = ({
	visible,
	className,
	children,
	pt,
}) => {
	const { refModalContainer } = useFoxKitContext();
	let Header: ReactElement | null = null;
	let Body: ReactElement | null = null;
	let Footer: ReactElement | null = null;

	if (children) {
		if (Array.isArray(children)) {
			for (const child of children) {
				if (child.type == Modal.Header) {
					Header = child;
				}

				if (child.type == Modal.Footer) {
					Footer = child;
				}

				if (child.type == Modal.Body) {
					Body = child;
				}
			}
		} else {
			if (children.type == Modal.Header) {
				Header = children;
			}

			if (children.type == Modal.Footer) {
				Footer = children;
			}

			if (children.type == Modal.Body) {
				Body = children;
			}
		}
	}

	if (!refModalContainer) {
		return null;
	}

	return createPortal(
		<AnimatePresence>
			{visible ? (
				<ModalBackground className={pt?.back}>
					<ModalContent className={className}>
						{Header}
						{Body}
						{Footer}
					</ModalContent>
				</ModalBackground>
			) : null}
		</AnimatePresence>,
		refModalContainer,
	);
};

Modal.Header = ModalHeader;

Modal.Footer = ModalFooter;

Modal.Body = ModalBody;
