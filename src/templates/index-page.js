import React from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Roll, Layout } from "_components";

export const IndexPageTemplate = ({ data }) => {
	return (
		<Layout>
			<IndexPage />
		</Layout>
	);
};
IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string
};
// MAIN PAGE LOADS EVERYTHING
export const IndexPage = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	return <Roll posts={posts} />;
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query AllPostsQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: {
							templateKey: {
								in: [
									"event-post"
									"podcast-page"
									"product-page"
									"focus-page"
								]
							}
						}
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
								author
								content {
									type
									image {
										publicURL
										childImageSharp {
											fluid(maxWidth: 1040, quality: 90) {
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
									caption
									body
								}
								PDF
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <IndexPage data={data} count={count} />}
	/>
);
