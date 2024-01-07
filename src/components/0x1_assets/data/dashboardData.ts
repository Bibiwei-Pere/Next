import Home from "@mui/icons-material/Home";
import Settings from "@mui/icons-material/Settings";
import Orders from "@mui/icons-material/StoreRounded";
import Payouts from "@mui/icons-material/PaymentRounded";
import Tickets from "@mui/icons-material/ContactSupport";
import Transactions from "@mui/icons-material/ContactSupport";

export const sidebarData = [
    {
		id: 1,
		title: "Dashboard",
		url: "/dashboard",
		icon: Home
    },
    {
		id: 3,
		title: "Orders",
		url: "/dashboard/orders",
		icon: Orders,
    },
    {
		id: 4,
		title: "Payouts",
		url: "/dashboard/payouts",
		icon: Payouts,
    },
    {
		id: 5,
		title: "Tickets",
		url: "/dashboard/tickets",
		icon: Tickets,
    },
    {
		id: 2,
		title: "Settings",
		url: "/dashboard/settings",
		icon: Settings,
    },
]

export const chartData = [
	{
		name: "Sun",
		transactions: 4000,
		deposits: 2400,
		withdrawals: 2400,
	},
	{
		name: "Mon",
		transactions: 3000,
		deposits: 1398,
		withdrawals: 2210,
	},
	{
		name: "Tue",
		transactions: 2000,
		deposits: 9800,
		withdrawals: 2290,
	},
	{
		name: "Wed",
		transactions: 2780,
		deposits: 3908,
		withdrawals: 2000,
	},
	{
		name: "Thu",
		transactions: 1890,
		deposits: 4800,
		withdrawals: 2181,
	},
	{
		name: "Fri",
		transactions: 2390,
		deposits: 3800,
		withdrawals: 2500,
	},
	{
		name: "Sat",
		transactions: 3490,
		deposits: 4300,
		withdrawals: 2100,
	},
];

export const createOrderData = [
	{
		step: "1",
		description: "Select plan",
		select1: "true",
		selectOption1: "Choose a plan",
		selectOption2: "Beginner",
		selectOption3: "Professional",
		selectOption4: "Master",
		selectValue1: "",
		selectValue2: "Beginner",
		selectValue3: "Professional",
		selectValue4: "Master"
	},
	{
		step: "2",
		description: "Enter Amount",
		input: "number",
	},
	{
		step: "3",
		description: "Payment method",
		select3: "true",
		selectValue1: "",
		selectValue2: "BTC",
		selectValue3: "ETH",
		selectValue4: "USDT",
		selectOption1: "Choose payment method",
		selectOption2: "BTC Bitcoin",
		selectOption3: "ETH Ethereum (ERC20)",
		selectOption4: "USDT TetherUS",
	},
	{
		step: "4",
		description: "Deposit Address",
		step4: "true",
	},
]

export const payoutData = [
	{
		step: "1",
		description: "Enter amount",
		input: "number",
	},
	{
		step: "2",
		description: "Select wallet address",
		select3: "true",
		selectValue1: "",
		selectValue2: "BTC",
		selectValue3: "ETH",
		selectValue4: "USDT",
		selectOption1: "Choose payment method",
		selectOption2: "BTC Bitcoin",
		selectOption3: "ETH Ethereum (ERC20)",
		selectOption4: "USDT TetherUS",
	},
	{
		step: "3",
		description: "Confirm address",
		step4: "true",
	},
]

export const mobileScreenData = [
	{
		img: Orders,
		heading: "Orders",
		text: "New package now available",
		color: "red",
		url: "/dashboard/orders",
		bgColour: "#fff0ec",
	},
	{
		img: Payouts,
		heading: "Payout",
		text: "Minimum withdrawal is $500",
		color: "purple",
		url: "/dashboard/payouts",
		bgColour: "#fcefff",
	},
	{
		img: Tickets,
		heading: "Tickets",
		text: "Any complaints? Contact admin now",
		color: "green",
		url: "/dashboard/tickets",
		bgColour: "#ebfae8",
	},
	{
		img: Transactions,
		heading: "Transactions",
		text: "Made a deposit or withdrawal recently.",
		color: "blue",
		url: "/dashboard",
		bgColour: "#ebe8fa",
	},
]

export const faqData = [
	{
		heading: "How to make an order?",
		text: "Click order from the navbar and select you preffered plan and input the amount you'll like to deposit. Proceed to make payment to any of the available crypto address or scan the QR code to make payment.",
	},
	{
		heading: "How to make a withdrawal?",
		text: "Click payout on the navbar, then input the amount you'll like to withdraw. Then click proceed and the funds will be delivered to your wallet address shortly.",
	},
	{
		heading: "Whats the minimum withdrawal?",
		text: "The minimum withdrawal for now is $500.",
	},
	{
		heading: "How do i add or update my wallet address?",
		text: "Go to settings then scroll down to Wallet address and you'll be able to add new wallet address or update it.",
	},
]