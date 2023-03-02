import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Game, Home, NotFound, Setup } from "./pages";
import { Layout } from "./components";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="game" element={<Game />} />
					<Route path="setup" element={<Setup />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
