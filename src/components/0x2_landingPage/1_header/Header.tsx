import { Link } from "react-router-dom";
import "./Header.scss";
import Logo from "../0_component/logo/Logo";
import { useEffect, useState } from "react";
import Hamburger from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

const Header = () => {
	const [scroll, setScroll] = useState(false);
	const [activeHamburger, setActiveHamburger] = useState(false);
	const [hide, setHide] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setScroll(true);
		} else {
			setScroll(false);
		}
	};
	return (
		<>
			<div className={`header ${scroll ? "scroll" : ""}`}>
				<Logo />
				<div className="centerMenu">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/team">Our team</Link>
						</li>
						<li>
							<Link to="/history">History</Link>
						</li>
					</ul>
				</div>
				<div className="buttons">
					<Link to="/login" className="btn">
						Log in
					</Link>
					<Link to="/register" className="btn">
						Sign up
					</Link>
				</div>
			</div>

			<div className={`mobile_menu ${scroll ? "scroll" : ""}`}>
				<Logo />
				<div>
					<div
						className={hide ? "hide" : "hamburger"}
						onClick={() => {
							setActiveHamburger(true);
							setHide(true);
						}}
					>
						<Hamburger />
					</div>
					{activeHamburger && (
						<div
							className={hide ? "hamburger" : "hide"}
							onClick={() => {
								setActiveHamburger(false);
								setHide(false);
							}}
						>
							<Close />
						</div>
					)}
					{activeHamburger && (
						<div className="menuContents">
							<div className="centerMenu">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/team">Our team</Link>
									</li>
									<li>
										<Link to="/history">History</Link>
									</li>
								</ul>
							</div>
							<div className="buttons">
								<Link to="/login" className="btn">
									Log in
								</Link>
								<Link to="/register" className="btn">
									Sign up
								</Link>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Header;
