/** @format */

// Global
import React from "react";

// Local
import ProjectCard from "../components/ProjectCard";
import projects from "../assets/projects";

// Export function
function Work() {
	return (
		<section id="workSection">
			<h2>A great project exceeds the users needs and enhances the brand image of the client.</h2>
			<div className="cardholder" id="portfolio">
				{projects.map((project, index) => (
					<ProjectCard
						image={project.image}
						title={project.name}
						text={project.statement}
						tech={project.tech}
						codelink={project.codelink}
						demolink={project.demolink}
						key={project.name}
					/>
				))}
			</div>
		</section>
	);
}

export default Work;
