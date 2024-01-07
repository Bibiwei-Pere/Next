import { useEffect, useState } from "react";
import "./Hero.scss";
import bg1 from "../../0x1_assets/landingPageImg/bg4.jpg";
import bg2 from "../../0x1_assets/landingPageImg/bg5.jpg";
import bg3 from "../../0x1_assets/landingPageImg/bg6.jpg";
import { Link } from "react-router-dom";
import { PersonAdd } from "@mui/icons-material";
import { Reveal2 } from "../0_component/animate/Reveal";

const Hero = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [activeDotIndex, setActiveDotIndex] = useState(0);

	const slides = [
		{
			url: bg1,
			alt: "Forest",
			span: "Experience The",
			span2: "Best Quality Service",
			text: "We recognize that smart financial planning will make a significant impact in one's life",
		},
		{
			url: bg2,
			alt: "Wheel",
			span: "Experience The",
			span2: "Reliable and Successful",
			text: "Discover the great service and potentials we bring to the table",
		},
		{
			url: bg3,
			alt: "City",
			span: "Experience Our",
			span2: "Best Trading Instrument",
			text: "Discover the vibrant and ultra-modern resources we bring to the table",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
			setActiveDotIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, [slides.length]);

	return (
		<div className="hero">
			{slides.map((slide, index) => {
				return (
					<div>
						<img key={index} src={slide.url} alt={slide.alt} style={{ display: index === slideIndex ? "block" : "none" }} />
						<div className="headings" style={{ display: index === slideIndex ? "block" : "none" }}>
							<Reveal2>
								<div className="text">
									<span>{slide.span}</span>
									<span>
										<b>{slide.span2}</b>
									</span>
									<p>{slide.text}</p>
								</div>
							</Reveal2>
							<Link to="/register" className="btn">
								Get started
								<div className="icon">
									<PersonAdd />
								</div>
							</Link>
						</div>
					</div>
				);
			})}
			<div className="dots">
				{slides.map((_slide, index) => (
					<div key={index} className={`dot${index + 1} ${index === activeDotIndex ? "active" : ""}`}></div>
				))}
			</div>
		</div>
	);
};

export default Hero;
