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
				full-stack developer with an emphasis on design and application logic
			</h2>
			<div className="cardholder">
				<IconCard
					type="reverse"
					text="I prioritize understanding the values, brand, and culture of the company I am working for, and strive to
						translate the stated needs into an effective and forward-thinking application."
				/>
				<IconCard
					icon={LearnIcon}
					title="Learner"
					text="I thrive on learning and growth. Each new project presents a challenge to push beyond the expected."
				/>
				<IconCard
					icon={RelateIcon}
					title="Relator"
					text="By forming authentic connections, I can recognize the value each individual offers, and understand and
					translate priorities among collaborators and stakeholders."
				/>
				<IconCard
					icon={ActivateIcon}
					title="Activator"
					text="Ideation has great value. Turning those thoughts into action is where I live."
				/>
				<IconCard
					icon={MaximizeIcon}
					title="Maximizer"
					text="Teasing out the hidden gems in every project and activating the unique strengths in every team member is how
					I can help take a project from great to superb."
				/>
				<IconCard
					icon={StrategicIcon}
					title="Strategic"
					text="My agile and iterative decision process is ideally suited to optimizing strategies for successful results
					within the realistic restraints."
				/>
			</div>
		</section>
	);
}

export default About;
