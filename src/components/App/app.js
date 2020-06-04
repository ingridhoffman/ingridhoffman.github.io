// Global
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";

// Local
import "./app.css";
import Navmenu from "../Navmenu";
import Footer from "../Footer";
import Home from "../../pages/home";

// Export function
function App() {
	const { Sider, Content } = Layout;

	return (
		<Router>
			<Layout>
				<Sider
					breakpoint="md"
					collapsedWidth="40"
					className="sidebar"
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}>
					<Navmenu />
					<Footer />
				</Sider>
				<Layout className="site-layout">
					<Content className="site-layout-background">
						<Home />
					</Content>
				</Layout>
			</Layout>
		</Router>
	);
}

export default App;
