// Global
import React from "react";

// Local
import "./header.css";

// Export function
function Header() {
	return (
		<header>
			<div className="quote">
				<p className="emphasize">
					“The secret of change is to focus all of your energy, not on fighting
					the old, but building on the new.“
				</p>
				<p className="right">- Socrates</p>
			</div>
			<h1>Ingrid Hoffman</h1>
		</header>
	);
}

export default Header;
