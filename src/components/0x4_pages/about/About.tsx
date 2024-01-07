import { Link } from "react-router-dom";
import Footer from "../../0x2_landingPage/10_footer/Footer";
import Header from "../../0x2_landingPage/1_header/Header";
import "./About.scss";
import { Reveal1, Reveal3 } from "../../0x2_landingPage/0_component/animate/Reveal";
import { aboutData } from "../../0x1_assets/data/landingPageData";

const About = () => {
	return (
		<div>
			<Header />
			<div className="about_section"></div>
			<div className="about">
				<h3>About us</h3>
				{aboutData.map((item) => {
					return (
						<div>
							{item.object1?.map((object1) => {
								return (
									<Reveal1>
										<p>{object1.text}</p>
									</Reveal1>
								);
							})}
							<p>
								{item.object2?.map((object2) => {
									return (
										<Reveal3>
											<ul className="box">
												<span>{object2.text}</span>
												{object2.list.map((item) => {
													return <li>{item.text}</li>;
												})}
											</ul>
										</Reveal3>
									);
								})}
							</p>
							{item.object3?.map((object3) => {
								return (
									<Reveal1>
										<p>{object3.text}</p>
									</Reveal1>
								);
							})}
							<p>
								{item.object4?.map((wrapper) => {
									return (
										<Reveal3>
											<ul className="box">
												<span>{wrapper.heading}</span>
												<p>{wrapper.text}</p>
												{wrapper.list.map((item) => {
													return <li>{item.li}</li>;
												})}
											</ul>
										</Reveal3>
									);
								})}
							</p>
							<div className="grid">
								{item.object5?.map((object5) => {
									return (
										<span>
											<h4>{object5.h3}</h4>
											<p>{object5.p}</p>
										</span>
									);
								})}
							</div>

							{item.object6?.map((object6) => {
								return (
									<Reveal1>
										<p>{object6.text}</p>
									</Reveal1>
								);
							})}
							{item.object7?.map((object7) => {
								return (
									<span>
										<h4>{object7.h4}</h4>
										<p>{object7.p2}</p>
									</span>
								);
							})}
						</div>
					);
				})}
				<div className="btn">
					<Link to="/login">Read More on risk management</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default About;
