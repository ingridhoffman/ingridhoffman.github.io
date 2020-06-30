/** @format */

// Global
import React from "react";

// Local
import "./iconcard.css";

// Export function
function IconCard(props) {
	return (
		<div className={props.type === "reverse" ? "card reverse" : "card color"}>
			{props.icon ? (
				<div className="icon">
					<img src={props.icon} alt="card icon" className="icon" />
				</div>
			) : (
				<div className="noicon"></div>
			)}
			<h3>{props.title}</h3>
			<p>{props.text}</p>
		</div>
	);
}

export default IconCard;
