// Global
import React, { useState } from "react";

// Local
import "./header.css";

// Export function
function Header() {
	return (
		<header>
			<div class="quote">
				<p class="emphasize">
					“The secret of change is to focus all of your energy, not on fighting the old, but building on the new.“
				</p>
				<p class="right">- Socrates</p>
			</div>
			<h1>Ingrid Hoffman</h1>
		</header>
	);
}

export default Header;
