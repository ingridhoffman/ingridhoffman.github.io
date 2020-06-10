// Global
import React from "react";
import { BsCheckCircle } from "react-icons/bs";

// Local
import IconCard from "../components/IconCard";
import Button from "../components/Button";
import TechIcon from "../assets/icons/noun_learn_355071.png";
import ManageIcon from "../assets/icons/noun_management_2025303.png";
import CommunicateIcon from "../assets/icons/noun_Communication_925161.png";

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
			<p>
				<BsCheckCircle className="react-icon" />
				Creating intuitive and aesthetically pleasing user facing design
			</p>
			<p>
				<BsCheckCircle className="react-icon" />
				Building a functional, logical, and efficient framework
			</p>
			<p>
				<BsCheckCircle className="react-icon" />
				Structuring for an authentic integration of back-end and front-end
				experience
			</p>
			<p>
				<BsCheckCircle className="react-icon" />
				Strength in translating iteration and changing variables into innovation
				for an improved outcome
			</p>
			<div className="cardholder">
				<IconCard
					icon={TechIcon}
					title="Technical Skills"
					text="HTML -- CSS -- Bootstrap -- Responsive Design -- Javascript -- JQuery -- ES6+ -- AJAX -- Node.js -- Express -- MySQL -- MongoDB -- React"
				/>
				<IconCard
					icon={ManageIcon}
					title="Project Management"
					text="Creating, implementing, and tracking budgets, schedules, team coordination, resource and labor allocation"
				/>
				<IconCard
					icon={CommunicateIcon}
					title="Communication"
					text="Understanding and translating between areas of expertise and stakeholder priorities"
				/>
			</div>
			<Button
				label="resume"
				link="https://drive.google.com/file/d/1YtVA0wUcCaPWM7YFUA0Bsp5k6HW_5hoe/view?usp=sharing"
			/>
		</section>
	);
}

export default Resume;
