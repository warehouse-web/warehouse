import React from "react";
import PropTypes from "prop-types";
import { ProductPageTemplate } from "../../templates/product-page";

const ProductPagePreview = ({ entry, widgetFor }) => {
	console.log("wet inside of the product page preview");
	return (
		<ProductPageTemplate
			content={widgetFor("body")}
			title={entry.getIn(["data", "title"])}
			warehouseID={entry.getIn(["data", "warehouseID"])}
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
