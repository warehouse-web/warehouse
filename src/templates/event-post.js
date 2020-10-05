import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import IndexEvent from "_templates/index-event";
import Content from "_utils/utils";

export const BlogPostTemplate = ({ content, contentComponent, date }) => {
	const PostContent = contentComponent || Content;

	return (
		<>
			<div className="event-detail">
				<h2 className="article-detail-title"></h2>
				<p>{date}</p>
				<PostContent content={content} />
			</div>
		</>
	);
};

BlogPostTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,

	title: PropTypes.string,
	helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
	const { markdownRemark: post } = data;

	return <IndexEvent post={post} />;
};

BlogPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			htmlAst
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
`;
