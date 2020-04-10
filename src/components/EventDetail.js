import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import CloseButton from "./CloseButton";

const EventDetail = ({
	match,
	activeEvent,
	onSetActiveEvent,
	onSetShowEventDetail,
	renderHtmlToReact,
	title,
	body,
	location,
	date,
	image
}) => {
	console.log("activeEvent:", activeEvent);
	const { frontmatter: post } = activeEvent;
	console.log("post:", post);

	return (
		<div className={`article-detail ${match ? `mobile` : ``}`}>
			<CloseButton
				onSetActiveEvent={onSetActiveEvent}
				onSetShowEventDetail={onSetShowEventDetail}
			/>
			{console.log("activeEvent:", activeEvent)}

			<img src={image} alt="" />
			<h2 className="article-detail-title">
				{activeEvent
					? activeEvent.frontmatter.title
					: title
					? title
					: ""}
			</h2>
			<section className="newCMS">
				{post.content
					? post.content.map(el => {
							console.log("el:", el);
							if (el.type === "images") {
								{
									console.log("shoud render image");
								}
								return <img src={el.image} alt="" />;
								// el.caption ? <p>el.caption</p> : "";
							} else {
								return <p>{el.body}</p>;
							}
					  })
					: ""}
			</section>
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
