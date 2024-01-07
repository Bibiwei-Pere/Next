import Footer from "./10_footer/Footer";
import Header from "./1_header/Header";
import Hero from "./2_hero/Hero";
import Goal from "./3_goal/Goal";
import Testimonial from "./4_testimonial copy/Testimonial";
import Services from "./5_services/Services";
import Affliate from "./7_affliate/Affliate";
import Prices from "./8_prices/Prices";

const LandingPage = () => {
	return (
		<div className="landingPage">
			<Header />
			<Hero />
			<Goal />
			<Services />
			<Prices />
			<Testimonial />
			<Affliate />
			<Footer />
		</div>
	);
};

export default LandingPage;
