import "./Success.scss";
import success from "../../../0x1_assets/svgAnimations/success.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

interface Props {
	title: string;
	description: string;
	btn1: string;
	btn1Url: string;
	btn2: string;
	btn2Url: string;
}
const Success = ({ title, description, btn1, btn1Url, btn2, btn2Url }: Props) => {
	return (
		<div className="success">
			<div className="successContainer">
				<div className="lotties">
					<Lottie animationData={success} loop={true} />
				</div>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>
				<span>
					<Link to={btn1Url} className="btn1">
						{btn1}
					</Link>
					<Link to={btn2Url} className="btn2">
						{btn2}
					</Link>
				</span>
			</div>
		</div>
	);
};

export default Success;
