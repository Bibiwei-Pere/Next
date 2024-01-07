import { ToastContainer, toast } from "react-toastify";
import "./Tickets.scss";
import { useState } from "react";
import User from "@mui/icons-material/AccountCircle";
import Email from "@mui/icons-material/Email";
import Message from "@mui/icons-material/Message";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Faq from "../component/faq/Faq";
const Tickets = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const queryClient = useQueryClient();
	const username = sessionStorage.getItem("username");

	const mutation = useMutation({
		mutationFn: async () => {
			const response = await fetch(`https://next-api-7kot.onrender.com/users/${username}`);
			const userData = await response.json();
			const newId = userData.transactions.length + 1;

			const newTicket = {
				id: newId,
				name,
				email,
				message,
				date: new Date().toLocaleDateString(),
				time: new Date().toLocaleTimeString(),
			};

			const updatedTicket = [...userData.tickets, newTicket];

			return fetch(`https://next-api-7kot.onrender.com/users/${username}`, {
				method: "put",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...userData, tickets: updatedTicket }),
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries([`${username}`]);
		},
	});
	const handleTicket = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValidate()) {
			mutation.mutate();
			setName("");
			setEmail("");
			setMessage("");
			toast.success("Your ticket has been delivered");
		}
	};
	const isValidate = () => {
		let result = true;
		if (name === "") {
			result = false;
			toast.warning("Name field cannot be empty");
		}
		if (email === "") {
			result = false;
			toast.warning("Email field cannot be empty");
		}
		if (message === "") {
			result = false;
			toast.warning("Message field cannot be empty");
		}
		return result;
	};
	return (
		<div className="tickets">
			<ToastContainer />
			<h4>Contact us</h4>
			<div className="container">
				<form onSubmit={handleTicket}>
					<div className="ticket_item">
						<div>
							<input type="username" value={name} onChange={(e) => setName(e.target.value)} className={name ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
							<label>Username</label>
							<span className="icon">
								<User />
							</span>
						</div>
						<div>
							<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={email ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
							<label>Email</label>
							<span className="icon">
								<Email />
							</span>
						</div>
						<div>
							<textarea cols={30} rows={10} value={message} onChange={(e) => setMessage(e.target.value)} className={message ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")}></textarea>
							<label>Message</label>
							<span className="icon">
								<Message />
							</span>
						</div>
					</div>
					<button>Send message</button>
				</form>
				<div className="faq">
					<Faq />
				</div>
			</div>
		</div>
	);
};

export default Tickets;
