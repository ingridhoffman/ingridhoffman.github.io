/** @format */

// Global
import React from "react";

// Local
import IconCard from "../components/IconCard";
import Button from "../components/Button";
import SolveIcon from "../assets/icons/noun_learn_355071.png";
import ManageIcon from "../assets/icons/noun_management_2025303.png";
import CommunicateIcon from "../assets/icons/noun_Communication_925161.png";

// Export function
function Resume() {
	return (
		<section id="resumeSection">
			<h2>
				Highly motivated and results-driven software engineer with a passion for learning and growth
			</h2>
			<p>
				Skilled in developing, maintaining, and improving software using the latest technologies and
				methodologies.
			</p>
			<ul className="checklist">
				<li>Creating intuitive and aesthetically pleasing user facing design</li>
				<li>Building a functional, logical, and efficient framework</li>
				<li>Structuring for a clear, efficient integration of back-end and front-end experience</li>
				<li>
					Strength in translating iteration and changing variables into innovation for an improved
					outcome
				</li>
			</ul>
			<div className="two-column">
				<div className="skills">
					<h3>Technologies</h3>
					<ul>
						<li>Semantic HTML</li>
						<li>CSS/SCSS</li>
						<li>ES6+ Javascript</li>
						<li>Typescript</li>
						<li>React</li>
						<li>Redux</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>Axios</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>PostgreSQL</li>
						<li>AWS</li>
					</ul>
				</div>
				<div className="cardholder">
					<IconCard
						icon={CommunicateIcon}
						title="Communication"
						text="Building authentic relationships with active listening to increase team cohesion and productivity"
					/>
					<IconCard
						icon={ManageIcon}
						title="Project Management"
						text="Effectively planning and coordinating resources to succesfuly achieve project objectives"
					/>
					<IconCard
						icon={SolveIcon}
						title="Creative Problem Solving"
						text="Focusing on high-level goals and considering limitations and challenges as opportunities for innovative solutions."
					/>
				</div>
			</div>
			<div className="right">
				<Button
					label="resume"
					link="https://docs.google.com/document/d/1S_--m__y6ZEk79FoBUhSdqeeANPDvgSHme4jNwlDxx4/edit?usp=sharing"
				/>
			</div>
		</section>
	);
}

export default Resume;
