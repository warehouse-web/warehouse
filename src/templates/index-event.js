import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll, Layout } from "_components";

const EventIndexPage = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} />;
};

EventIndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
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
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
								content {
									type
									image {
										publicURL
										childImageSharp {
											fixed(maxWidth: 1040, quality: 80) {
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
									caption
									body
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <EventIndexPage data={data} count={count} />}
	/>
);
