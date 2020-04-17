import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();
	console.log("data:", data);
	if (data) {
		return (
			<AboutPageTemplate
				title={data.title}
				leftColumn={data.leftColumn}
				content={widgetFor("body")}
				other={data.other}
				blurbs={data.blurbs || { blurbs: [] }}
			/>
		);
	}
};

AboutPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default AboutPagePreview;
