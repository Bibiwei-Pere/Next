import { useState } from "react";
import "./Orders.scss";
import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import Transactions from "../userPage/transactions/Transactions";
import { useQuery } from "@tanstack/react-query";
import Faq from "../component/faq/Faq";

const columns: GridColDef[] = [
	{
		field: "id",
		type: "string",
		headerName: "#",
		width: 100,
	},
	{
		field: "product",
		type: "string",
		headerName: "Product",
		width: 150,
	},
	{
		field: "status",
		type: "string",
		headerName: "Status",
		width: 150,
	},
	{
		field: "transactionType",
		type: "string",
		headerName: "Transactions",
		width: 150,
	},
	{
		field: "amount",
		type: "string",
		headerName: "Amount",
		width: 150,
	},
	{
		field: "time",
		type: "string",
		headerName: "Time",
		width: 150,
	},
	{
		field: "date",
		type: "string",
		headerName: "Created at",
		width: 150,
	},
];

const columnsMobile: GridColDef[] = [
	{
		field: "id",
		type: "string",
		headerName: "#",
		width: 20,
	},
	{
		field: "product",
		type: "string",
		headerName: "Product",
		width: 80,
	},
	{
		field: "amount",
		type: "string",
		headerName: "Amount",
		width: 80,
	},
	{
		field: "status",
		type: "string",
		headerName: "Status",
		width: 60,
	},
];

const Orders = () => {
	const [transactions, setTransactions] = useState([]);
	const username = sessionStorage.getItem("username");

	const { isLoading } = useQuery({
		queryKey: ["user", username],
		queryFn: () => fetch(`https://next-api-7kot.onrender.com/users/${username}`).then((res) => res.json()),
		onSuccess: (fetchedData) => {
			const depositTransactions = fetchedData.transactions.filter((transaction: { transactionType: string }) => transaction.transactionType === "Deposit");
			setTransactions(depositTransactions);
		},
	});

	return (
		<div className="orders">
			<div className="container">
				<span>
					<h4>My orders</h4>
					<Link to="/dashboard/orders/create" className="btn">
						Create new order
					</Link>
				</span>
				<div className="wrapper">{isLoading ? "Loading..." : <Transactions columns={columns} rows={transactions} />}</div>
				<div className="wrapper2">{isLoading ? "Loading..." : <Transactions columns={columnsMobile} rows={transactions} />}</div>
			</div>
			<div className="faq">
				<Faq />
			</div>
		</div>
	);
};

export default Orders;

// return (
// 	<div className="orders">
// 		{open && <Deposit columns={columns} setOpen={setOpen} slug="user" />}
// 		<div className="prices">
// 			<div className="wrapper">
// 				<h2>Get the right package for future project</h2>
// 				<div>
// 					<button className={isAnnualActive ? "active" : ""} onClick={handleAnnual}>
// 						Annual
// 					</button>
// 					<button className={isMonthlyActive ? "active" : ""} onClick={handleMonth}>
// 						Monthly
// 					</button>
// 				</div>
// 			</div>
// 			<div className="packages">
// 				{packageDetailsState.map((item) => (
// 					<div className="package">
// 						<div className="popular">{item.save}</div>
// 						<div className="text">
// 							<h4>{item.title}</h4>
// 							<p>{item.return}</p>
// 						</div>
// 						<div className="amount">
// 							<h2>
// 								{item.deposit}
// 								<p> {item.time}</p>
// 							</h2>
// 						</div>
// 						<span>
// 							{item.content.map((text) => (
// 								<div className="container">
// 									<div className="box">
// 										<div className="number">{text.number1}</div>
// 										<span>
// 											<h4>Duration</h4>
// 											<p>{text.Duration}</p>
// 										</span>
// 									</div>
// 									<div className="box">
// 										<div className="number">{text.number2}</div>
// 										<span>
// 											<h4>Withdrawal</h4>
// 											<p>{text.Withdrawal}</p>
// 										</span>
// 									</div>
// 									<div className="box">
// 										<div className="number">{text.number3}</div>
// 										<span>
// 											<h4>Benefits</h4>
// 											<p>{text.Benefit}</p>
// 										</span>
// 									</div>
// 								</div>
// 							))}
// 						</span>
// 						{/* <button className="btn" onClick={() => setOpen(true)}> */}
// 						<Link to="/dashboard/orders/create" className="btn">
// 							Get started
// 						</Link>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	</div>
// );
