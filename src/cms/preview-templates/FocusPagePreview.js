import React from "react";
import PropTypes from "prop-types";
import EventDetail from "../../components/EventDetail";

const FocusPagePreview = ({ entry, getAsset }) => {
	const data = entry.get("data").toJS();

	return (
		<EventDetail
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
