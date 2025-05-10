import { ZIndex } from "@lib-enums/enums";
import { useFoxKitContext } from "@ui-kit/context/fox-kit/FoxKitContex";

import '@ui-kit/context/fox-kit/modal-container/FoxKitContextModalContainer.scss';

export const FoxKitContextModalContainer = () => {
	const { setRefModalContainer } = useFoxKitContext();

	return (
		<div
			className={'fox-kit-context-modal-container'}
			style={{ zIndex: ZIndex.zIndexModal }}
			ref={setRefModalContainer}
		/>
	);
};