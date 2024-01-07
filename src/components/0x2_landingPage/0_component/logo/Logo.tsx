import "./Logo.scss";
import logo from "../../../0x1_assets/landingPageImg/logo_1.png";

const Logo = () => {
	return (
		<div className="logo">
			<img src={logo} alt="logo" /> <h4>next</h4>
		</div>
	);
};

export default Logo;
