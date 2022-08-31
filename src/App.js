import { GuestTopMenu, MenuNavbar } from "./components/Navbar";
import Homepage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import Footer from "./components/Footer";
import PodcastPage from "./pages/PodcastPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			{/* <GuestTopMenu />
			<MenuNavbar /> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="bookpage" element={<BookPage />} />
				<Route path="podcastpage" element={<PodcastPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
