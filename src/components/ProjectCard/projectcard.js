/** @format */

// Global
import React, { useState } from "react";

// Local
import "./projectcard.css";
import Button from "../Button";
import TechIcon from "./techicons";

// Export function
function ProjectCard(props) {
	// mouseover effects
	const [hover, setHover] = useState(false);

	return (
		<div
			onMouseEnter={() => setHover(!hover)}
			onMouseLeave={() => setHover(!hover)}
			className={hover ? "project show" : "project hide"}
		>
			<img src={props.image} alt="project" className="projectImage" />

			<div className="info">
				<h3>{props.title}</h3>
				<p>{props.text}</p>
				<div className="tech-icons">
					{props.tech.map((tech) => (
						<TechIcon tag={tech} key={tech} />
					))}
				</div>
				<div className="button-group">
					{props.codelink ? <Button link={props.codelink} label="source" small /> : <></>}
					{props.demolink ? <Button link={props.demolink} label="demo" small /> : <></>}
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;
