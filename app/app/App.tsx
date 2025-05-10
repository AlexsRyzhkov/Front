import { TanStackContext } from "@app/context/tanstack/TanStackContext";
import { FoxKitProvider } from "@ui-kit/context/fox-kit/FoxKitContex";

import '@app/App.scss';


function App() {
	return (
		<FoxKitProvider>
			<TanStackContext/>
		</FoxKitProvider>
	);
}

export default App;
