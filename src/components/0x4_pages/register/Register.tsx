import { useState } from "react";
import "./Register.scss";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Person from "@mui/icons-material/Person2";
import Mail from "@mui/icons-material/Mail";
import Phone from "@mui/icons-material/Phone";
import Country from "@mui/icons-material/Public";
import Password from "@mui/icons-material/Lock";
import User from "@mui/icons-material/AccountCircle";
import Lottie from "lottie-react";
import signUp from "../../../components/0x1_assets/svgAnimations/login2.json";
import Logo from "../../0x2_landingPage/0_component/logo/Logo";
import Success2 from "../../0x3_dashboard/component/success/Success2";

const registerSuccessData = {
	title: "Registration successful!",
	description: "Thank you for signing up. More juicy packages awaits you",
	btn1: "LOGIN",
	btn1Url: "/login",
};

const Register = () => {
	const [id, idChange] = useState("");
	const [firstName, firstNameChange] = useState("");
	const [lastName, lastNameChange] = useState("");
	const [email, emailChange] = useState("");
	const [phone, phoneChange] = useState("");
	const [country, countryChange] = useState("");
	const [password, passwordChange] = useState("");
	const [confirmPassword, confirmPasswordChange] = useState("");
	const [success, setSuccess] = useState(false);
	const [processing, setProcessing] = useState(false);
	const walletBalance = 50.0;
	const referralBalance = 0.0;
	const notifications = [
		{
			id: 1,
			title: "New User",
			message: "Thanks for signing up... You'll definitely enjoy our services",
			date: new Date().toLocaleDateString(),
			author: "Brad - CEO",
			color: "#4dc900",
		},
		{
			id: 2,
			title: "Happy new year",
			message: "All the staffs at Next wish you, our esteemed customer, a fruitful New year",
			date: new Date().toLocaleDateString(),
			author: "Kelly - PRO",
			color: "#4dc900",
		},
		{
			id: 3,
			title: "Deposit - $50.00",
			message: "A welcome bonus of $50 has been deposited in your wallet",
			date: new Date().toLocaleDateString(),
			author: "Kelly - PRO",
			color: "blue",
		},
	];

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValidate()) {
			setProcessing(true);
			let regobj = { id, firstName, lastName, email, phone, password, btcAddress: "", ethAddress: "", usdtAddress: "", walletBalance, referralBalance, transactions: [], tickets: [], notifications };

			fetch(" https://next-api-7kot.onrender.com/users/", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify(regobj),
			})
				.then(() => {
					setProcessing(false);
					setSuccess(true);
				})
				.catch((err) => {
					toast.error("Failed : " + err.message);
				});
		}
	};

	const isValidate = () => {
		let result = true;
		if (id === "") {
			result = false;
			toast.error("Username field cannot be empty");
		}
		if (firstName === "") {
			result = false;
			toast.error("First name field cannot be empty");
		}
		if (lastName === "") {
			result = false;
			toast.error("Last name field cannot be empty");
		}
		if (email === "") {
			result = false;
			toast.error("Email field cannot be empty");
		}
		if (phone === "" || phone === null) {
			result = false;
			toast.error("Phone number field cannot be empty");
		}
		if (password === "" || password === null || confirmPassword === "" || confirmPassword === null) {
			result = false;
			toast.error("Password field cannot be empty");
		}
		if (password !== confirmPassword) {
			result = false;
			toast.error("Passwords do not match");
		}
		return result;
	};

	return (
		<div className="register">
			<ToastContainer />
			<div className="container">
				<div className="modal">
					<div className="wrapper">
						<div>
							<h3>Start Signup for free</h3>
							<p>Create an account to start using our product</p>
							{success && <Success2 {...registerSuccessData} />}
							<form onSubmit={handleSubmit}>
								<div className="item">
									<div>
										<input value={id} onChange={(e) => idChange(e.target.value)} type="text" className={id ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Username</label>
										<span className="icon">
											<User />
										</span>
									</div>
									<div>
										<input value={firstName} onChange={(e) => firstNameChange(e.target.value)} type="text" className={firstName ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>First Name</label>
										<span className="icon">
											<Person />
										</span>
									</div>
									<div>
										<input value={lastName} onChange={(e) => lastNameChange(e.target.value)} type="text" className={lastName ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Last Name</label>
										<span className="icon">
											<Person />
										</span>
									</div>
									<div>
										<input value={email} onChange={(e) => emailChange(e.target.value)} type="email" className={email ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Email</label>
										<span className="icon">
											<Mail />
										</span>
									</div>
									<div>
										<input value={phone} onChange={(e) => phoneChange(e.target.value)} type="tel" className={phone ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Phone</label>
										<span className="icon">
											<Phone />
										</span>
									</div>
									<div>
										<input value={country} onChange={(e) => countryChange(e.target.value)} type="text" className={country ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Country</label>
										<span className="icon">
											<Country />
										</span>
									</div>
									<div>
										<input value={password} onChange={(e) => passwordChange(e.target.value)} type="text" className={password ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Password</label>
										<span className="icon">
											<Password />
										</span>
									</div>
									<div>
										<input value={confirmPassword} onChange={(e) => confirmPasswordChange(e.target.value)} type="text" className={confirmPassword ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Confirm password</label>
										<span className="icon">
											<Password />
										</span>
									</div>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" className="custom_check" />
										<p>
											I agree with the
											<Link to="/">
												<b> Terms and Conditions</b>
											</Link>
										</p>
									</label>
								</div>
								<button>Register</button>
								<div className="login">
									<p>Already have an account? </p>
									<Link to="/login">
										<b>Login</b>
									</Link>
								</div>
							</form>
						</div>
						<div className="lottie">
							<span>
								<Logo />
							</span>
							<Lottie animationData={signUp} loop={true} />
						</div>
					</div>
					{processing ? (
						<div className="loading">
							<div className="processing-circle"></div>
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default Register;
