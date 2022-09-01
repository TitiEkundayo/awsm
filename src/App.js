import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GuestTopMenu, MenuNavbar } from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/Homepage";
import BookPage from "./pages/Bookpage";
import CommunityPage from "./pages/Communitypage";
import DashboardPage from "./pages/Dashboardpage";
import PodcastPage from "./pages/Podcastpage";

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
