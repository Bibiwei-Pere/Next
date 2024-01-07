import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./Withdrawal.scss";
import { ChangeEvent, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { payoutData } from "../../../0x1_assets/data/dashboardData";
import Back from "@mui/icons-material/ArrowBackIos";
import BTC from "../../../0x1_assets/dashboardImg/btc.png";
import ETH from "../../../0x1_assets/dashboardImg/eth.png";
import USDT from "../../../0x1_assets/dashboardImg/usdt.png";
import Success from "../../component/success/Success";

export const payoutSuccessData = {
	title: "Thank you for ordering!",
	description: "Your transaction is being processed, you'll be notified if successful",
	btn1: "VIEW ORDER",
	btn1Url: "/dashboard/orders",
	btn2: "NEW ORDER",
	btn2Url: "/dashboard/orders/create",
};

const Withdrawal = () => {
	const [amount, setAmount] = useState<number>(500);
	const [coinName, setCoinName] = useState("");
	const [coinName1, setCoinName1] = useState("");
	const [coinName2, setCoinName2] = useState("");
	const [coinName3, setCoinName3] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [selectedImage, setSelectedImage] = useState("");
	const [price, setPrice] = useState<number | "">("");
	const [success, setSuccess] = useState(false);
	const [btcAdressErr, setBtcAdressErr] = useState(false);
	const [ethAdressErr, setEthAdressErr] = useState(false);
	const [usdtAdressErr, setUsdtAdressErr] = useState(false);

	let btcAddress: SetStateAction<string>, ethAddress: SetStateAction<string>, usdtAddress: SetStateAction<string>;
	let btcPrice: number, ethPrice: number, usdtPrice: number;

	const queryClient = useQueryClient();
	const username = sessionStorage.getItem("username");

	const mutation = useMutation({
		mutationFn: async () => {
			const response = await fetch(`https://next-api-7kot.onrender.com/users/${username}`);
			const userData = await response.json();
			const newId = userData.transactions.length + 1;

			const newTransaction = {
				id: newId,
				status: "Pending",
				product: "Payout",
				amount: `$${amount}`,
				transactionType: "Withdrawal",
				date: new Date().toLocaleDateString(),
				time: new Date().toLocaleTimeString(),
			};

			const updatedTransactions = [...userData.transactions, newTransaction];

			return fetch(`https://next-api-7kot.onrender.com/users/${username}`, {
				method: "put",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...userData, transactions: updatedTransactions }),
			});
		},
		onSuccess: () => {
			queryClient.invalidateQueries([`${username}`]);
		},
	});

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isValidate()) {
			mutation.mutate();
			setSuccess(true);
		}
	};

	fetch(`https://next-api-7kot.onrender.com/users/${username}`)
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			btcAddress = resp.btcAddress;
			ethAddress = resp.ethAddress;
			usdtAddress = resp.usdtAddress;
			if (btcAddress === "") {
				setBtcAdressErr(true);
				setCoinName1("Bitcoin");
			}
			if (ethAddress === "") {
				setEthAdressErr(true);
				setCoinName2("Ethereum");
			}
			if (usdtAddress === "") {
				setUsdtAdressErr(true);
				setCoinName3("USDT");
			}
		});

	fetch("https://next-api-7kot.onrender.com/users/Admin")
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			btcPrice = resp.btcPrice;
			ethPrice = resp.ethPrice;
			usdtPrice = resp.usdtPrice;
		});

	const handlePaymentMethod = (event: { target: { value: any } }) => {
		const selectedOption = event.target.value;

		if (selectedOption === "BTC") {
			setSelectedImage(BTC);
			setPaymentMethod(btcAddress);
			setPrice(amount * btcPrice);
			setCoinName("BTC");
		} else if (selectedOption === "ETH") {
			setSelectedImage(ETH);
			setPaymentMethod(ethAddress);
			setPrice(amount * ethPrice);
			setCoinName("ETH");
		} else if (selectedOption === "USDT") {
			setSelectedImage(USDT);
			setPaymentMethod(usdtAddress);
			setPrice(amount * usdtPrice);
			setCoinName("USDT");
		} else {
			setSelectedImage("");
			setPaymentMethod("");
			setPrice(0.0);
			setCoinName("");
		}
	};

	const handleAmount = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = event.target.value;
		setAmount(newValue === "" ? 0 : parseInt(newValue, 10) || 0);
	};

	const isValidate = () => {
		let result = true;
		if (amount === null) {
			result = false;
			toast.error("Enter an amount");
		}
		if (paymentMethod === "" || paymentMethod === null) {
			result = false;
			toast.error("Choose a payment method");
		}
		return result;
	};

	return (
		<div className="withdrawal">
			<ToastContainer />
			<div className="header">
				<Link to="/dashboard/payouts">
					<Back />
				</Link>
				<h2>Follow these steps to withdraw</h2>
			</div>
			{success && <Success {...payoutSuccessData} />}
			<form onSubmit={handleSubmit} className="container">
				{payoutData.map((item, index) => {
					const hasInput = item.input;
					const select2 = item.select3;
					const step4 = item.step4;
					return (
						<div className="wrapper" key={index}>
							<div className="leftBorder"></div>
							<h3 className="circle">{item.step}</h3>
							<h5>{item.description}</h5>
							<div className="box">
								{select2 ? (
									<select name="paymentMethod" id="paymentMethod" onChange={handlePaymentMethod}>
										<option value={item.selectValue1}>{item.selectOption1}</option>
										<option value={item.selectValue2}>{item.selectOption2}</option>
										<option value={item.selectValue3}>{item.selectOption3}</option>
										<option value={item.selectValue4}>{item.selectOption4}</option>
									</select>
								) : (
									""
								)}
								{select2 && btcAdressErr && (
									<p>
										<i>
											You have'nt added your <b>{coinName1}</b> address yet.
											<Link to="/dashboard/settings">
												<b>Add now</b>
											</Link>
										</i>
									</p>
								)}
								{select2 && ethAdressErr && (
									<p>
										<i>
											You have'nt added your <b>{coinName2}</b> address yet.
											<Link to="/dashboard/settings">
												<b>Add now</b>
											</Link>
										</i>
									</p>
								)}
								{select2 && usdtAdressErr && (
									<p>
										<i>
											You have'nt added your <b>{coinName3}</b> address yet.
											<Link to="/dashboard/settings">
												<b>Add now</b>
											</Link>
										</i>
									</p>
								)}

								{hasInput && <input type="number" value={amount} onChange={handleAmount} placeholder="Minimum $500" />}
								{step4 && paymentMethod && (
									<div className="address">
										<div className="transfer">
											<span>
												<img src={selectedImage} alt="scanner" />
											</span>
											<div>
												<p>
													<b>{price}</b> {coinName} will be sent to:
												</p>
												<h4>{paymentMethod}</h4>
											</div>
										</div>
										<button className="btn">Proceed</button>
									</div>
								)}
							</div>
						</div>
					);
				})}
			</form>
		</div>
	);
};

export default Withdrawal;
