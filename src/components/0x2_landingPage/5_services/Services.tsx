import { Link } from "react-router-dom";
import "./Services.scss";
import { services } from "../../0x1_assets/data/landingPageData";
import { Reveal1 } from "../0_component/animate/Reveal";

const Services = () => {
	return (
		<div className="services">
			<h2>Services we offer</h2>
			<div className="service">
				{services.map((service) => {
					return (
						<div className="content">
							<span>
								<h2>{service.title}</h2>
								<Reveal1>
									<p>{service.text}</p>
								</Reveal1>
								<Link to="/contact" className="btn">
									Learn more
								</Link>
							</span>
							<div className="img">
								<img src={service.img} alt="service" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Services;
