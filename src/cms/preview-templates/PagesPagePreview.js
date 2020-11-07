import React from "react";
import PropTypes from "prop-types";
import { PagesPageTemplate } from "../../templates/pages-page";

const PagesPagePreview = ({ entry, widgetFor }) => {
	const data = entry.getIn(["data"]).toJS();
	if (data) {
		return <PagesPageTemplate title={data.title} text={data.text} />;
	}
};

PagesPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default PagesPagePreview;
