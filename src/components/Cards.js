import React from "react";
import imagesfile from "../images/imagesfile.jpg";
import { PlayBtn } from "./Buttons";
import { DownloadBtn } from "./Buttons";
import { StarRatingIcon } from "./Icons";
import SocialMediaIcons from "./SocialMediaIcons";

export const HomePageCards = (props) => {
	const { img, cardTitle, cardText, Link } = props;
	return (
		<div className="card cardOutline" style={{ width: "18rem" }}>
			<img src={img} className="card-img-top" alt="a book" />
			<div className="card-body cardBody text-center">
				<h4 className="yellowText">{cardTitle}</h4>
				<p className="card-text">
					{cardText}
					<br />
					<span className="mutedText">{Link}</span>
				</p>
			</div>
		</div>
	);
};

export const BookTestimonialCards = (props) => {
	const { testimonial, testifiersImg, testifiersName, testifiersOccupation } =
		props;
	return (
		<div
			className="card-body cardBody cardOutline px-4 py-4"
			style={{ width: "18rem" }}>
			<p className="card-text text-center">{testimonial}</p>
			<div className="text-center pt-3">
				<img
					src={testifiersImg}
					className="circledImage mb-2"
					alt="testifier"
				/>
				<h5 className="yellowText mb-0">{testifiersName}</h5>
				<p className="mutedText">{testifiersOccupation}</p>
			</div>
		</div>
	);
};

export const PodcastCard = (props) => {
	const { podcastImg, podcastDescription, podcastPresenter } = props;
	return (
		<div className="card cardOutline wideCard">
			<div className="row g-0">
				<div className="col-md-5 col-sm-12">
					<img
						src={podcastImg}
						className="img-fluid rounded-start wideCardImg h-100 w-100"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody">
					{/* <div className="py-5 my-5 ms-5"> */}
					<div className="py-3 centerCardContent ps-3">
						<p>
							{podcastDescription}{" "}
							<span className="d-block yellowText">{podcastPresenter}</span>
						</p>
						{/* <p className="yellowText mb-3">{podcastPresenter}</p> */}

						<div className="d-flex">
							<PlayBtn />
							<DownloadBtn />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const MembershipBenefitCard = (props) => {
	const { memberImg, benefitTitle, benefitDescription } = props;
	return (
		<div
			className="card-body cardBody cardOutline px-3 py-5 container"
			style={{ width: "18rem" }}>
			<div className="d-flex justify-content-center">
				<img src={memberImg} className="memBenefitCard" alt="benefit" />
			</div>
			{/* <p className="card-text mt-3">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.{" "}
			</p> */}
			<div className="text-center">
				<h5 className="yellowText mt-3">{benefitTitle}</h5>
				{/* <p className="footerCEOText">Self-taught Instructor</p> */}
				<p className="card-text">{benefitDescription}</p>
			</div>
		</div>
	);
};

export const DashboardCard = () => {
	return (
		<div
			className="card-body cardBody cardOutline px-4 py-4"
			style={{ width: "18rem" }}>
			<div className="d-flex justify-content-center">
				<img src={imagesfile} className="memBenefitCard" alt="benefit" />
			</div>
			<div className=" mt-5">
				<h4 className="card-text whiteText mt-3">Teni Badmus</h4>
				<h5 className="yellowText mb-0">Web Developer</h5>
				<p className="mutedTexts">Nigeria,Lagos</p>
				<h5 className="whiteText mb-0">Personal Bio:</h5>
				<p className="whiteText">
					Dosamma. Plagon anang. Suprarad lanera. Athleisure Sara Gustafsson.
					Hår besor. Dock mysiv.
				</p>
			</div>
		</div>
	);
};

export const DashboardDetail = () => {
	return (
		<div className="" style={{ width: "18rem" }}>
			<div className="d-flex justify-content-center">
				<img
					src={imagesfile}
					className="memBenefitCard text-center"
					alt="benefit"
				/>
			</div>
			<div className=" mt-5">
				<h4 className="card-text whiteText mt-3">Teni Badmus</h4>
				<h5 className="yellowText mb-0">Web Developer</h5>
				<p className="mutedTexts">Nigeria,Lagos</p>
				<h5 className="whiteText mb-0">Personal Bio:</h5>
				<p className="whiteText">
					Dosamma. Plagon anang. Suprarad lanera. Athleisure Sara Gustafsson.
					Hår besor. Dock mysiv.
				</p>
			</div>
		</div>
	);
};

export const EventCard = () => {
	return (
		<div className="card cardOutline wideCard">
			<div className="row g-0">
				<div className="col-md-5 col-sm-12">
					<img
						src={imagesfile}
						className="img-fluid rounded-start h-100 w-100 wideCardImg"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody d-flex align-items-center px-5">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						dolor fuga facere!
					</p>
				</div>
			</div>
		</div>
	);
};

export const EventTestimonialCard = (props) => {
	const { benefitDescription, eventImg } = props;
	return (
		<div
			className="card-body cardBody cardOutline px-2 pt-2 pb-4"
			style={{ width: "18rem" }}>
			<p className="card-text mt-3">{benefitDescription}</p>

			<div className="d-flex justify-content-center">
				<img src={eventImg} className="memBenefitCard" alt="benefit" />
			</div>
		</div>
	);
};

export const MemberProfileCard = (props) => {
	const { membersName, membersOccupation, membersBio, membersImg } = props;
	return (
		<div className="card cardOutline">
			<div className="row g-0 leftSideWideCard">
				<div className="col-md-5 col-sm-12 mt-4 d-flex justify-content-center align-items-start">
					<img
						src={membersImg}
						className="img-fluid rounded-circle wideCardImg"
						alt="podcast"
					/>
				</div>

				<div className="col-md-7 col-sm-12 cardBody p-3 d-flex align-items-start flex-column">
					<h4 className="card-text whiteText mt-3 mb-0">{membersName}</h4>
					<h5 className="yellowText mt-0">{membersOccupation}</h5>
					<p className="whiteText mt-3">{membersBio}</p>
					<h6 className="whiteText removeLineHeight mt-3">Ratings</h6>
					<div className="d-flex">
						<p className="mutedTexts me-2">7.5</p>
						<StarRatingIcon />
					</div>
					<div className="">
						<SocialMediaIcons />
					</div>
				</div>
			</div>
		</div>
	);
};

export const BlogCard = () => {
	return (
		<div className="card cardOutline" style={{ width: "20rem" }}>
			<img src={imagesfile} className="card-img-top" alt="..." />
			<div className="card-body text-start">
				<h4 className="card-text text-dark mt-3">Teni Badmus</h4>
				<p className="text-dark">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
					<br />
					<span className="inlineTextColor">Learn More</span>
				</p>
			</div>
		</div>
	);
};
