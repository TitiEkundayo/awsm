import { MemberProfileCard } from "../components/Cards";
import { PodcastHero } from "../components/Heros";
import communityProfileData from "../data/communityProfileData.json";

const CommunityMembersProfile = () => {
	return (
		<div>
			<PodcastHero />
			<CommunityCategoryNavbar />
			<MembersProfile />
		</div>
	);
};

const CommunityCategoryNavbar = () => {
	return (
		<ul className="nav d-flex justify-content-end mt-5 pt-3">
			<li className="nav-item">
				<a className="nav-link active text-white" aria-current="page" href="#">
					All
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-white" href="#">
					Web Dev
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-white" href="#">
					Human Resources
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-white" href="#">
					Data Analytics
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link text-warning yellowText" href="#">
					Follow +
				</a>
			</li>
		</ul>
	);
};

const MembersProfile = () => {
	return (
		<div className="container-fluid">
			<div className="mt-2 pt-2 mb-5 pb-4 ms-4 row">
				{communityProfileData.communityMemberCardDetails.map(
					(singleCardDetail) => {
						return (
							<div
								key={singleCardDetail.id}
								className="mt-4 col-md-6 col-sm-12">
								<MemberProfileCard {...singleCardDetail}></MemberProfileCard>
							</div>
						);
					}
				)}
			</div>
		</div>
	);
};

export default CommunityMembersProfile;
