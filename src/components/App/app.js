/** @format */

// Global
import React from "react";

// Local
import "./app.css";
import Navmenu from "../Navmenu";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../../pages/home";

// Export function
function App() {
	return (
		<div className="container">
			<aside>
				<Navmenu />
				<Footer />
			</aside>
			<main>
				<Header />
				<Home />
			</main>
		</div>
	);
}

export default App;
