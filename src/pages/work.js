// Global
import React, { useState, useEffect } from "react";

// Local
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";

// Export function
function Work() {
	// mouseover effects
	const [hover, setHover] = useState(false);

	return (
		<section id="work">
			<h2>
				A great project exceeds the users needs and enhances the brand image of
				the client.
			</h2>
			<div class="cardholder" id="portfolio">
				{projects.map((project) => (
					<ProjectCard
						image={project.image}
						title={project.name}
						text={project.statement}
						codelink={project.codelink}
						demolink={project.demolink}
					/>
				))}
			</div>
		</section>
	);
}

export default Work;
