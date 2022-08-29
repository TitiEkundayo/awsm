// import "../sass_files/footer/footer.min.css";
import logo from "../images/logo/awsmLogo.png";
import { SubscribeForm } from "./Forms";
import SocialMediaIcons from "./SocialMediaIcons";
const Footer = () => {
	return (
		<footer className="bg-footer p-5">
			<div className="row align-items-baseline d-flex justify-content-around">
				<div className="col-md-6 col-sm-12 footerSignatureWidth">
					<p>
						“The AbegWhoSendMe journey proves that desperation breeds
						innovation, and The Power of Broke breaks it down for us with
						straight talk from a guy who knows what it takes to make something
						out of nothing.”
					</p>

					<div className="d-flex">
						<div>
							<img
								src={logo}
								className="rounded-circle"
								width="50px"
								alt="picture of a lady"
							/>
						</div>

						<div className="px-3">
							<h5 className="yellowText mb-0">Titilayo Ekundayo</h5>
							<p className="footerCEOText">
								CEO of the Abeg Who Send Me Journey
							</p>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-sm-12">
					<h5 className="text-white alignElements">
						Subscribe to our News Letter
					</h5>

					<div className="footerFormWidth">
						<SubscribeForm />
					</div>
					<div className="mt-3 ps-0 footerNavItems">
						<SocialMediaIcons />
					</div>
				</div>

				<div className="col-md-2 col-sm-12 supportColumn">
					<h5 className="text-white alignElements">Support</h5>
					<ul className="navbar-nav footerNavItems">
						<li className="nav-item">
							<a className="nav-link text-white-50 footerNavItem" href="#">
								Mentor
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white-50 footerNavItem" href="#">
								Volunteer
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link text-white-50 footerNavItem" href="#">
								Host an Event
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
