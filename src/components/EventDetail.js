import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

const EventDetail = ({
	match,
	activeEvent,
	onSetActiveEvent,
	onSetShowEventDetail,
	renderHtmlToReact,
	warehouseID,
	title,
	body,
	location,
	date
}) => {
	return (
		<div className={`article-detail ${match ? `mobile` : ``}`}>
			<div
				className="close"
				onClick={() => {
					onSetActiveEvent(null);
					onSetShowEventDetail(false);
				}}
			>
				<span></span>
				<span></span>
			</div>
			<p className="article-ID">
				{activeEvent
					? activeEvent.frontmatter.warehouseID
					: warehouseID
					? warehouseID
					: ""}
			</p>
			<h2 className="article-detail-title">
				{activeEvent
					? activeEvent.frontmatter.title
					: title
					? title
					: ""}
			</h2>
			<section className="content">
				{activeEvent ? (
					renderHtmlToReact(activeEvent.htmlAst)
				) : body ? (
					<ReactMarkdown source={body} />
				) : (
					""
				)}
			</section>
		</div>
	);
};

export default EventDetail;
