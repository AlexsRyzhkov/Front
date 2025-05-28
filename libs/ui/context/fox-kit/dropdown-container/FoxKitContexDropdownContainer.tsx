import { ZIndex } from "@lib-enums/enums";

import '@ui-kit/context/fox-kit/dropdown-container/FoxKitContexDropdownContainer.scss';
import { useFoxKitContext } from "@ui-kit/context/fox-kit/FoxKitContex";

export const FoxKitContextDropdownContainer = () => {
	const { setRefDropDownContainer } = useFoxKitContext();

	return (
		<div
			className={'fox-kit-context-dropdown-container'}
			style={{ zIndex: ZIndex.zIndexDropDown }}
			ref={setRefDropDownContainer}
		/>
	);
};