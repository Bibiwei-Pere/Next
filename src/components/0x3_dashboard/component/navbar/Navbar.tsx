import "./navbar.scss";
import User1 from "../../../0x1_assets/landingPageImg/user.jpg";
import Setting from "@mui/icons-material/Settings";
import Search from "@mui/icons-material/Search";
import Notification from "@mui/icons-material/Notifications";
import Arrow from "@mui/icons-material/ArrowDropUp";
import { SetStateAction, useEffect, useState } from "react";
import Notifications from "../notifications/Notifications";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Logo from "../../../0x2_landingPage/0_component/logo/Logo";
import Logout from "@mui/icons-material/Logout";

const Navbar = () => {
	const [notifications, notificationsChange] = useState(false);
	const [number, numberChange] = useState(Number);
	let username = sessionStorage.getItem("username");
	const queryClient = new QueryClient();

	useEffect(() => {
		if (notifications === false) {
			fetch(`https://next-api-7kot.onrender.com/users/${username}`)
				.then((res) => res.json())
				.then((resp) => {
					numberChange(resp.notifications.length);
				});
		}
		if (notifications === true) {
			fetch(`https://next-api-7kot.onrender.com/users/${username}`)
				.then((res) => res.json())
				.then((resp) => {
					numberChange(resp.notifications.length);
				});
		} else {
			fetch(`https://next-api-7kot.onrender.com/users/${username}`)
				.then((res) => res.json())
				.then((resp) => {
					numberChange(resp.notifications.length);
				});
		}
	}, [username]);

	const updateNotificationsCount = (count: SetStateAction<number>) => {
		numberChange(count);
	};

	return (
		<div className="navbar">
			<div>
				<div className="logo_container">
					<Logo />
				</div>
				<div className="user_container">
					<h3>Welcome back, {username}!</h3>
					<span>Take a look at our updated dashboard</span>
				</div>
			</div>
			<div className="icons">
				<div className="search">
					<Search />
				</div>
				<div className="notification" onClick={() => notificationsChange(true)}>
					<Notification />
					<span>{number}</span>
					{notifications && (
						<div className="arrow">
							<Arrow />
						</div>
					)}
				</div>
				<div className="user">
					<img src={User1} alt="User1" />
					<span>{username}</span>
				</div>
				<Link to="/dashboard/settings" className="settings">
					<Setting />
				</Link>
				<Link to="/" className="logout">
					<Logout />
				</Link>
			</div>
			<QueryClientProvider client={queryClient}>{notifications && <Notifications notificationsChange={notificationsChange} updateNotificationsCount={updateNotificationsCount} />}</QueryClientProvider>
		</div>
	);
};

export default Navbar;
