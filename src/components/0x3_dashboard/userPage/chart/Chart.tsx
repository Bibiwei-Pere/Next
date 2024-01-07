import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./Chart.scss";
import { chartData } from "../../../0x1_assets/data/dashboardData";
import Dots from "@mui/icons-material/MoreVert";

const Chart = () => {
	return (
		<div className="chart">
			<div className="title">
				<h4>Market Overview</h4>
				<div className="dots">
					<Dots />
				</div>
			</div>
			<div className="wrapper">
				<ResponsiveContainer width="99%" height="100%">
					<AreaChart
						data={chartData}
						margin={{
							top: 10,
							right: 30,
							left: 0,
							bottom: 0,
						}}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Area type="monotone" dataKey="transactions" stackId="1" stroke="#8884d8" fill="#8884d8" />
						<Area type="monotone" dataKey="deposits" stackId="3" stroke="#82ca9d" fill="#82ca9d" />
						<Area type="monotone" dataKey="withdrawals" stackId="1" stroke="#ffc658" fill="#ffc658" />
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default Chart;
