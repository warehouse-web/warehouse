import React from "react";
import PropTypes from "prop-types";
import ProductDetail from "../../components/ProductDetail";

const ProductPagePreview = ({ entry, getAsset }) => {
	return (
		<ProductDetail
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
