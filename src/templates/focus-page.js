import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content from "_utils/utils";
import IndexFocus from "_templates/index-focus";

export const FocusPageTemplate = ({
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

FocusPageTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const FocusPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return <IndexFocus />;
};

FocusPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default FocusPage;

export const pageQuery = graphql`
	query FocusPageByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				title
				location
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`;
