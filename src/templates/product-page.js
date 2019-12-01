import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";
import "../components/main.css";
import ShopRoll from "../components/ShopRoll";

export const ProductPageTemplate = ({
	content,
	contentComponent,
	warehouseID,
	title,
	helmet,
	author
}) => {
	const ProductContent = contentComponent || Content;

	return (
		<div className="event-detail">
			<ProductContent
				style={{
					justifyContent: "left",
					textAlign: "left",
					margin: "3.8em",
					marginTop: "1.5rem"
				}}
				className="content"
				content={content}
			/>
			<p>{author}</p>
		</div>
	);
};

ProductPageTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const Product = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<ShopRoll />
			{/* <ProductPageTemplate
				content={post.html}
				contentComponent={HTMLContent}
				warehouseID={post.frontmatter.warehouseID}
				date={post.frontmatter.date}
				title={post.frontmatter.title}
				author={post.frontmatter.author}
			/> */}
		</Layout>
	);
};

Product.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default Product;

export const pageQuery = graphql`
	query ProductByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			htmlAst
			frontmatter {
				title
				warehouseID
				date(formatString: "MMMM DD, YYYY")
				author
			}
		}
	}
`;
