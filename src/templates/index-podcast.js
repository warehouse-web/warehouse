import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll, Layout } from "_components";

export const IndexPodcast = ({
	post = false,
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} post={post} />;
};

IndexPodcast.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default ({ post = false }) => (
	<StaticQuery
		query={graphql`
			query IndexPodcastQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "podcast-page" } }
					}
				) {
					edges {
						node {
							id
							htmlAst
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
							}
						}
					}
				}
			}
		`}
		render={(data, count) => (
			<IndexPodcast post={post} data={data} count={count} />
		)}
	/>
);
