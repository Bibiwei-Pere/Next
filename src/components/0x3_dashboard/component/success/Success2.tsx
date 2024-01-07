import "./Success.scss";
import success2 from "../../../0x1_assets/svgAnimations/success2.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

interface Props {
	title: string;
	description: string;
	btn1: string;
	btn1Url: string;
}
const Success2 = ({ title, description, btn1, btn1Url }: Props) => {
	return (
		<div className="success">
			<div className="container">
				<div className="lottie">
					<Lottie animationData={success2} loop={true} />
				</div>
				<div>
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
				<span>
					<Link to={btn1Url} className="btn2">
						{btn1}
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Success2;
