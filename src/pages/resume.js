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
			<h2>Bringing valuable expertise and experience to a new career path.</h2>
			<p>
				Through a breadth of experience in architecture and design, I have developed valuable skills
				and knowledge that translate directly to the world of technology including:
			</p>
			<ul className="checklist">
				<li>Creating intuitive and aesthetically pleasing user facing design</li>
				<li>Building a functional, logical, and efficient framework</li>
				<li>Structuring for an authentic integration of back-end and front-end experience</li>
				<li>
					Strength in translating iteration and changing variables into innovation for an improved
					outcome
				</li>
			</ul>
			<div className="two-column">
				<div className="skills">
					<h3>Technologies</h3>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>Bootstrap</li>
						<li>Responsive Design</li>
						<li>Javascript</li>
						<li>JQuery</li>
						<li>ES6+</li>
						<li>AJAX</li>
						<li>Node.js</li>
						<li>Express</li>
						<li>Axios</li>
						<li>MySQL</li>
						<li>MongoDB</li>
						<li>React</li>
					</ul>
				</div>
				<div className="cardholder">
					<IconCard
						icon={CommunicateIcon}
						title="Communication"
						text="Understanding and translating between areas of expertise and stakeholder priorities"
					/>
					<IconCard
						icon={ManageIcon}
						title="Project Management"
						text="Creating, implementing, and tracking budgets, schedules, team coordination, resource and labor allocation"
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
					link="https://docs.google.com/document/d/11Zhyopm-6AJJ_IqFN40BTrvV2SKfAbJRf19vFiA8UeE/edit?usp=sharing"
				/>
			</div>
		</section>
	);
}

export default Resume;
