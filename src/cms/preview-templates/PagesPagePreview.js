import React from "react";
import PropTypes from "prop-types";
import { Page } from "_components";

const PagesPagePreview = ({ entry, getAsset }) => {
	return (
		<Page
			{...entry.toJSON().data}
			getAsset={getAsset}
			title={entry.getIn(["data", "title"])}
		/>
	);
};

PagesPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default PagesPagePreview;
