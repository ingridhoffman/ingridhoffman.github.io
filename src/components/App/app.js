// Global
import React from "react";
import { Layout } from "antd";

// Local
import "./app.css";

// Export function
function App() {
	const { Sider, Content } = Layout;

	return (
		<div>
			<Layout>
				<Sider
					breakpoint="md"
					collapsedWidth="40"
					onBreakpoint={(broken) => {
						console.log(broken);
					}}
					onCollapse={(collapsed, type) => {
						console.log(collapsed, type);
					}}>
					Sider
				</Sider>
				<Layout className="site-layout">
					<Content className="site-layout-background">Content</Content>
				</Layout>
			</Layout>
		</div>
	);
}

export default App;
