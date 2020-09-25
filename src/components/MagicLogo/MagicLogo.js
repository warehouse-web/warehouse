import React, { useState, useEffect, useRef } from "react";
// import { relayout } from "_utils/utils";

import Img from "gatsby-image/withIEPolyfill";

const MagicLogo = ({ currImg = false }) => {
	const refContainer = useRef(false);
	const [img, setImg] = useState(false);

	// CHANGING LOGO COLOR
	// useEffect(() => {
	// 	window.addEventListener("scroll", relayout);
	// 	return () => {
	// 		window.removeEventListener("scroll", relayout);
	// 	};
	// }, []);

	useEffect(() => {
		if (!currImg) {
			setImg(false);
		}
	}, [currImg]);

	const onLoadImg = state => {
		setImg(refContainer.current.imageRef.current.currentSrc);
	};

	const styles =
		img && currImg
			? {
					backgroundImage: `url(${img})`
			  }
			: {};

	return (
		<div
			className={"magic-logo " + (img && currImg ? "" : "not-active")}
			style={styles}
		>
			<div className="magic-logo__img">
				{currImg && currImg.childImageSharp ? (
					<Img
						fluid={currImg.childImageSharp.fluid}
						ref={refContainer}
						onLoad={onLoadImg}
					/>
				) : (
					""
				)}
			</div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle rectangle-background"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
			<div className="rectangle"></div>
		</div>
	);
};

export default MagicLogo;
