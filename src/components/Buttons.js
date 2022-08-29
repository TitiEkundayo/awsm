// play icon
import React from "react";
import spotify from "../images/podcastIcons/spotify.png";
import audiomack from "../images/podcastIcons/audiomack.png";
import appletunes from "../images/podcastIcons/appletunes.png";
import youtube from "../images/podcastIcons/youtube.png";

const PlayIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			fill="currentColor"
			className="bi bi-play text-white"
			viewBox="0 0 16 16">
			<path d="M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z" />
		</svg>
	);
};

// footer button
export const SubscribeBtn = () => {
	return (
		<button className="btn activeButton1 subscribeBtn text-white">
			Subscribe
		</button>
	);
};

// book page buttons
export const WatchThrillerBtn = () => {
	return (
		<button className="activeButton1 btn text-white">Watch Thriller</button>
	);
};

export const BuyBookBtn = () => {
	return <button className="btn activeButton2 text-white-50">Buy Book</button>;
};

export const SubmitBtn = () => {
	return <button className="btn activeButton1 p-2 text-white">Submit</button>;
};

// podcast page buttons
export const PlayBtn = () => {
	return (
		<button className="btn activeButton1 d-flex align-items-center justify-content-center text-white">
			<PlayIcon />
			Play
		</button>
	);
};

export const DownloadBtn = () => {
	return <button className="btn activeButton2 text-white-50">Download</button>;
};

// community page buttons
export const JoinUsBtn = () => {
	return <button className="btn activeButton1 text-white">Join Us</button>;
};

export const ReadMoreBtn = () => {
	return <button className="btn activeButton1 text-white">Read More</button>;
};

// dashboard page buttons
export const UploadBtn = () => {
	return <button className="btn activeButton1 text-white">Upload</button>;
};

export const EditBtn = () => {
	return <button className="btn activeButton2 px-5 text-white-50">Edit</button>;
};

// signup and login buttons
export const SignUpBtn = () => {
	return <button className="btn activeButton1 text-white">Sign Up</button>;
};

export const LoginBtn = () => {
	return <button className="btn activeButton1 text-white">Login</button>;
};

// podcast buttons
export const SpotifyBtn = () => {
	return (
		<button className="btn activeButton2 d-flex align-items-center p-2 text-white-50">
			<img src={spotify} alt="spotify logo" className="mx-2" />
			Spotify <PlayIcon />
		</button>
	);
};

export const AudioMackBtn = () => {
	return (
		<button className="btn activeButton2 d-flex align-items-center text-white-50">
			<img src={audiomack} alt="audiomack logo" className="mx-2" /> Audiomack{" "}
			<PlayIcon />
		</button>
		// audiomackIcon
	);
};

export const AppleTunesBtn = () => {
	return (
		<button className="btn activeButton2 d-flex align-items-center text-white-50">
			<img src={appletunes} alt="apple itunes logo" className="mx-2" />
			Apple Tunes <PlayIcon />
		</button>
	);
};

export const YouTubeBtn = () => {
	return (
		<button className="btn activeButton2 d-flex align-items-center text-white-50">
			<img src={youtube} alt="apple itunes logo" className="mx-2" /> YouTube
			<PlayIcon />
		</button>
	);
};
