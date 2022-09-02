import { EventCard, EventTestimonialCard } from "../components/Cards";
import { GuestTopMenu, MenuNavbar } from "../components/Navbar";
import eventData from "../data/eventData.json";

const EventsPage = () => {
	return (
		<>
			<GuestTopMenu />
			<MenuNavbar />
			<EventsNavbar />
			<EventList />
			<EventTestimonials />
			<EventFAQs />
		</>
	);
};

const EventsNavbar = () => {
	return (
		<ul className="nav d-flex justify-content-center justify-content-around mt-5 pt-3">
			<li className="nav-item">
				<a className="nav-link active text-white" aria-current="page" href="#">
					Upcoming Events
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-white" href="#">
					Past Events
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-white" href="#">
					Trips
				</a>
			</li>
		</ul>
	);
};

const EventList = () => {
	return (
		<div className="mt-2 pt-2 mb-5 pb-4 ms-4">
			{eventData.eventCardDetails.map((singleCardDetail) => {
				return (
					<div key={singleCardDetail.id} className="mt-4">
						<EventCard {...singleCardDetail}></EventCard>
					</div>
				);
			})}
		</div>
	);
};

const EventTestimonials = () => {
	return (
		<>
			<h3 className="yellowText pt-5 ms-3">Testimonials</h3>
			<div className="container">
				<div className="mt-2 pt-2 mb-5 pb-4 row">
					{eventData.eventCardDetails.map((singleCardDetail) => {
						return (
							<div key={singleCardDetail.id} className="mt-4 mx-auto col-md-4">
								<EventTestimonialCard
									{...singleCardDetail}></EventTestimonialCard>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

const EventFAQs = () => {
	return (
		<div className="ms-3">
			<h3 className="yellowText pt-5 mb-3">Short Questionnaire</h3>
			<div className="mt-2 mb-5 w-50 text-start me-auto" id="accordionExample">
				<div className="accordion-item mb-3">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed text-white opacity-75"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseOne"
							aria-expanded="false"
							aria-controls="collapseTwo">
							What kind of event would you like us to host?
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fillRule="currentColor"
								className="bi bi-chevron-down text-white opacity-75 ms-1"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</h2>

					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div className="accordion-item mb-3">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed text-white opacity-75"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseTwo"
							aria-expanded="false"
							aria-controls="collapseTwo">
							What kind of event would you like us to host?
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fillRule="currentColor"
								className="bi bi-chevron-down text-white opacity-75 ms-1"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</h2>

					<div
						id="collapseTwo"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>

				<div className="accordion-item mb-3">
					<h2 className="accordion-header" id="headingTwo">
						<button
							className="accordion-button collapsed text-white opacity-75"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapseThree"
							aria-expanded="false"
							aria-controls="collapseTwo">
							What kind of event would you like us to host?
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fillRule="currentColor"
								className="bi bi-chevron-down text-white opacity-75 ms-1"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
								/>
							</svg>
						</button>
					</h2>

					<div
						id="collapseOne"
						className="accordion-collapse collapse"
						aria-labelledby="headingTwo"
						data-bs-parent="#accordionExample">
						<div className="accordion-body">
							<strong>This is the second item's accordion body.</strong> It is
							hidden by default, until the collapse plugin adds the appropriate
							classes that we use to style each element. These classes control
							the overall appearance, as well as the showing and hiding via CSS
							transitions. You can modify any of this with custom CSS or
							overriding our default variables. It's also worth noting that just
							about any HTML can go within the <code>.accordion-body</code>,
							though the transition does limit overflow.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventsPage;
