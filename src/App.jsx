import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
