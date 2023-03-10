import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
				</Route>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
