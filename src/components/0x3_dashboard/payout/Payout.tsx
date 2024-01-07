import { useState } from "react";
import "./Payout.scss";
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
		field: "amount",
		type: "string",
		headerName: "Amount",
		width: 80,
	},
	{
		field: "status",
		type: "string",
		headerName: "Status",
		width: 80,
	},
	{
		field: "date",
		type: "string",
		headerName: "Date",
		width: 60,
	},
];

const Payout = () => {
	const [transactions, setTransactions] = useState([]);
	const username = sessionStorage.getItem("username");

	const { isLoading } = useQuery({
		queryKey: ["user", username],
		queryFn: () => fetch(`https://next-api-7kot.onrender.com/users/${username}`).then((res) => res.json()),
		onSuccess: (fetchedData) => {
			const withdrawalTransactions = fetchedData.transactions.filter((transaction: { transactionType: string }) => transaction.transactionType === "Withdrawal");
			setTransactions(withdrawalTransactions);
		},
	});

	return (
		<div className="orders">
			<div className="container">
				<span>
					<h4>Withdrawal history</h4>
					<Link to="/dashboard/payouts/withdrawal" className="btn">
						Create new payout
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

export default Payout;
