import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

const FluidImage = ({ image }) =>
	image && image.childImageSharp ? (
		<Img fluid={image.childImageSharp.fluid} />
	) : (
		<div>
			{console.log("image:", image)}
			<img alt="" src={image} />
		</div>
	);

FluidImage.propTypes = {
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default FluidImage;
