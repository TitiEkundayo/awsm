import { GuestTopMenu, MenuNavbar } from "./components/Navbar";
import Homepage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import Footer from "./components/Footer";
import PodcastPage from "./pages/PodcastPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
	return (
		<BrowserRouter>
			{/* <GuestTopMenu />
			<MenuNavbar /> */}
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="bookpage" element={<BookPage />} />
				<Route path="podcastpage" element={<PodcastPage />} />
				<Route path="communitypage" element={<CommunityPage />} />
				<Route path="dashboardpage" element={<DashboardPage />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
