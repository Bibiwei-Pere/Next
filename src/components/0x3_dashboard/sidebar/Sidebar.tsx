import "./Sidebar.scss";
import { sidebarData } from "../../0x1_assets/data/dashboardData";
import { Link } from "react-router-dom";
import Logo from "../../0x2_landingPage/0_component/logo/Logo";
import Logout from "@mui/icons-material/Logout";
import { useState } from "react";

const Sidebar = () => {
	const [selected, setSelected] = useState(0);

	return (
		<div className="sidebar">
			<div className="orange_bg"></div>
			<div className="logo">
				<Logo />
			</div>
			<div className="container">
				{sidebarData.map((item, index) => {
					return (
						<div className={selected === index ? "item active" : "item"} key={index} onClick={() => setSelected(index)}>
							<Link to={item.url} className="wrapper">
								<span>{<item.icon />}</span>
								<span className="title">{item.title}</span>
							</Link>
						</div>
					);
				})}
			</div>
			<Link to="/login" className="logout">
				<span>
					<Logout />
				</span>
				<span className="title">Logout</span>
			</Link>
		</div>
	);
};

export default Sidebar;
