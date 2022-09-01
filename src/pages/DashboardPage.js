import {
	GuestTopMenu,
	LoggedInTopMenu,
	MenuNavbar,
} from "../components/Navbar";
import { DashboardCard, DashboardDetail } from "../components/Cards";
import { EditBtn, UpdateBtn } from "../components/Buttons";

const DashboardPage = () => {
	return (
		<div>
			{/* <LoggedInTopMenu /> */}
			<GuestTopMenu />
			<MenuNavbar />
			<div className="container mt-4 pt-4 mb-5 pb-5">
				<div className="row d-none d-md-block">
					<div className="col-md-6 d-md-flex">
						<div className="me-5">
							<DashboardCard />
						</div>
						{/* <div className="col-md-6"> */}
						<div className="">
							<h5 className="yellowText">Work Experience</h5>
							<div className="mt-4">
								<h6 className="text-white opacity-75">
									Get lit Branding Company
								</h6>
								<p className="mutedTexts">
									36,Anthony,Lagos,Nigeria{" "}
									<span className="d-block">2012-2015</span>
								</p>
							</div>

							<div className="mt-4">
								<h6 className="text-white opacity-75">
									FastGrab Logistics Company
								</h6>
								<p className="mutedTexts">
									19,Obalende,Lagos,Nigeria
									<span className="d-block">2017-2019</span>
								</p>
							</div>

							<div className="mt-4">
								<h6 className="text-white opacity-75">EatBite Food Company</h6>
								<p className="mutedTexts">
									23,VI,Lagos,Nigeria
									<span className="d-block">2020-2022</span>
								</p>
							</div>
							<div className="d-flex">
								<UpdateBtn />
								<EditBtn />
							</div>
						</div>
					</div>
				</div>

				<div className="row d-md-none d-sm-block">
					<div className="col-md-6 d-md-flex">
						<div className="mb-5">
							<DashboardDetail />
						</div>
						{/* <div className="col-md-6"> */}
						<div className="">
							<h5 className="yellowText">Work Experience</h5>
							<ul className="mt-4">
								<li className="text-white opacity-75">
									Get lit Branding Company
									<span className="mutedTexts d-block">
										36,Anthony,Lagos,Nigeria{" "}
									</span>
									<span className="d-block">2012-2015</span>
								</li>
								{/* <li className="mt-4"> */}
								<li className="text-white opacity-75 mt-4">
									{/* <h6 className="text-white opacity-75"> */}
									FastGrab Logistics Company
									{/* </h6> */}
									<span className="mutedTexts d-block">
										19,Obalende,Lagos,Nigeria
									</span>
									<span className="d-block">2017-2019</span>
								</li>
								<li className="text-white opacity-75 mt-4">
									EatBite Food Company
									<span className="mutedTexts d-block">
										23,VI,Lagos,Nigeria
									</span>
									<span className="d-block">2020-2022</span>
								</li>
							</ul>
							<div className="">
								<UpdateBtn />
								<EditBtn />
							</div>
						</div>
						<div className="mt-5 container">
							<h5 className="yellowText">Contact Information</h5>
							<div className="d-flex">
								<p className="me-2">Phone Number: </p>
								<p>080*********</p>
							</div>
							<div className="d-flex">
								<p className="me-2">Contact Address: </p>
								<p>Surulere,Yaba,Lagos, Nigeria</p>
							</div>
							<div className="d-flex">
								<p className="me-2">Email: </p>
								<p>abcd@xyz.com</p>
							</div>
							<div className="d-flex">
								<p className="me-2">Personal Website: </p>
								<p>www.abcdefgh.com</p>
							</div>
							<div className="d-flex">
								<p className="me-2">Birthday: </p>
								<p>26, August 1975</p>
							</div>
							<div className="d-flex">
								<p className="me-2">Gender: </p>
								<p>Female</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DashboardPage;
