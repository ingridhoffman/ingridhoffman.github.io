/** @format */

// Global
import React from "react";

// Local
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Work from "./work";

// Export function
function Home() {
	return (
		<>
			<About />
			<Work />
			<Resume />
			<Contact />
		</>
	);
}

export default Home;
