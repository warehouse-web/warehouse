import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";
import "../components/main.css";
import PodcastRoll from "../components/PodcastRoll";

export const PodcastTemplate = ({
	content,
	contentComponent,
	// tags,
	date,
	title,
	helmet,
	warehouseID
}) => {
	const PostContent = contentComponent || Content;

	return (
		<div className="event-detail">
			{helmet || ""}
			<p
				style={{
					fontSize: ".7rem",
					fontFamily: "Arial, Helvetica, sans-serif",
					textAlign: "center"
				}}
			>
				{warehouseID}
			</p>
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
			<iframe
				width="100%"
				height="300"
				scrolling="no"
				frameborder="no"
				allow="autoplay"
			/>
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
	return (
		<Layout>
			<PodcastRoll />
			{/* <PodcastTemplate
				content={data.content}
				warehouseID={data.warehouseID}
				helmet={
					<Helmet titleTemplate="%s | Podcast">
						<title>{`${data.title}`}</title>
					</Helmet>
				}
				title={data.title}
			/> */}
		</Layout>
	);
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
				warehouseID
			}
		}
	}
`;
