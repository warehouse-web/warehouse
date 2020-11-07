import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import IndexPodcast from "_templates/index-podcast";
import Content from "_utils/utils";

export const PodcastTemplate = ({
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

			<PostContent content={content} />
		</div>
	);
};

PodcastTemplate.propTypes = {
	content: PropTypes.node.isRequired,
	contentComponent: PropTypes.func,
	title: PropTypes.string,
	helmet: PropTypes.object
};

const Podcast = data => {
	return <IndexPodcast />;
};

Podcast.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default Podcast;

export const podcastQuery = graphql`
	query PodcastByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;
