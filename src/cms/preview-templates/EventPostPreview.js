import React from "react";
import PropTypes from "prop-types";
import EventDetail from "../../components/EventDetail";

const EventPostPreview = ({ entry }) => {
	return <EventDetail {...entry.toJSON().data} />;
};

EventPostPreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default EventPostPreview;
