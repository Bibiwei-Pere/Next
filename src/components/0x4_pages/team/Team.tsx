import Footer from "../../0x2_landingPage/10_footer/Footer";
import Header from "../../0x2_landingPage/1_header/Header";
import "./Team.scss";
import { Reveal1, Reveal3 } from "../../0x2_landingPage/0_component/animate/Reveal";
import { teamData } from "../../0x1_assets/data/landingPageData";

const Team = () => {
	return (
		<div>
			<Header />
			<div className="team_section"></div>
			<div className="team">
				<div className="centre_text">
					<h3>Our goal is to give you a high profit return with a little investment without you having the techncical know how on how the markets work.</h3>
					<p>To achieve this, we have formed a team of the most skilled and experienced professionals available, making them available to all clients.</p>
				</div>
				{teamData.map((item) => {
					return (
						<div>
							<div className="container">
								{item.object1?.map((object1) => {
									return (
										<Reveal3>
											<div className="box">
												<img src={object1.img} alt="Team members" />
												<p>{object1.text}</p>
											</div>
										</Reveal3>
									);
								})}
							</div>
							<div className="wrapper">
								{item.object2?.map((object1) => {
									return (
										<Reveal1>
											<div className="box">
												<p>{object1.text}</p>
											</div>
										</Reveal1>
									);
								})}
							</div>
							{item.object3?.map((object3) => {
								return (
									<span>
										<h4 className="heading">{object3.heading}</h4>
										<div className="grid">
											{object3.list.map((item) => {
												return (
													<div className="box">
														<img src={item.img} alt="team members" />
														<div className="name">
															<h3>{item.h3}</h3>
															<span>{item.p}</span>
														</div>
														<p>{item.text}</p>
													</div>
												);
											})}
										</div>
									</span>
								);
							})}
							{item.object4?.map((object4) => {
								return (
									<Reveal1>
										<p>{object4.text}</p>
									</Reveal1>
								);
							})}
						</div>
					);
				})}
			</div>
			<Footer />
		</div>
	);
};

export default Team;
