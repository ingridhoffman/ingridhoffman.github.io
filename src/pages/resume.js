// Global
import React from "react";
import { Button } from "antd";

// Local
import IconCard from "../components/IconCard";
import TechIcon from "../images/icons/noun_learn_355071.png";
import TransferIcon from "../images/icons/noun_management_2025303.png";

// Export function
function Resume() {
	return (
		<section id="resume">
			<h2>Bringing valuable expertise and experience to a new career path.</h2>
			<p>
				Through a breadth of experience in architecture and design, I have
				developed valuable skills and knowledge that translate directly to the
				world of technology including:
			</p>
			<p class="bullets">
				<i class="far fa-check-circle"></i>
				Creating intuitive and aesthetically pleasing user facing design
			</p>
			<p class="bullets">
				<i class="far fa-check-circle"></i>
				Building a functional, logical, and efficient framework
			</p>
			<p class="bullets">
				<i class="far fa-check-circle"></i>
				Structuring for an authentic integration of back-end and front-end
				experience
			</p>
			<p class="bullets">
				<i class="far fa-check-circle"></i>
				Strength in translating iteration and changing variables into innovation
				for an improved outcome
			</p>
			<Button onClick="">resume</Button>
			<h2>Proficiencies</h2>
			<div class="cardholder">
				<IconCard
					icon={TechIcon}
					title="Technical Skills"
					text="HTML, CSS, Bootstrap, Responsive Design, Javascript, JQuery, ES6+, AJAX, Node.js, Express, MySQL, MongoDB"
				/>
				<IconCard
					icon={TransferIcon}
					title="Transferable Skills"
					text="Project Management - budgets, schedules, team coordination, resource
					and labor allocation, Communication - understanding and translating between areas of
					expertise and stakeholder priorities"
				/>
			</div>
		</section>
	);
}

export default Resume;
