import React from "react";

import { Layout, EventRoll } from "_components";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<EventRoll location="test" />
			</Layout>
		);
	}
}
