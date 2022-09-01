import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestTopMenu, MenuNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BookPage from "./pages/BookPage";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";
import PodcastPage from "./pages/PodcastPage";

function App() {
	return (
		<BrowserRouter>
			{/* <GuestTopMenu />
			<MenuNavbar /> */}
			<Routes>
				<Route path="/" element={<HomePage />} />
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
