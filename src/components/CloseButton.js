import React from "react";

const CloseButton = ({ onSetActiveEvent, onSetShowEventDetail }) => {
	return (
		<div
			className="close"
			onClick={() => {
				onSetActiveEvent({});
				onSetShowEventDetail(false);
			}}
		>
			<span></span>
			<span></span>
		</div>
	);
};

export default CloseButton;
