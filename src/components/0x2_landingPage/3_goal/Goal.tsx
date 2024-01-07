import Feature from "../0_component/feature/Feature";
import bg_img from "../../0x1_assets/landingPageImg/bg-pattern-body-desktop.svg";
import "./Goal.scss";
import { goalDetails, tradingDetails } from "../../0x1_assets/data/landingPageData";
import Reveal from "../0_component/animate/Reveal";

const Goal = () => {
	return (
		<div className="goals">
			<h2>What's different about Next?</h2>
			<div className="goal">
				<div className="headline">
					<p>Our stated objectives are to make our consumers feel safe. Our experienced staff designs financing solutions that are specifically matched to your requirements.</p>
					<p>We provide a wide range of high-quality and dependable services, including Cryptocurrency Mining Investments, Cryptocurrency Investments, Forex Trading, Stock and Commodities Investment, and General Investment Consultancy.</p>
				</div>
				<div className="feature">
					{goalDetails.map((goal) => {
						return <Feature {...goal} />;
					})}
				</div>
			</div>
			<img src={bg_img} alt="" />
			<div className="tradings">
				<h2>Crypto Trading at it's Best</h2>
				<div className="trading">
					<div>
						<Reveal>
							<p>Capital has demonstrated, commendably, successful and steady performance and trading history since its inception. It is now considered as one of the greatest, most advantageous, most stunningly successful firms in the Forex trading and cryptocurrency investment industry.</p>
						</Reveal>
						<Reveal>
							<p>Our firm has received a large amount of excellent evaluations and feedback from clients all around the world, and our popularity continues to grow with each passing day.</p>
						</Reveal>
						<Reveal>
							<p>Capital provides its users with the greatest possible management system as well as a risk control system that strives to guarantee that their funds are managed effectively, allowing our investors to enjoy every second of their investment experience.</p>
						</Reveal>
						<Reveal>
							<p>Capital provides its users with the greatest possible management system as well as a risk control system that strives to guarantee that their funds are managed effectively, allowing our investors to enjoy every second of their investment experience.</p>
						</Reveal>
						<Reveal>
							<p>Capital provides its users with the greatest possible management system as well as a risk control system that strives to guarantee that their funds are managed effectively, allowing our investors to enjoy every second of their investment experience.</p>
						</Reveal>
					</div>
					<div className="container">
						{tradingDetails.map((trading: any) => {
							return (
								<div className="wrapper">
									<div className="icon">{<trading.icon />}</div>
									<span>
										<h4>{trading.title}</h4>
										<p>{trading.text}</p>
									</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Goal;
