import React from "react";
import PropTypes from "prop-types";
import { Detail } from "_components";

const ProductPagePreview = ({ entry, getAsset }) => {
	return (
		<Detail
			getAsset={getAsset}
			{...entry.toJSON().data}
			title={entry.getIn(["data", "title"])}
		/>
	);
};

ProductPagePreview.propTypes = {
	entry: PropTypes.shape({
		getIn: PropTypes.func
	}),
	getAsset: PropTypes.func
};

export default ProductPagePreview;
