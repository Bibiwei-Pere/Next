import "./MobileScreen.scss";
import { mobileScreenData } from "../../../0x1_assets/data/dashboardData";
import { GridColDef } from "@mui/x-data-grid";
import Transactions from "../transactions/Transactions";
import { Link } from "react-router-dom";

const columns: GridColDef[] = [
	{
		field: "id",
		type: "string",
		headerName: "#",
		width: 10,
	},
	{
		field: "product",
		type: "string",
		headerName: "Product",
		width: 100,
	},
	{
		field: "transactionType",
		type: "string",
		headerName: "Transactions",
		width: 100,
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
];

interface Props {
	rows: object[];
}
const MobileScreen = ({ rows }: Props) => {
	return (
		<div className="mobileScreen">
			{mobileScreenData.map((item) => {
				return (
					<div className="container" style={{ backgroundColor: item.bgColour, color: item.color }}>
						<span>
							<item.img />
						</span>
						<div>
							<Link to={item.url}>
								<h4>{item.heading}</h4>
							</Link>
							<p style={{ color: item.color }}>{item.text}</p>
						</div>
					</div>
				);
			})}
			<div className="wrapper">
				<Transactions columns={columns} rows={rows} />
			</div>
		</div>
	);
};

export default MobileScreen;
