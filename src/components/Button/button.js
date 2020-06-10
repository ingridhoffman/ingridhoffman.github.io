// Global
import React from "react";

// Local
import "./button.css";

// Export function
function Button(props) {
	return (
		<div className="right">
			{/* ternary is used here because buttons are currently only used for links and submit - if other button types are created a switch statemnt could be implemented instead to handle more variables */}
			{props.type === "submit" ? (
				<button
					type="submit"
					className={props.small ? "button small" : "button"}>
					send
				</button>
			) : (
				<a
					href={props.link}
					rel="noopener noreferrer"
					target="_blank"
					className={props.small ? "button small" : "button"}>
					{props.label}
				</a>
			)}
		</div>
	);
}

export default Button;
