// Global
import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

// Local
import "./navmenu.css";

// Export function
function Navmenu() {
	let location = useLocation();

	// $(window).scroll(function () {
	// 	var position = $(this).scrollTop();

	// 	$("article").each(function () {
	// 		var target = $(this).offset().top - 300;
	// 		var id = $(this).attr("id");

	// 		if (position >= target) {
	// 			// remove active class from other nav links
	// 			$("nav li a").removeClass("pop");
	// 			// activate currect section nav link
	// 			$(`[href="#${id}"]`).addClass("pop");
	// 			// document.querySelector(`[href="#${id}"]`).classList.add("pop");
	// 		}
	// 	});
	// });

	return (
		<nav>
			<ul>
				<li>
					<NavLink
						smooth
						to="#about"
						className={location.hash === "#about" ? "pop" : ""}
						scroll={(el) =>
							el.scrollIntoView({ behavior: "instant", block: "end" })
						}>
						about me
					</NavLink>
				</li>
				<li>
					<NavLink
						smooth
						to="#work"
						className={location.hash === "#work" ? "pop" : ""}>
						work
					</NavLink>
				</li>
				<li>
					<NavLink
						smooth
						to="#resume"
						className={location.hash === "#resume" ? "pop" : ""}>
						resume
					</NavLink>
				</li>
				<li>
					<NavLink
						smooth
						to="#contact"
						className={location.hash === "#contact" ? "pop" : ""}>
						contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}

export default Navmenu;
