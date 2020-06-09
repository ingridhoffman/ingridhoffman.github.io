// Global
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

// Local
import "./app.css";
import Navmenu from "../Navmenu";
import Footer from "../Footer";
import Header from "../Header";
import Home from "../../pages/home";

// Export function
function App() {
	return (
		<Router>
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
		</Router>
	);
}

export default App;
