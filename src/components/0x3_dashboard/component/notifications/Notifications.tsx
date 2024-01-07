import "./Notifications.scss";
import Close from "@mui/icons-material/Close";
import Delete from "@mui/icons-material/Delete";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	notificationsChange: React.Dispatch<React.SetStateAction<boolean>>;
	updateNotificationsCount: (count: number) => void;
}

interface Notification {
	id: number;
	title: string;
	date: string;
	message: string;
	author: string;
	color: string;
}

const Notifications = ({ notificationsChange, updateNotificationsCount }: Props) => {
	const [notifications, setNotifications] = useState<Notification[]>([]);

	const username = sessionStorage.getItem("username");
	const queryClient = useQueryClient();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`https://next-api-7kot.onrender.com/users/${username}`)
			.then((res) => res.json())
			.then((resp) => {
				setNotifications(resp.notifications);
			});
	}, [username]);

	const handleDelete = (id: number) => {
		const updatedNotifications = notifications.filter((notification) => notification.id !== id);
		setNotifications(updatedNotifications);
		updateNotificationsCount(updatedNotifications.length);
		fetch(`https://next-api-7kot.onrender.com/users/${username}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ notifications: updatedNotifications }),
		})
			.then(() => {
				queryClient.invalidateQueries([`${username}`]);
				navigate("/dashboard");
			})
			.catch((error) => {
				console.log(error);
			});
	};
	return (
		<div className="notifications">
			<div className="flex">
				<h4>Notifications</h4>
				<div className="close" onClick={() => notificationsChange(false)}>
					<Close />
				</div>
			</div>
			<div className="container">
				{notifications.map((notification, index) => {
					return (
						<div className="wrapper" key={index}>
							<button onClick={() => handleDelete(notification.id)}>
								<Delete />
							</button>
							<span>
								<span className="title" style={{ backgroundColor: notification.color }}>
									{notification.title}
								</span>
								<h5>{notification.date}</h5>
								<p className="text">{notification.message}</p>
								<p className="admin">{notification.author}</p>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Notifications;
