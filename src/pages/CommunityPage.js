import { MembershipBenefitCard } from "../components/Cards";
import { CommunityHero } from "../components/Heros";
import commitmentSectionImg from "../images/communityPageImgs/commitmentSectionImg.png";
import communityBenefitData from "../data/communityBenefitData.json";

const CommunityPage = () => {
	return (
		<div>
			<CommunityHero />

			<section className="container mt-5 pt-5">
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<h1>Our Commitment</h1>
						<p className="">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non
							sapiente voluptas, necessitatibus eligendi natus quis voluptatum
							repudiandae deserunt unde eos!
						</p>
					</div>

					<div className="col-md-6 col-sm-12">
						<img src={commitmentSectionImg} alt="" className="w-75" />
					</div>
				</div>
			</section>

			{/* Membership Benefit Section Starts */}
			<section className="mt-5 pt-2 mb-5 container">
				<h2 className="text-center mt-5 pt-3 yellowText ">
					Membership Benefits
				</h2>
				<div className="row ">
					{communityBenefitData.MembershipBenefitCardDetails.map(
						(singleCardDetail) => {
							return (
								<div
									className="col-lg-4 col-md-4 g-4 d-flex justify-content-evenly"
									key={singleCardDetail.id}>
									<MembershipBenefitCard
										{...singleCardDetail}></MembershipBenefitCard>
								</div>
							);
						}
					)}
				</div>
			</section>
			{/* Membership Benefit Section Ends */}
		</div>
	);
};

export default CommunityPage;
