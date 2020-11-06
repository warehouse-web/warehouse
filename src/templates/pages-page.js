import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content from "_utils/utils";

export const PagesPageTemplate = ({
	content,
	contentComponent,
	title,
	helmet
}) => {
	const PostContent = contentComponent || Content;

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
			<PostContent
				style={{
					justifyContent: "left",
					textAlign: "left",
					margin: "3.8em",
					marginTop: "1.5rem"
				}}
				className="content"
				content={content}
			/>
		</div>
	);
};

PagesPageTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const PagesPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return <IndexPages post={post} />;
};

PagesPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PagesPage;

export const pageQuery = graphql`
	query PagesPageByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			htmlAst
			fields {
				slug
			}
			frontmatter {
				title
				templateKey
			}
		}
	}
`;
