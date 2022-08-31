import { BuyBookBtn, WatchThrillerBtn } from "../components/Buttons";
import { GuestTopMenu, MenuNavbar } from "../components/Navbar";
import the_book from "../images/bookPageImgs/the_book.png";
import bookpageData from "../data/bookpageData.json";
import { BookTestimonialCards } from "../components/Cards";
import { AWSMMomentsForm } from "../components/Forms";

const BookPage = () => {
	return (
		<>
			{/* <section className=""> */}
			<GuestTopMenu />
			<MenuNavbar />

			<div className="d-flex container mt-5 pt-3 mb-5">
				<img src={the_book} className="w-25" alt="the Abeg Who Send Me" />
				<div className="w-25 ms-3">
					<p>
						Dodol dot.Enfierin näledes.Krotrehet niränas.Fär div.Emiia Svensson.
						Written by
						<span className="mutedText d-block">Titi Ekundayo</span>
					</p>

					<div className="">
						{/* solved the distance between them by adding me-3 to the WatchThrillerBtn component */}
						<WatchThrillerBtn />
						<BuyBookBtn />
					</div>

					<div className="d-flex align-items-baseline mt-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-unlock-fill text-white opacity-50 me-1"
							viewBox="0 0 16 16">
							<path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z" />
						</svg>

						<p>Free Chapter</p>
					</div>
					<hr className="text-white w-75 d-block mt-0 pt-0 opacity-25" />

					<div className="d-flex align-items-baseline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-download text-white opacity-50"
							viewBox="0 0 16 16">
							<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
							<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
						</svg>

						<p>Download</p>
					</div>
					<hr className="text-white w-75 d-block mt-0 pt-0 opacity-25" />

					<div className="d-flex align-items-baseline">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-file-earmark-text-fill text-white opacity-50"
							viewBox="0 0 16 16">
							<path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z" />
						</svg>

						<p>Save</p>
					</div>
					<hr className="text-white w-75 d-block mt-0 pt-0 opacity-25" />
				</div>
			</div>

			<div className="container">
				<h5 className="yellowText">Also available on:</h5>

				<div className="d-flex align-items-center">
					<h6 className="text-white my-auto">Ebooks: </h6>

					<ul className="nav">
						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Okadabooks
							</a>
						</li>

						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Ravenheights
							</a>
						</li>

						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Amazon
							</a>
						</li>
					</ul>
				</div>

				<div className="d-flex align-items-center">
					<h6 className="text-white my-auto">Audiobooks: </h6>

					<ul className="nav">
						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Audible
							</a>
						</li>

						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Apple Music
							</a>
						</li>

						<li className="nav-item">
							<a href="#" className="nav-link text-white opacity-75">
								Spotify
							</a>
						</li>
					</ul>
				</div>
			</div>

			{/* Other Sections Starts */}
			<div className="container">
				{/* Aboutabegwhosend Section Starts */}
				<h2 className="text-center mt-5 pt-5 mb-4 yellowText ">
					About Abegwhosendme
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
				{/* Aboutabegwhosend Section Ends */}

				{/* Testimonial Section Starts */}
				<section className="mt-5 pt-3">
					<h2 className="text-center mt-5 pt-3 yellowText ">What We Offer</h2>
					<div className="row ">
						{bookpageData.bookTestimonialCardDetails.map(
							(singleTestimonialDetail) => {
								return (
									<div
										className="col-lg-4 col-md-4 g-4 d-flex justify-content-evenly"
										key={singleTestimonialDetail.id}>
										<BookTestimonialCards
											{...singleTestimonialDetail}></BookTestimonialCards>
									</div>
								);
							}
						)}
					</div>
				</section>
				{/* Testimonial Section Ends */}

				{/* AbegwhosendmeMoments Form Section Starts */}
				{/* give this section a width in the media query */}
				<section className="mt-5 pt-3 mb-5 pb-5">
					<h2 className="mt-5 pt-3 text-center yellowText">
						Tell Us About Your #Abegwhosendme# Moments
					</h2>

					<div className="d-flex justify-content-center">
						<AWSMMomentsForm />
					</div>
				</section>
				{/* AbegwhosendmeMoments Form Section Ends */}
			</div>
			{/* Other Sections Ends */}
			{/* </section> */}
		</>
	);
};

export default BookPage;
