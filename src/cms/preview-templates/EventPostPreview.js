import React from "react";
import PropTypes from "prop-types";
import { EventPostTemplate } from "../../templates/event-post";

const EventPostPreview = ({ entry, widgetFor }) => (
	<EventPostTemplate
		content={widgetFor("body")}
		title={entry.getIn(["data", "title"])}
		location={entry.getIn(["data", "location"])}
		warehouseID={entry.getIn(["data", "warehouseID"])}
	/>
);

EventPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default EventPostPreview;
