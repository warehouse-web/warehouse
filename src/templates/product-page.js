import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content from "_utils/utils";
import IndexShop from "_templates/index-shop";

export const ProductPageTemplate = ({
	content,
	contentComponent,
	title,
	helmet,
	author
}) => {
	const ProductContent = contentComponent || Content;

	return (
		<div className="event-detail">
			{helmet || ""}

			<h2
				style={{
					textAlign: "center",
					fontSize: "2em",
					margin: "0 2.5rem 1rem",
					lineHeight: "1.1"
				}}
			>
				{title}
			</h2>
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

	return <IndexShop post={post} />;
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
				price
				templateKey
				date(formatString: "MMMM DD, YYYY")
				location
				content {
					type
					image {
						publicURL
						childImageSharp {
							fluid(maxWidth: 1040, quality: 80) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
							}
						}
					}
					text
					caption
					body
				}
			}
		}
	}
`;
