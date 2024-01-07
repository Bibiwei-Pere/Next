import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./CreateOrder.scss";
import { ChangeEvent, SetStateAction, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrderData } from "../../../0x1_assets/data/dashboardData";
import Back from "@mui/icons-material/ArrowBackIos";
import BTC from "../../../0x1_assets/dashboardImg/btc_scanner.png";
import ETH from "../../../0x1_assets/dashboardImg/eth_scanner.png";
import USDT from "../../../0x1_assets/dashboardImg/usdt_scanner.png";
import Success from "../../component/success/Success";

const successData = {
	title: "Thank you for ordering!",
	description: "Your transaction is being processed, you'll be notified if successful",
	btn1: "VIEW ORDER",
	btn1Url: "/dashboard/orders",
	btn2: "NEW ORDER",
	btn2Url: "/dashboard/orders/create",
};
const CreateOrder = () => {
	const [product, setProduct] = useState("");
	const [amount, setAmount] = useState<number>(500);
	const [coinName, setCoinName] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [selectedImage, setSelectedImage] = useState("");
	const [price, setPrice] = useState<number | "">("");
	const [success, setSuccess] = useState(false);

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
				product,
				amount: `$${amount}`,
				transactionType: "Deposit",
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

	fetch("https://next-api-7kot.onrender.com/users/Admin")
		.then((res) => {
			return res.json();
		})
		.then((resp) => {
			btcAddress = resp.btcAddress;
			ethAddress = resp.ethAddress;
			usdtAddress = resp.usdtAddress;
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

	const handlePlan = (event: { target: { value: SetStateAction<string> } }) => {
		setProduct(event.target.value);
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
		if (product === "" || product === null) {
			result = false;
			toast.error("Select a product");
		}
		if (paymentMethod === "" || paymentMethod === null) {
			result = false;
			toast.error("Choose a payment method");
		}
		return result;
	};

	return (
		<div className="createOrder">
			<ToastContainer />
			<div className="header">
				<Link to="/dashboard/orders">
					<Back />
				</Link>
				<h2>Follow these 4 steps to make an order</h2>
			</div>
			{success && <Success {...successData} />}
			<form onSubmit={handleSubmit} className="container">
				{createOrderData.map((item, index) => {
					const hasInput = item.input;
					const select1 = item.select1;
					const select3 = item.select3;
					const step4 = item.step4;
					return (
						<div className="wrapper" key={index}>
							<div className="leftBorder"></div>
							<h3 className="circle">{item.step}</h3>
							<h5>{item.description}</h5>
							<div className="box">
								{select1 ? (
									<select name="plan" id="plan" onChange={handlePlan}>
										<option value={item.selectValue1}>{item.selectOption1}</option>
										<option value={item.selectValue2}>{item.selectOption2}</option>
										<option value={item.selectValue3}>{item.selectOption3}</option>
										<option value={item.selectValue4}>{item.selectOption4}</option>
									</select>
								) : (
									""
								)}
								{select3 ? (
									<select name="paymentMethod" id="paymentMethod" onChange={handlePaymentMethod}>
										<option value={item.selectValue1}>{item.selectOption1}</option>
										<option value={item.selectValue2}>{item.selectOption2}</option>
										<option value={item.selectValue3}>{item.selectOption3}</option>
										<option value={item.selectValue4}>{item.selectOption4}</option>
									</select>
								) : (
									""
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
													Tranfer <b>{price}</b> {coinName} to:
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

export default CreateOrder;
