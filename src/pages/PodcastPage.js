import { GuestTopMenu, MenuNavbar } from "../components/Navbar";
import podcastData from "../data/podcastData.json";
import { PodcastCard } from "../components/Cards";
import {
	AppleTunesBtn,
	AudioMackBtn,
	SpotifyBtn,
	YouTubeBtn,
} from "../components/Buttons";
import { PodcastHero } from "../components/Heros";

const PodcastPage = () => {
	return (
		<>
			<PodcastHero />
			{/* Welcome Letter Section Starts */}
			<section className="container mb-5 pb-5">
				<h2 className="text-center mt-5 pt-5 mb-4 yellowText ">
					A Welcome Letter
				</h2>
				<p>
					Infran Foppatoffel. Linus Lundin mukbang. Esont dil. Divis mack.
					Aliskap. Larat jän. Nyrade. Pirtad sera. Pev. Ulrika Mårtensson loba.
					Jämevis. Usk tret. Bere os. Aposocial dektig. Kanas sonade. Previs.
					Brand safety penyre. Synys pogt. Sanat. Kajyra chatbots. Refaktisk.
					Berit Forsberg sasin. Autosining Sebastian Holmberg. Krodat dirade.
					Olivia Isaksson mikrokarade. Poren. Monos Inga Norberg. Stenosåbelt.
					Ening personalisering. Sisk. Lena Jonasson astrovinde. Sygt or. Hånat
					monor. Rune Jonasson tänade. ltralig suprande. Lavis kurtad. Krov
					prossa. Marcus Sandström <span className="mutedText">Learn More</span>{" "}
					.
				</p>
			</section>
			{/* Welcome Letter Section Ends */}

			{/* Podcast List Section Starts */}
			<section className="container mb-5 pb-5">
				<form className="d-flex align-items-baseline pb-5 mb-2">
					{/* <svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="currentColor"
						class="bi bi-search text-white opacity-50"
						viewBox="0 0 16 16">
						<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
					</svg> */}
					<input
						type="search"
						className="form-control w-25 formField"
						placeholder="Search"
						aria-label="Search"
					/>
				</form>

				{/* remove these podcast buttons in the second column, there look redundant. place them inside the card */}
				{/* <div className="container d-sm-flex justify-contetn"> */}
				<div className="">
					{podcastData.podcastCardDetails.map((singlePodcast) => {
						return (
							<div className="mb-5" key={singlePodcast.id}>
								<PodcastCard {...singlePodcast}></PodcastCard>
							</div>
						);
					})}

					{/* <div className="col-md-4 col-sm-12">
						<SpotifyBtn />
						<AudioMackBtn />
						<AppleTunesBtn />
						<YouTubeBtn />
					</div> */}
				</div>
				{/* </div> */}
			</section>

			{/* Podcast List Section Ends */}
		</>
	);
};

export default PodcastPage;
