// Global
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Local
import "./footer.css";

// Export function
function Footer() {
	return (
		<footer className="footer">
			<a
				href="https://www.linkedin.com/in/ingrid-c-hoffman/"
				rel="noopener noreferrer"
				target="_blank"
				className="link-icon">
				<FaLinkedin />
			</a>
			<a
				href="https://github.com/ingridhoffman"
				rel="noopener noreferrer"
				target="_blank"
				className="link-icon">
				<FaGithub />
			</a>
		</footer>
	);
}

export default Footer;
