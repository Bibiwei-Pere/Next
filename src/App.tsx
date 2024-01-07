import Navbar from "./components/0x3_dashboard/component/navbar/Navbar";
import "./styles/global.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LandingPage from "./components/0x2_landingPage/LandingPage";
import Footer from "./components/0x2_landingPage/10_footer/Footer";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/0x4_pages/about/About";
import Login from "./components/0x4_pages/login/Login";
import Register from "./components/0x4_pages/register/Register";
import Dashboard from "./components/0x3_dashboard/Dashboard";
import UserPage from "./components/0x3_dashboard/userPage/UserPage";
import Settings from "./components/0x3_dashboard/settings/Settings";
import Tickets from "./components/0x3_dashboard/tickets/Tickets";
import Payout from "./components/0x3_dashboard/payout/Payout";
import Orders from "./components/0x3_dashboard/orders/Orders";
import CreateOrder from "./components/0x3_dashboard/orders/createOrder/CreateOrder";
import Withdrawal from "./components/0x3_dashboard/payout/withdrawal/Withdrawal";
import Team from "./components/0x4_pages/team/Team";
import History from "./components/0x4_pages/history/History";
import AdminDashboard from "./components/0x05_adminDashboard/adminDashboard/AdminDashboard";
import Sidemenu from "./components/0x05_adminDashboard/sidemenu/Sidemenu";

const queryClient = new QueryClient();

const App = () => {
	const Admin = () => {
		return (
			<div className="main">
				<Navbar />
				<div className="container">
					<div className="menuContainer">
						<Sidemenu />
					</div>
					<div className="contentContainer">
						<QueryClientProvider client={queryClient}>
							<Outlet />
						</QueryClientProvider>
					</div>
				</div>
				<Footer />
			</div>
		);
	};

	const router = createBrowserRouter([
		{
			path: "/admin",
			element: <Admin />,
			children: [
				{
					path: "/admin",
					element: <AdminDashboard />,
				},
				{
					path: "/admin/orders",
					element: <Orders />,
				},
				{
					path: "/admin/orders/create",
					element: <CreateOrder />,
				},
				{
					path: "/admin/payouts",
					element: <Payout />,
				},
				{
					path: "/admin/payouts/withdrawal",
					element: <Withdrawal />,
				},
				{
					path: "/admin/tickets",
					element: <Tickets />,
				},
				{
					path: "/admin/settings",
					element: <Settings />,
				},
			],
		},
		{
			path: "/dashboard",
			element: <Dashboard />,
			children: [
				{
					path: "/dashboard",
					element: <UserPage />,
				},
				{
					path: "/dashboard/orders",
					element: <Orders />,
				},
				{
					path: "/dashboard/orders/create",
					element: <CreateOrder />,
				},
				{
					path: "/dashboard/payouts",
					element: <Payout />,
				},
				{
					path: "/dashboard/payouts/withdrawal",
					element: <Withdrawal />,
				},
				{
					path: "/dashboard/tickets",
					element: <Tickets />,
				},
				{
					path: "/dashboard/settings",
					element: <Settings />,
				},
			],
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/about",
			element: <About />,
		},
		{
			path: "/team",
			element: <Team />,
		},
		{
			path: "/history",
			element: <History />,
		},
		{
			path: "/login",
			element: <Login />,
		},
		{
			path: "/register",
			element: <Register />,
		},
	]);

	return <RouterProvider router={router} />;
};
export default App;
