import React from "react";
import { navigate } from "gatsby";

const CloseButton = ({ onSetActive, onSetShowDetail }) => {
	const handleClick = () => {
		if (!onSetActive || !onSetShowDetail) {
			navigate("/about");
		} else {
			const before = window.history.state.before;
			if (before) {
				window.history.pushState(null, before.title, before.slug);
			}

			onSetActive({});
			onSetShowDetail(false);
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
