import "./Feature.scss";
import Reveal from "../animate/Reveal";

interface Props {
	number: number;
	title: string;
	text: string;
}

const Feature = ({ number, title, text }: Props) => {
	return (
		<Reveal>
			<div className="features">
				<span>{number}</span>
				<div>
					<h4>{title}</h4>
					<p>{text}</p>
				</div>
			</div>
		</Reveal>
	);
};

export default Feature;
