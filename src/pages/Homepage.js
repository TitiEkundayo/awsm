import homeHeroImg from "../images/heroImages/homeHeroImg.png";
import { GuestTopMenu, MenuNavbar } from "../components/Navbar";
import { SignUpBtn } from "../components/Buttons";
import homepageData from "../data/homepageData.json";
import { HomePageCards } from "../components/Cards";
import { SubscribeForm } from "../components/Forms";
// import joinCreators from "";

const HomePage = () => {
	return (
		<div>
			{/* Hero Section Starts */}
			<header style={heroImg} className="text-white">
				<GuestTopMenu />
				<MenuNavbar />
				<div className="text-center mt-5 pt-5">
					<h1 className="">Join Us</h1>
					<SignUpBtn />
				</div>
			</header>
			{/* Hero Section Ends */}

			{/* Other Sections Starts */}
			<div className="container">
				{/* Welcome Letter Section Starts */}
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
				{/* Welcome Letter Section Ends */}

				{/* Benefit Section Starts */}
				<section className="mt-5 pt-3">
					<h2 className="text-center mt-5 pt-3 yellowText ">What We Offer</h2>
					<div className="row ">
						{homepageData.homepageCardDetails.map((singleCardDetail) => {
							return (
								<div
									className="col-lg-4 col-md-4 g-4 d-flex justify-content-evenly"
									key={singleCardDetail.id}>
									<HomePageCards {...singleCardDetail}></HomePageCards>
								</div>
							);
						})}
					</div>
				</section>
				{/* Benefit Section Ends */}

				{/* Subscribe Form Section Starts */}
				{/* give this section a width in the media query */}
				<section className="mt-5 pt-3 mb-5 pb-5">
					<h2 className="mt-5 pt-3 text-center yellowText">
						Subscribe to Our Newsletter
					</h2>

					<div className="text-center subscribeSectionForm mx-auto">
						<SubscribeForm />
					</div>
				</section>
				{/* Subscribe Form Section Ends */}
			</div>
			{/* Other Sections Ends */}
		</div>
	);
};

const heroImg = {
	backgroundImage: `url(${homeHeroImg})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	height: "100vh",
	width: "100vw",
};

export default HomePage;
