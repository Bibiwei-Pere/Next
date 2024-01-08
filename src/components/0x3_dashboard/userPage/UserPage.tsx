import { Link, useNavigate } from "react-router-dom";
import "./UserPage.scss";
import { useEffect, useState } from "react";
import Chart from "./chart/Chart";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { GridColDef } from "@mui/x-data-grid";
import Transactions from "./transactions/Transactions";
import SmallChart from "./smallChart/SmallChart";
import MobileScreen from "./mobileScreen/MobileScreen";
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

const UserPage = () => {
	const navigate = useNavigate();
	const [transactions, setTransactions] = useState([]);
	const [walletBalance, setWalletBalance] = useState(Number);
	const [referralBalance, setReferralBalance] = useState(Number);
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
			setReferralBalance(fetchedData.referralBalance);
			if (fetchedData && fetchedData.transactions) {
				setTransactions(fetchedData.transactions);
				queryClient.invalidateQueries(["user"]);
			}
		},
		onError: (error) => {
			console.error("Error fetching user data:", error);
		},
	});

	return (
		<div>
			<div className="user_container">
				<h2>Welcome back, {username}!</h2>
				<span>Take a look at our updated dashboard</span>
			</div>

			<div className="userPage">
				{isError ? <div className="container7">Failed to Fetch data. Please refresh</div> : ""}
				<div className="containers containers1">
					<Chart />
				</div>
				<div className="containers containers2">
					<div className="walletBalance">
						<div className="boxInfo">
							<div className="title">
								<h4>Wallet Balance</h4>
								<div className="dots">
									<Dots />
								</div>
							</div>
							<h1>$ {walletBalance.toFixed(2)}</h1>
							<Link to="/dashboard/orders" style={{ color: "#f3603c" }} className="btn">
								Deposit now
							</Link>
						</div>
					</div>
				</div>
				<div className="containers containers3">
					<div className="walletBalance">
						<div className="boxInfo">
							<div className="title">
								<h4>Referral Balance</h4>
								<div className="dots">
									<Dots />
								</div>
							</div>
							<h1>$ {referralBalance.toFixed(2)}</h1>
							<Link to="/dashboard/orders" style={{ color: "green" }} className="btn">
								Referral Balance
							</Link>
						</div>
					</div>
				</div>
				<div className="containers containers4">
					<SmallChart />
				</div>
				<div className="containers containers5">{isLoading ? "Loading..." : <Transactions columns={columns} rows={transactions} />}</div>
				<div className="containers6">
					<MobileScreen rows={transactions} />
				</div>
			</div>
		</div>
	);
};

export default UserPage;
