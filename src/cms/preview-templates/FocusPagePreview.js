import React from "react";
import PropTypes from "prop-types";
import FocusDetail from "../../components/FocusDetail";

const FocusPagePreview = ({ entry, getAsset }) => {
	return (
		<FocusDetail
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
