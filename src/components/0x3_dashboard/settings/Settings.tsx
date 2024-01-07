import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import "./Settings.scss";
import { useState } from "react";
import user from "../../0x1_assets/landingPageImg/user.jpg";
import Dots from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";

const Settings = () => {
	const [id, setId] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [date, setDate] = useState("");
	const [address, setAddress] = useState("");
	const [sex, setSex] = useState("");
	const [country, setCountry] = useState("");
	const [btcAddress, setBtcAddress] = useState("");
	const [ethAddress, setEthAddress] = useState("");
	const [usdtAddress, setUsdtAddress] = useState("");
	const [walletBalance, setWalletBalance] = useState(Number);
	const [referralBalance, setRefferalBalance] = useState(Number);
	const [transactions, setTransactions] = useState([]);
	const [tickets, setTickets] = useState([]);
	const [notifications, setNotifications] = useState([]);

	const [updateProfile, setUpdateProfile] = useState(false);
	const [updateAddress, setUpdateAddress] = useState(false);
	const [updateWalletAddress, setUpdateWalletAddress] = useState(false);
	const [updatePassword, setUpdatePassword] = useState(false);

	const username = sessionStorage.getItem("username");
	const queryClient = useQueryClient();

	const { isLoading } = useQuery({
		queryKey: [username],
		queryFn: () => fetch(`https://next-api-7kot.onrender.com/users/${username}`).then((resp) => resp.json()),
		onSuccess: (data) => {
			setId(data.id);
			setFirstName(data.firstName);
			setLastName(data.lastName);
			setPhone(data.phone);
			setPassword(data.password);
			setEmail(data.email);
			setDate(data.date);
			setBtcAddress(data.btcAddress);
			setEthAddress(data.ethAddress);
			setUsdtAddress(data.usdtAddress);
			setAddress(data.address);
			setTransactions(data.transactions);
			setTickets(data.tickets);
			setNotifications(data.notifications);
			setSex(data.sex);
			setCountry(data.country);
			setWalletBalance(data.walletBalance);
			setRefferalBalance(data.referralBalance);
			if (address === "") {
				setAddress("eg 34 Drive, Washington District");
			}
			if (country === "") {
				setCountry("eg USA");
			}
		},
	});

	const mutation = useMutation({
		mutationFn: async () => {
			let updateData = { id, firstName, lastName, email, phone, sex, country, date, password, address, btcAddress, ethAddress, usdtAddress, transactions, tickets, notifications, walletBalance, referralBalance };
			return fetch(`https://next-api-7kot.onrender.com/users/${username}`, {
				method: "put",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(updateData),
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries(["allusers"]);
		},
	});

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		mutation.mutate();
		setUpdateProfile(false);
		setUpdateAddress(false);
		setUpdateWalletAddress(false);
		setUpdatePassword(false);
	};

	return (
		<div className="settings">
			<h4>Settings</h4>
			{isLoading ? (
				"Loading..."
			) : (
				<div className="setting">
					<div className="box">
						<span>
							<h4>Your profile</h4>
							<p>Joined {date}</p>
						</span>
						<div className="wrapper">
							<img src={user} alt="avatar" />
							<div className="sub_wrapper">
								<div>
									<span>
										<p>Username</p>
										{updateProfile ? <input value={id} onChange={(e) => setId(e.target.value)} type="text" placeholder={id} /> : <h4>{username}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>First name</p>
										{updateProfile ? <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder={firstName} /> : <h4>{firstName}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Second name</p>
										{updateProfile ? <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder={lastName} /> : <h4>{lastName}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Phone number</p>
										{updateProfile ? <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder={phone} /> : <h4>{phone}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Email</p>
										{updateProfile ? <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder={email} /> : <h4>{email}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
							</div>
							<div className="sub_wrapper2">
								{updateProfile ? (
									<button onClick={handleSubmit}>Save</button>
								) : (
									<button onClick={() => setUpdateProfile(true)}>
										<Edit />
										Edit
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="box">
						<span>
							<h4>Home address</h4>
						</span>
						<div className="wrapper">
							<div className="primary">primary</div>
							<div className="sub_wrapper">
								<div>
									<span>
										<p>Permanent home address</p>
										{updateAddress ? <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" placeholder={address} /> : <h4>{address}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Country</p>
										{updateAddress ? <input value={country} onChange={(e) => setCountry(e.target.value)} type="text" placeholder={country} /> : <h4>{country}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
							</div>
							<div className="sub_wrapper2">
								{updateAddress ? (
									<button onClick={handleSubmit}>Save</button>
								) : (
									<button onClick={() => setUpdateAddress(true)}>
										<Edit />
										Edit
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="box">
						<span>
							<h4>Wallet address</h4>
						</span>
						<div className="wrapper">
							<div className="primary">primary</div>
							<div className="sub_wrapper">
								<div>
									<span>
										<p>Bitcoin Address</p>
										{updateWalletAddress ? <input value={btcAddress} onChange={(e) => setBtcAddress(e.target.value)} type="text" placeholder={btcAddress} /> : <h4>{btcAddress}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Ethereum Address</p>
										{updateWalletAddress ? <input value={ethAddress} onChange={(e) => setEthAddress(e.target.value)} type="text" placeholder={ethAddress} /> : <h4>{ethAddress}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>USDT Address</p>
										{updateWalletAddress ? <input value={usdtAddress} onChange={(e) => setUsdtAddress(e.target.value)} type="text" placeholder={usdtAddress} /> : <h4>{usdtAddress}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
							</div>
							<div className="sub_wrapper2">
								{updateWalletAddress ? (
									<button onClick={handleSubmit}>Save</button>
								) : (
									<button onClick={() => setUpdateWalletAddress(true)}>
										<Edit />
										Edit
									</button>
								)}
							</div>
						</div>
					</div>
					<div className="box">
						<span>
							<h4>Account Options</h4>
						</span>
						<div className="wrapper">
							<div className="primary">others</div>
							<div className="sub_wrapper">
								<div>
									<span>
										<p>Password</p>
										{updatePassword ? <input value={password} onChange={(e) => setPassword(e.target.value)} type="text" placeholder={password} /> : <h4>{password}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
								<div>
									<span>
										<p>Sex</p>
										{updatePassword ? <input value={sex} onChange={(e) => setSex(e.target.value)} type="text" placeholder={sex} /> : <h4>{sex}</h4>}
									</span>
									<span className="dots">
										<Dots />
									</span>
								</div>
							</div>
							<div className="sub_wrapper2">
								{updatePassword ? (
									<button onClick={handleSubmit}>Save</button>
								) : (
									<button onClick={() => setUpdatePassword(true)}>
										<Edit />
										Edit
									</button>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
