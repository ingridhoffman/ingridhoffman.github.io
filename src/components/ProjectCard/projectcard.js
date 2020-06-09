// Global
import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";

// Local
import "./projectcard.css";

// Export function
function ProjectCard(props) {
	// mouseover effects
	const [hover, setHover] = useState(false);

	return (
		<Card
			onMouseEnter={() => setHover(!hover)}
			onMouseLeave={() => setHover(!hover)}
			className={hover ? "project show" : "project hide"}>
			<img src={props.image} alt="project" className="projectImage" />

			<div className="info">
				<h3>{props.title}</h3>
				<p>{props.text}</p>
				{props.codelink ? (
					<Button type="link" href={props.codelink} target="_blank">
						source
					</Button>
				) : (
					<div></div>
				)}
				{props.demolink ? (
					<Button type="link" href={props.demolink} target="_blank">
						demo
					</Button>
				) : (
					<div></div>
				)}
			</div>
		</Card>
	);
}

export default ProjectCard;
