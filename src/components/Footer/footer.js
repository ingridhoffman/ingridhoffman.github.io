// Global
import React, { useState } from "react";
import { Affix } from "antd";
import { LinkedinFilled, GithubFilled } from "@ant-design/icons";

// Local
import "./footer.css";

// Export function
function Footer() {
	return (
		<Affix offsetTop={400}>
			<footer className="footer">
				<a href="https://www.linkedin.com/in/ingrid-c-hoffman/" rel="noopener noreferrer" target="_blank">
					<LinkedinFilled />
				</a>
				<a href="https://github.com/ingridhoffman" rel="noopener noreferrer" target="_blank">
					<GithubFilled />
				</a>
				<p>ingridhoffman.pdx@gmail.com</p>
			</footer>
		</Affix>
	);
}

export default Footer;
