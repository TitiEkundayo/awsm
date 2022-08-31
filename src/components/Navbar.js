import React from "react";
import logo from "../images/logo/awsmLogo.png";
import menuCloseIcon from "../images/menuIcons/menuCloseIcon.png";
import menuOpenIcon from "../images/menuIcons/menuOpenIcon.png";
import SocialMediaIcons from "../components/SocialMediaIcons";
import { Link } from "react-router-dom";

export const GuestTopMenu = () => {
	return (
		<div className="container-fluid d-flex justify-content-between align-items-center">
			<Link to="/" className="navbar-brand">
				<img src={logo} width="100px" className="logoStyle" alt="logo" />
			</Link>
			<div className="pe-4">
				<SocialMediaIcons />
			</div>
		</div>
	);
};

export const LoggedInTopMenu = () => {
	return (
		<div className="p-3">
			<div className="container-fluid d-flex align-items-center">
				<img src={logo} width="80" alt="logo" />

				<ul className="ms-auto">
					<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle text-white bg-dark px-3 py-2"
							href="#"
							id="offcanvasNavbarDropdown"
							role="button"
							data-bs-toggle="dropdown"
							aria-expanded="false">
							Find a Mentor
						</a>
						<ul
							className="dropdown-menu bg-dark"
							aria-labelledby="offcanvasNavbarDropdown">
							<li>
								<a className="dropdown-item text-white" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item text-white" href="#">
									Another action
								</a>
							</li>
							<li>
								<hr className="dropdown-divider" />
							</li>
							<li>
								<a className="dropdown-item text-white" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</li>
				</ul>
				<img src={logo} className="rounded-circle" width="80" alt="" />
			</div>

			<div className="d-flex flex-row-reverse me-4">
				<SocialMediaIcons />
			</div>
		</div>
	);
};

export const MenuNavbar = () => {
	return (
		<header>
			<nav className="navbar fixed-top m-4 pt-5 mt-5 ms-4">
				<div className="container-fluid">
					{/* <div className="d-flex align-items-center"> */}
					<img
						src={menuCloseIcon}
						data-bs-toggle="offcanvas"
						href="#offcanvasExample"
						aria-controls="offcanvasExample"
						alt="menu open icon"
					/>
					{/* <p className="text-white me-5">Menu</p> */}
					{/* </div> */}

					<div
						className="offcanvas offcanvas-start"
						tabindex="-1"
						id="offcanvasExample">
						<div className="offcanvas-header">
							<img
								src={menuOpenIcon}
								data-bs-dismiss="offcanvas"
								aria-label="Close"
								className="m-3"
								alt="menu close icon"
							/>
							{/* <p className="text-white me-5">Menu</p> */}
						</div>
						<div className="offcanvas-body w-sm-25">
							<ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
								<li className="nav-item d-flex align-items-stretch">
									<Link
										to="/bookpage"
										className="nav-link active text-white"
										aria-current="page"
										href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-book mx-3"
											viewBox="0 0 16 16">
											<path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
										</svg>
										Book
									</Link>
								</li>

								<li className="nav-item dropdown">
									<a
										className="nav-link dropdown-toggle text-white"
										href="#"
										id="offcanvasNavbarDropdown"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-people mx-3"
											viewBox="0 0 16 16">
											<path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
										</svg>
										Community
									</a>
									<ul
										className="dropdown-menu bg-dark"
										aria-labelledby="offcanvasNavbarDropdown">
										<li>
											<a className="dropdown-item text-white" href="#">
												Action
											</a>
										</li>
										<li>
											<a className="dropdown-item text-white" href="#">
												Another action
											</a>
										</li>
										<li>
											<hr className="dropdown-divider" />
										</li>
										<li>
											<a className="dropdown-item text-white" href="#">
												Something else here
											</a>
										</li>
									</ul>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-journals mx-3"
											viewBox="0 0 16 16">
											<path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2z" />
											<path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0z" />
										</svg>
										Resources
									</a>
								</li>

								<li className="nav-item">
									<Link
										to="/podcastpage"
										className="nav-link text-white"
										href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-broadcast mx-3"
											viewBox="0 0 16 16">
											<path d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
										</svg>
										Podcast
									</Link>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-headset mx-3"
											viewBox="0 0 16 16">
											<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z" />
										</svg>
										Consulting
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-person mx-3"
											viewBox="0 0 16 16">
											<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
										</svg>
										About
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-calendar3 mx-3"
											viewBox="0 0 16 16">
											<path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
											<path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
										</svg>
										Event
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-postcard mx-3"
											viewBox="0 0 16 16">
											<path
												fill-rule="evenodd"
												d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4Zm7.5.5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7ZM2 5.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1H2.5a.5.5 0 0 1-.5-.5ZM10.5 5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3ZM13 8h-2V6h2v2Z"
											/>
										</svg>
										Blog
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-person-rolodex mx-3"
											viewBox="0 0 16 16">
											<path d="M8 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
											<path d="M1 1a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h.5a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5.5.5 0 0 1 1 0 .5.5 0 0 0 .5.5h.5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6.707L6 1.293A1 1 0 0 0 5.293 1H1Zm0 1h4.293L6 2.707A1 1 0 0 0 6.707 3H15v10h-.085a1.5 1.5 0 0 0-2.4-.63C11.885 11.223 10.554 10 8 10c-2.555 0-3.886 1.224-4.514 2.37a1.5 1.5 0 0 0-2.4.63H1V2Z" />
										</svg>
										Contact
									</a>
								</li>

								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="currentColor"
											className="bi bi-box-arrow-in-right mx-3"
											viewBox="0 0 16 16">
											<path
												fill-rule="evenodd"
												d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
											/>
											<path
												fill-rule="evenodd"
												d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
											/>
										</svg>
										Login
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			{/* <p className="text-white">Menu</p> */}
		</header>
	);
};
