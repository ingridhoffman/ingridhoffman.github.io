/** @format */

// Global
import React, { Component } from "react";
import {
	DiHtml5,
	DiCss3,
	DiBootstrap,
	DiJavascript1,
	DiJqueryLogo,
	DiNodejsSmall,
	DiMysql,
	DiMongodb,
	DiReact,
} from "react-icons/di";
import { AiFillApi } from "react-icons/ai";

class TechIcons extends Component {
	icons = {
		HTML: DiHtml5,
		CSS: DiCss3,
		Bootstrap: DiBootstrap,
		Javascript: DiJavascript1,
		jQuery: DiJqueryLogo,
		Node: DiNodejsSmall,
		MySQL: DiMysql,
		MongoDB: DiMongodb,
		React: DiReact,
		API: AiFillApi,
	};

	render() {
		const TagName = this.icons[this.props.tag];
		return <TagName />;
	}
}
export default TechIcons;
