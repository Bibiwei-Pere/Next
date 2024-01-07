import { Outlet } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./Dashboard.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./sidebar/Sidebar";

const queryClient = new QueryClient();

const Dashboard = () => {
	return (
		<div className="dashboard">
			<div className="container">
				<div className="menuContainer">
					<Sidebar />
				</div>
				<div className="contentContainer">
					<Navbar />
					<div className="content">
						<QueryClientProvider client={queryClient}>
							<Outlet />
						</QueryClientProvider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
