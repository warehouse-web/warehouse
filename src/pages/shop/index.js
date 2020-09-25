import React from "react";
import { Layout, ShopRoll } from "_components";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<ShopRoll location="test" />
			</Layout>
		);
	}
}
