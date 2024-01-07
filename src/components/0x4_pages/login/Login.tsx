import "./Login.scss";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import login from "../../0x1_assets/svgAnimations/login3.json";
import Password from "@mui/icons-material/Lock";
import User from "@mui/icons-material/AccountCircle";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const ProceedLogin = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValidate()) {
			fetch("https://next-api-7kot.onrender.com/users/" + username)
				.then((res) => {
					return res.json();
				})
				.then((resp) => {
					console.log(resp);
					if (Object.keys(resp).length === 0) {
						toast.error("Please Enter Valid Username");
					} else {
						if (resp.id === "Admin" && resp.password === password) {
							toast.success("Success");
							sessionStorage.setItem("username", username);
							navigate("/admin");
						} else if (resp.password === password) {
							toast.success("Success");
							sessionStorage.setItem("username", username);
							sessionStorage.setItem("firstName", resp.firstName);
							sessionStorage.setItem("lastName", resp.lastName);
							sessionStorage.setItem("email", resp.email);
							sessionStorage.setItem("phone", resp.phone);
							navigate("/dashboard");
						} else {
							toast.error("Please Enter Valid Password");
						}
					}
				})
				.catch((err) => {
					toast.error("Login failed due to :" + err.message);
				});
		}
	};

	const isValidate = () => {
		let result = true;
		if (username === "" || username === null) {
			result = false;
			toast.warning("Enter Correct username");
		}
		if (password === "" || password === null) {
			result = false;
			toast.warning("Enter Correct Password");
		}
		return result;
	};

	useEffect(() => {
		sessionStorage.clear();
	}, []);
	return (
		<div className="register">
			<ToastContainer />
			<div className="container">
				<div className="modal">
					<div className="wrapper">
						<div>
							<h2>Welcome Back!</h2>
							<form onSubmit={ProceedLogin}>
								<div className="login_item">
									<div>
										<input type="username" value={username} onChange={(e) => setUsername(e.target.value)} className={username ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Username</label>
										<span className="icon">
											<User />
										</span>
									</div>
									<div>
										<input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className={password ? "filled" : ""} onFocus={(e) => e.target.classList.add("filled")} onBlur={(e) => !e.target.value && e.target.classList.remove("filled")} />
										<label>Password</label>
										<span className="icon">
											<Password />
										</span>
									</div>
								</div>
								<div className="checkbox">
									<label>
										<input type="checkbox" className="custom_check" /> <p>Remember me</p>
									</label>
									<p>
										<Link to="/">Forgot Password?</Link>
									</p>
								</div>
								<button>Login</button>
								<div className="login">
									<p>Don't have an account? </p>
									<Link to="/register">
										<b>Signup</b>
									</Link>
								</div>
							</form>
						</div>
						<div className="lottie">
							<Lottie animationData={login} loop={true} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
