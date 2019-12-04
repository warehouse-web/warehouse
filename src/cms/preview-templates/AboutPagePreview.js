import React from "react";
import PropTypes from "prop-types";
import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
	return (
		<AboutPageTemplate
			leftColumn={widgetFor("leftColumn")}
			rightColumn={entry.getIn(["data", "rightColumn"])}
			leftColumn={entry.getIn(["data", "leftColumn"])}
			// list={entry.getIn(['data', 'location'])}
			blurbs={entry.getIn(["data", "blurbs"])}
			title={entry.getIn(["data", "title"])}
			// content={widgetFor('body')}
		/>
	);
};

AboutPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default AboutPagePreview;
