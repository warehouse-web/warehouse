import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll } from "_components";

const EventIndexPage = ({
	post = false,
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} post={post} />;
};

EventIndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default ({ post = false }) => (
	<StaticQuery
		query={graphql`
			query IndexQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "event-post" } }
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
				}
			}
		`}
		render={(data, count) => (
			<EventIndexPage post={post} data={data} count={count} />
		)}
	/>
);
