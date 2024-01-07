import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./SmallChart.scss";

const data = [
	{ name: "Beginer", value: 400, color: "#0088FE" },
	{ name: "Executive", value: 300, color: "#00C49F" },
	{ name: "Pro", value: 300, color: "#FFBB28" },
	{ name: "Master", value: 200, color: "#FF8042" },
];

const SmallChart = () => {
	return (
		<div className="smallChart">
			<h4>Packages</h4>
			<div className="chart">
				<ResponsiveContainer width="99%" height={300}>
					<PieChart>
						<Tooltip contentStyle={{ background: "white", borderRadius: "5px" }} />
						<Pie data={data} innerRadius={"70%"} outerRadius={"90%"} paddingAngle={5} dataKey="value">
							{data.map((item) => (
								<Cell key={item.name} fill={item.color} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
			<div className="options">
				{data.map((item) => {
					return (
						<div className="option" key={item.name}>
							<div className="dot" style={{ background: item.color }}></div>
							<div className="title">
								<span>{item.name}</span>
								<span>{item.value}</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SmallChart;
