import { useState } from "react";
import { Link } from "react-router-dom";
import "./Prices.scss";
import { packageDetails, packageDetailsAnnual } from "../../0x1_assets/data/landingPageData";

const Prices = () => {
	const [packageDetailsState, setPackageDetails] = useState(packageDetails);
	const [isMonthlyActive, setIsMonthlyActive] = useState(true);
	const [isAnnualActive, setIsAnnualActive] = useState(false);

	const handleAnnual = () => {
		setPackageDetails(packageDetailsAnnual);
		setIsAnnualActive(true);
		setIsMonthlyActive(false);
	};

	const handleMonth = () => {
		setPackageDetails(packageDetails);
		setIsMonthlyActive(true);
		setIsAnnualActive(false);
	};

	return (
		<div className="prices">
			<div className="wrapper">
				<h2>Get the right package for future project</h2>
				<div>
					<button className={isAnnualActive ? "active" : ""} onClick={handleAnnual}>
						Annual
					</button>
					<button className={isMonthlyActive ? "active" : ""} onClick={handleMonth}>
						Monthly
					</button>
				</div>
			</div>
			<div className="packages">
				{packageDetailsState.map((item) => (
					<div className="package">
						<div className="popular">{item.save}</div>
						<div className="text">
							<h4>{item.title}</h4>
							<p>{item.return}</p>
						</div>
						<div className="amount">
							<h2>
								{item.deposit}
								<p> {item.time}</p>
							</h2>
						</div>
						<span>
							{item.content.map((text) => (
								<div className="container">
									<div className="box">
										<div className="number">{text.number1}</div>
										<span>
											<h4>Duration</h4>
											<p>{text.Duration}</p>
										</span>
									</div>
									<div className="box">
										<div className="number">{text.number2}</div>
										<span>
											<h4>Withdrawal</h4>
											<p>{text.Withdrawal}</p>
										</span>
									</div>
									<div className="box">
										<div className="number">{text.number3}</div>
										<span>
											<h4>Benefits</h4>
											<p>{text.Benefit}</p>
										</span>
									</div>
								</div>
							))}
						</span>
						<Link to="/login" className="btn">
							Get started
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Prices;
