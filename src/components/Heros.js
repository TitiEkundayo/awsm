import React from "react";
import { GuestTopMenu } from "./Navbar";
import { MenuNavbar } from "./Navbar";
import { JoinUsBtn, SignUpBtn } from "./Buttons";
import homeHeroImg from "../images/heroImages/homeHeroImg.png";
import podcastHeroImg from "../images/heroImages/podcastHeroImg.png";

export const HomeHero = () => {
	return (
		<header style={homeHeroImgStyle} className="text-white">
			<GuestTopMenu />
			<MenuNavbar />
			<div className="text-center mt-5 pt-5">
				<h1 className="">Join Us</h1>
				<JoinUsBtn />
			</div>
		</header>
	);
};

export const PodcastHero = () => {
	return (
		<header style={podcastHeroImgStyle} className="text-white">
			<GuestTopMenu />
			<MenuNavbar />
		</header>
	);
};

export const CommunityHero = () => {
	return (
		<div>
			<header style={podcastHeroImgStyle} className="text-white">
				<GuestTopMenu />
				<MenuNavbar />
				<div className="mt-5 pt-5 ps-3 ms-4 w-75 container-fluid">
					<p className="">
						Pinterest. Kufarar CX. Linnéa Lindqvist lyjangen. Berade lagt.
						Decikun sut. Hemester åska.
					</p>
					<JoinUsBtn />
				</div>
			</header>
		</div>
	);
};

const homeHeroImgStyle = {
	backgroundImage: `url(${homeHeroImg})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	height: "100vh",
	width: "100vw",
};

const podcastHeroImgStyle = {
	backgroundImage: `url(${podcastHeroImg})`,
	backgroundSize: "cover",
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	height: "75vh",
	width: "100vw",
};
