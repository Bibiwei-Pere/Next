import "../../0x1_assets/landingPageImg/bg-pattern-body-desktop.svg";
import "./Testimonial.scss";
import { testimonialDetails } from "../../0x1_assets/data/landingPageData";

const Testimonial = () => {
	return (
		<div className="testimonial">
			<h2>What they've said</h2>
			<div className="carousel">
				<div className="slider">
					{testimonialDetails.map((item) => {
						return (
							<div>
								<span className="image">
									<img src={item.img} alt="img" />
								</span>
								<h4>{item.name}</h4>
								<p>"{item.text}"</p>
							</div>
						);
					})}
				</div>
				<div className="slider">
					{testimonialDetails.map((item) => {
						return (
							<div>
								<span className="image">
									<img src={item.img} alt="img" />
								</span>
								<h4>{item.name}</h4>
								<p>"{item.text}"</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
