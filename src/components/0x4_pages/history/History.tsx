import Footer from "../../0x2_landingPage/10_footer/Footer";
import Header from "../../0x2_landingPage/1_header/Header";
import "./History.scss";
import { Link } from "react-router-dom";

const History = () => {
	return (
		<div>
			<Header />
			<div className="history_section"></div>
			<div className="history">
				<h3>Our history</h3>
				<div className="container">
					<div className="flex">
						<div>
							<p>We got into investing because we wanted to give it a more approachable and practical edge, in addition to the in-depth knowledge and analysis that consumers demand. We operate only on the basis of online payments and do not assess taxes. We provide you with a multitude of investment possibilities, tools, and research to guarantee that your portfolio is filled with only winners. We're an ideal location to start online investing since we provide not just the specific information you want, but also a strong emphasis on wider concepts and ideas for our rookie investors.</p>
							<p>We've been attempting to leverage reduced risk and greater profitability for our clients for as long as we've existed, through inventive and intelligent analysis, information dispersion, and professional support. Our team of experts and professionals is made up of seasoned and knowledgeable experts and professionals that provide a wealth of expertise and knowledge to the whole investment process. These experts form the foundation of our business, assisting us in guiding both our clients and our website toward success and profitability, as well as an original approach that you won't find anywhere else.</p>
						</div>
						<span>
							<p>Next.com is a privately held investment firm that has been lawfully registered with all appropriate authorities. We started out dealing just with money and worked our way up to the fascinating world of internet investment. Now we're hoping for an increase of internet investors who want to make steady profits and gains.</p>
							<Link to="/about" className="btn">
								Read company profile
							</Link>
						</span>
					</div>
					<p>At Next.com, we prioritize our customers' goals and expectations, and nothing is more important to us than ensuring that they are well-informed, protected, and ultimately successful. Our privacy and security are also of the highest concern to us, and we can assure you that when you invest with us, you will be completely protected. Our site employs all conceivable security precautions for online investment, ensuring that all of our clients' information, including identification, money, trading activity, and other personal information, is kept absolutely private. Any information you supply to us or activity your account completes is never shared with a third party.</p>
					<p>Our Next.com staff is divided into three divisions: technical support specialists, customer care representatives, and trading and investment professionals. Each of these is available to you at all times, 24 hours a day, seven days a week. Our customer care team can assist you with any difficulties or roadblocks that arise during the establishment or maintenance of your account.</p>
					<p>Our staff of experienced traders and investors can offer you advice, recommendations, tactics, analysis, and more, ensuring that every part of your investment experience is bolstered by professional expertise. You may contact our staff at any moment if you have a query, a problem, or simply need some advise, and they will promptly respond with anything you require. Our investment professionals are here to help you achieve your goals and optimize your profits, and they can give you with all of the advice, information, tools, and analysis you need. They can do everything from introduce novice investors to particular techniques or concepts to providing analysis and strategy advice to seasoned investors.</p>
					<p>Our ultimate goal has been to combine a practical and readily available template with the in-depth and exhaustive research and information required to provide individuals with a full and pragmatic investment experience. Our website is extremely powerful and quick, and our experts are always there to help you with whatever you want. The bottom line is that no matter what sort of investor you are or what your goals are, we can not only accommodate them, but we can also work with you to guarantee you achieve all you desire and more!</p>
					<span>
						<p>Any difficulties with functionality, accessibility, tool usage, or safety or hacking concerns can be addressed by the technical team. Any difficulties or concerns you have with the website may be reported to them, and they will respond as soon as possible to give you with any available answers or support.</p>
						<Link to="/register" className="btn">
							Join us today
						</Link>
					</span>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default History;
