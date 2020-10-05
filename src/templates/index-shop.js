import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll } from "_components";

export const IndexShop = ({
	post = false,
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} post={post} />;
};

IndexShop.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default ({ post = false }) => (
	<StaticQuery
		query={graphql`
			query IndexShopQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "product-page" } }
					}
				) {
					edges {
						node {
							htmlAst
							id
							fields {
								slug
							}
							frontmatter {
								title
								price
								author
								templateKey
								date(formatString: "MMMM DD, YYYY")
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
								PDF {
									publicURL
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => (
			<IndexShop post={post} data={data} count={count} />
		)}
	/>
);
