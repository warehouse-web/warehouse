import React from "react";
import PropTypes from "prop-types";
import EventDetail from "../../components/EventDetail";

const EventPostPreview = ({ entry, getAsset }) => {
	console.log("getAsset:", getAsset());

	return (
		<EventDetail
			image={getAsset(entry.getIn(["data", "image"]))}
			{...entry.toJSON().data}
		/>
	);
};

EventPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default EventPostPreview;
