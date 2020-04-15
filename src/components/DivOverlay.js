import React, { useState, useEffect } from "react";
import "../components/main.css";
import { useWindowSize } from "./utils";

// let initFlexWidthPx = 640;
// let shiftRatio = 0.1;

export const relayout = () => {
	setWidth(getPos());
};

const setWidth = shift => {
	let element = document.getElementById("magic-logo");

	let newWidth = initFlexWidthPx - shiftRatio * shift;
	let newWidthPx = newWidth + "px";

	element.style.width = newWidthPx;
};

const getPos = () => {
	if (window.pageYOffset != undefined) {
		return window.pageYOffset;
	} else {
		let sy,
			d = document,
			r = d.documentElement,
			b = d.body;
		sy = r.scrollTop || b.scrollTop || 0;
		return sy;
	}
};

const DivOverlay = currImg => {
	const [rectColor, setRectColor] = useState("black");
	const size = useWindowSize();

	useEffect(() => {
		if (size.width < 900) {
			setRectColor("white");
		} else {
			setRectColor("black");
		}
	}, []);

	return (
		<div id="magic-logo">
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={currImg ? currImg.currImg : { background: "black" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
			<div
				className="rectangle"
				style={{ background: "transparent" }}
			></div>
		</div>
	);
};

export default DivOverlay;
