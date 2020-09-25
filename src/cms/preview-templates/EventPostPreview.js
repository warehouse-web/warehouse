import React from "react";
import PropTypes from "prop-types";
import { EventDetail } from "_components";
const EventPostPreview = ({ entry, getAsset }) => {
	const data = entry.get("data").toJS();
	// const { content } = data;
	// if (content) {
	// 	content.map(el => {
	// 		if (el.type === "images") {
	// 			getAsset(el.image);
	// 		}
	// 	});
	// }
	return (
		<EventDetail
			getAsset={getAsset}
			// entry={entry}
			{...entry.toJSON().data}
			title={entry.getIn(["data", "title"])}
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
