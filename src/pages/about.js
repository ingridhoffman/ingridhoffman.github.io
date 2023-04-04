/** @format */

// Global
import React from "react";

// Local
import IconCard from "../components/IconCard";
import LearnIcon from "../assets/icons/noun_problem_2148912.png";
import RelateIcon from "../assets/icons/noun_networking_2148898.png";
import ActivateIcon from "../assets/icons/noun_Idea_204651.png";
import MaximizeIcon from "../assets/icons/noun_grow_2134952.png";
import StrategicIcon from "../assets/icons/noun_Planning process_2148913.png";

// Export function
function About() {
	return (
		<section id="aboutSection">
			<h2>
				full-stack developer with an emphasis on functional design and beautifully written code
			</h2>
			<div className="cardholder">
				<IconCard
					type="reverse"
					text="I excel at understanding project and client needs to optimize strategies and deliver exceptional outcomes."
				/>
				<IconCard
					icon={MaximizeIcon}
					title="Maximizer"
					text="Teasing out hidden gems in a project and activating unique strengths in team members is how
					I help take a project from great to superb."
				/>
				<IconCard
					icon={RelateIcon}
					title="Relator"
					text="By forming authentic connections, I recognize the value each individual offers and can facilitate effective communication and team culture."
				/>
				<IconCard
					icon={StrategicIcon}
					title="Strategic"
					text="My agile and iterative decision process is ideally suited to optimizing strategies for successful results
					within realistic restraints."
				/>
				<IconCard
					icon={LearnIcon}
					title="Learner"
					text="I thrive on learning and growth. Each new project presents a challenge to push beyond the expected."
				/>
				<IconCard
					icon={ActivateIcon}
					title="Activator"
					text="Ideation has great value. Turning the ideas into results is where I live."
				/>
			</div>
		</section>
	);
}

export default About;
