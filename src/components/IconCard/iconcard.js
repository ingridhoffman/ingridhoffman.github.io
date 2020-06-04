// Global
import React from "react";
import { Card } from "antd";

// Local
import "./iconcard.css";

// Export function
function IconCard(props) {
	return (
		<Card style={{ width: 300 }}>
			<img src={props.icon} alt="card icon" className="icon" />
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</Card>
	);
}

export default IconCard;
