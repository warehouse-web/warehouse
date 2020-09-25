import React from "react";

import { Layout, FocusRoll } from "_components";

export default class FocusIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<FocusRoll location="test" />
			</Layout>
		);
	}
}
