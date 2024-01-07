import { Link } from "react-router-dom";
import "./Box.scss";
import Dots from "@mui/icons-material/MoreVert";

interface Prop {
	url: string;
	color: string;
	title: string;
	number: string;
	link: string;
}

const Box = (props: Prop) => {
	return (
		<div className="box">
			<div className="boxInfo">
				<div className="title">
					<h4>{props.title}</h4>
					<Dots />
				</div>
				<h2>{props.number}</h2>
				<Link to={props.url} style={{ color: props.color }}>
					{props.link}
				</Link>
			</div>
		</div>
	);
};

export default Box;
