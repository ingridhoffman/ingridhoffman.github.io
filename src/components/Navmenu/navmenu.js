// Global
import React, { useState } from "react";
// import { NavHashLink as NavLink } from "react-router-hash-link";
import { Anchor } from "antd";
// import { Menu, Affix } from "antd";

// Local
import "./navmenu.css";

// Export function
function Navmenu() {
	const { Link } = Anchor;

	return (
		// <Affix offsetTop={10}>
		<Anchor offsetTop={100}>
			<Link href="#about" title="about me" />
			<Link href="#work" title="work" />
			<Link href="#resume" title="resume" />
			<Link href="#contact" title="contact" />
		</Anchor>
		// <Menu mode="vertical">
		// 	<Menu.Item key="about">
		// 		<NavLink smooth to="#about" activeClassName="selected">
		// 			about me
		// 		</NavLink>
		// 	</Menu.Item>
		// 	<Menu.Item key="work">
		// 		<NavLink smooth to="#work" activeClassName="selected">
		// 			work
		// 		</NavLink>
		// 	</Menu.Item>
		// 	<Menu.Item key="resume">
		// 		<NavLink smooth to="#resume" activeClassName="selected">
		// 			resume
		// 		</NavLink>
		// 	</Menu.Item>
		// 	<Menu.Item key="contact">
		// 		<NavLink smooth to="#contact" activeClassName="selected">
		// 			contact
		// 		</NavLink>
		// 	</Menu.Item>
		// </Menu>
		// </Affix>
	);
}

export default Navmenu;
