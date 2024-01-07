import { faqData } from "../../../0x1_assets/data/dashboardData";
import "./Faq.scss";
import arrow from "../../../0x1_assets/dashboardImg/icon-arrow-down.svg";
import { useState } from "react";

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index: any) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="faq">
			<h3>FAQ</h3>
			<div className="container">
				{faqData.map((faq, index) => {
					return (
						<div key={index} className={activeIndex === index ? "active" : ""} onClick={() => handleToggle(index)}>
							<span>
								<h4>{faq.heading}</h4>
								<img src={arrow} alt="arrow" />
							</span>
							{activeIndex === index && <p>{faq.text}</p>}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Faq;
