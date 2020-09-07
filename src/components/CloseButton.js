import React from "react";
import { navigate } from "gatsby";

const CloseButton = ({ onSetActiveEvent, onSetShowEventDetail }) => {
	const handleClick = () => {
		if (!onSetActiveEvent || !onSetShowEventDetail) {
			navigate("/about");
		} else {
			onSetActiveEvent({});
			onSetShowEventDetail(false);
		}
	};
	return (
		<div
			className="close"
			onClick={() => {
				handleClick();
			}}
		>
			<span></span>
			<span></span>
		</div>
	);
};

export default CloseButton;
