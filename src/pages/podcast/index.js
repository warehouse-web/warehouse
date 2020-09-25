import React from "react";

import { Layout, PodcastRoll } from "_components";

export default class PodcastIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<PodcastRoll location="test" />
			</Layout>
		);
	}
}
