import React from "react";
import PropTypes from "prop-types";
import { FocusPageTemplate } from "../../templates/focus-page";
import EventDetail from "../../components/EventDetail";

const FocusPagePreview = ({ entry }) => {
	return <EventDetail {...entry.toJSON().data} />;
};

FocusPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	widgetFor: PropTypes.func
};

export default FocusPagePreview;
