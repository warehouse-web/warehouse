import React from "react";
import PropTypes from "prop-types";
import { Detail } from "_components";

const FocusPagePreview = ({ entry, getAsset }) => {
	return (
		<Detail
			{...entry.toJSON().data}
			getAsset={getAsset}
			title={entry.getIn(["data", "title"])}
		/>
	);
};

FocusPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default FocusPagePreview;
