import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.scss";
import { useEffect, useState } from "react";
import Chart from "../../0x3_dashboard/userPage/chart/Chart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GridColDef } from "@mui/x-data-grid";
import Transactions from "../../0x3_dashboard/userPage/transactions/Transactions";
import SmallChart from "../../0x3_dashboard/userPage/smallChart/SmallChart";
import MobileScreen from "../../0x3_dashboard/userPage/mobileScreen/MobileScreen";
import Dots from "@mui/icons-material/MoreVert";

const columns: GridColDef[] = [
	{
		field: "id",
		type: "string",
		headerName: "#",
		width: 90,
	},
	{
		field: "product",
		type: "string",
		headerName: "Product",
		width: 170,
	},
	{
		field: "transactionType",
		type: "string",
		headerName: "Transactions",
		width: 180,
	},
	{
		field: "amount",
		type: "string",
		headerName: "Amount",
		width: 180,
	},
	{
		field: "status",
		type: "string",
		headerName: "Status",
		width: 180,
	},
	{
		field: "time",
		type: "string",
		headerName: "Time",
		width: 180,
	},
	{
		field: "date",
		type: "string",
		headerName: "Date",
		width: 180,
	},
];

const AdminDashboard = () => {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const [walletBalance, setWalletBalance] = useState("");
	const [profitBalance, setProfitBalance] = useState("");
	const username = sessionStorage.getItem("username");
	const queryClient = useQueryClient();

	useEffect(() => {
		if (username === "" || username === null) {
			navigate("/login");
		}
	}, [username, navigate]);

	const { isLoading, isError } = useQuery({
		queryKey: ["user", username],
		queryFn: () => fetch(`https://next-api-7kot.onrender.com/users/${username}`).then((res) => res.json()),
		onSuccess: (fetchedData) => {
			setWalletBalance(fetchedData.walletBalance);
			setProfitBalance(fetchedData.profitBalance);
			if (fetchedData && fetchedData.transactions) {
				setTransactions(fetchedData.transactions);
				queryClient.invalidateQueries(["user"]);
			}
		},
		onError: (error) => {
			// Handle error, e.g., display an error message
			console.error("Error fetching user data:", error);
		},
	});

	return (
		<div>
			<div className="user_container">
				<h3>Welcome back, {username}!</h3>
				<span>Take a look at our updated dashboard</span>
			</div>

			<div className="userPage">
				{isError ? "Failed to Fetch data. Please refresh" : ""}
				<div className="container container1">
					<Chart />
				</div>
				<div className="container container2">
					<div className="walletBalance">
						<div className="boxInfo">
							<div className="title">
								<h4>Wallet Balance</h4>
								<div className="dots">
									<Dots />
								</div>
							</div>
							<h1>$ {walletBalance}</h1>
							<Link to="/dashboard/orders" style={{ color: "#f3603c" }} className="btn">
								Deposit now
							</Link>
						</div>
					</div>
				</div>
				<div className="container container3">
					<div className="walletBalance">
						<div className="boxInfo">
							<div className="title">
								<h4>Profit Balance</h4>
								<div className="dots">
									<Dots />
								</div>
							</div>
							<h1>$ {profitBalance}</h1>
							<Link to="/dashboard/orders" style={{ color: "green" }} className="btn">
								Refer more
							</Link>
						</div>
					</div>
				</div>
				<div className="container container4">
					<SmallChart />
				</div>
				<div className="container container5">{isLoading ? "Loading..." : <Transactions columns={columns} rows={transactions} />}</div>
				<div className="container6">
					<MobileScreen rows={transactions} />
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
