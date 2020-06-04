// Global
import React from "react";

// Local
import Header from "../components/Header";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Work from "./work";

// Export function
function Home() {
	return (
		<main>
			<Header />
			<About />
			<Work />
			<Resume />
			<Contact />
		</main>
	);
}

export default Home;
