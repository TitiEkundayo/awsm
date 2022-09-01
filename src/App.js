import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestTopMenu, MenuNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import BookPage from "./pages/BookPage";
import CommunityPage from "./pages/CommunityPage";
import DashboardPage from "./pages/DashboardPage";
import PodcastPage from "./pages/PodcastPage";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
