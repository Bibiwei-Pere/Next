import { Link } from "react-router-dom";
import "./Affliate.scss";
import Reveal, { Reveal1 } from "../0_component/animate/Reveal";

const Affliate = () => {
	return (
		<div className="affliate">
			<div className="wrapper">
				<h2>Affliate program</h2>
				<p>You will earn more income with our affiliate earning offers</p>
				<Reveal>
					<p>Capital rewards investors who refer friends and family to the firm with a handsome 10% bonus on the new investor's initial contribution. The Australian Hedge Fund of the Year has been chosen.</p>
				</Reveal>
				<Reveal>
					<p>The affiliate network that we provide is a simple and straightforward approach to boost your revenue. All you have to do now is tell your friends about our work and encourage them to join us in protecting their future. As a thank you, we'll give you a significant raise depending on your affiliate efforts.</p>
				</Reveal>
				<Reveal>
					<p>When a new investor's deposit is confirmed, the commission is paid into the investor's portfolio. This is our way of expressing THANK YOU for putting your faith in us!!</p>
				</Reveal>
				<br />
				<Link to="/signup" className="btn">
					Apply here
				</Link>
			</div>
			<div className="box">
				<span>
					<Reveal1>
						<h3>2182K</h3>
					</Reveal1>
					<p>Registered Users</p>
				</span>
				<span>
					<Reveal1>
						<h3>1721K</h3>
					</Reveal1>
					<p>Happy Clients</p>
				</span>
				<span>
					<Reveal1>
						<h3>491+</h3>
					</Reveal1>
					<p>Logged in Users</p>
				</span>
				<span>
					<Reveal1>
						<h3>5+</h3>
					</Reveal1>
					<p>Years of Experience</p>
				</span>
			</div>
		</div>
	);
};

export default Affliate;
