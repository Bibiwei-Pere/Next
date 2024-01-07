import "./Footer.scss";
import Logo from "../0_component/logo/Logo";
import { Link } from "react-router-dom";
import Mail from "@mui/icons-material/Mail";
import { footerDetails, socialDetails } from "../../0x1_assets/data/landingPageData";

const Footer = () => {
	return (
		<div className="footers">
			<div className="footer">
				<Logo />
				<div className="centerMenu">
					{footerDetails.map((items) => {
						return (
							<div className="container">
								{items.centerMenu1?.map((item) => {
									return (
										<div>
											<Link to={item.url} className="link">
												{item.title}
											</Link>
										</div>
									);
								})}
								{items.centerMenu2?.map((item) => {
									return (
										<div>
											<Link to={item.url} className="link">
												{item.title}
											</Link>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
				<div className="socials">
					<span>
						<input type="text" placeholder="Updates in your inbox..." />
						<div className="icon">
							<Mail />
						</div>
					</span>
					<div className="wrapper">
						{socialDetails.map((social) => {
							return (
								<div>
									<Link to={social.url} className="link">
										{<social.title />}
									</Link>
								</div>
							);
						})}
					</div>
					<p>Copyright 2020. All Rights Reserved</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
