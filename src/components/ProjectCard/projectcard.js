// Global
import React from "react";
import { Card, Button } from "antd";

// Local
import "./projectcard.css";

// Export function
function ProjectCard(props) {
	return (
		<Card style={{ width: 600 }}>
			<img src={props.image} alt="project image" className="projectImage" />
			<div class="project-info">
				<h3>{props.title}</h3>
				<p>{props.text}</p>
				<Button type="link" href={props.codelink} target="_blank">
					source
				</Button>
				<Button type="link" href={props.demolink} target="_blank">
					demo
				</Button>
			</div>
		</Card>
	);
}

export default ProjectCard;
