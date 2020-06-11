// Global
import React, { useState } from "react";
import { Link } from "react-scroll";

// Local
import "./navmenu.css";

// Export
function Navmenu() {
	const [menu, setMenu] = useState([
		{ id: "aboutSection", text: "about me" },
		{ id: "workSection", text: "my work" },
		{ id: "resumeSection", text: "resume" },
		{ id: "contactSection", text: "contact" },
	]);

	return (
		<nav>
			<ul>
				{menu.map((menuItem) => (
					<li>
						<Link
							activeClass="active"
							to={menuItem.id}
							spy={true}
							smooth={true}
							offset={-120}
							duration={500}
							delay={0}>
							{menuItem.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}

export default Navmenu;
