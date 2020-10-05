import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll } from "_components";

export const IndexFocus = ({
	post = false,
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} post={post} />;
};
IndexFocus.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default ({ post = false }) => (
	<StaticQuery
		query={graphql`
			query IndexFocusQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "focus-page" } }
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
								templateKey
								author
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
			<IndexFocus post={post} data={data} count={count} />
		)}
	/>
);
