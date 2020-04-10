import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image/withIEPolyfill";

const FluidImage = ({ image }) =>
	image.childImageSharp ? (
		<Img fluid={image.childImageSharp.fluid} />
	) : (
		<div className={className}>
			<img alt="" src={image} />
		</div>
	);

FluidImage.propTypes = {
	image: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
};

export default FluidImage;
