import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";

import { CloseButton, FluidImage } from "_components";

const EventDetail = ({
	match,
	activeEvent,
	onSetActiveEvent,
	onSetShowEventDetail,
	title,
	content,
	location,
	date,
	image,
	getAsset,
	articleRef,
	entry,
	id
}) => {
	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
			key={id}
		>
			<CloseButton
				onSetActiveEvent={onSetActiveEvent}
				onSetShowEventDetail={onSetShowEventDetail}
			/>

			<h2 className="article-detail-title">
				{activeEvent
					? activeEvent.frontmatter.title
					: title
					? title
					: ""}
			</h2>
			<section className="content">
				{((activeEvent && activeEvent.frontmatter.content) || []).map(
					(el, i) => {
						if (el.type === "images") {
							return (
								<div key={`content--` + i}>
									{el.image && (
										<FluidImage image={el.image} />
									)}
									<p className="caption">
										{el.caption ? el.caption : ""}
									</p>
								</div>
							);
						} else {
							return (
								<ReactMarkdown
									key={`content--` + i}
									linkTarget={"_blank"}
									escapeHtml={false}
									source={el.body}
								/>
							);
						}
					}
				)}
			</section>
			<section className="content">
				{!activeEvent &&
					content &&
					content.map((el, i) => {
						if (el.type === "images") {
							return (
								<div key={`content-two--` + i}>
									<img src={getAsset(el.image)} alt="" />
									<p className="caption">{el.caption}</p>
								</div>
							);
						} else if (el.type === "text") {
							return (
								<ReactMarkdown
									key={`content-two--` + i}
									escapeHtml={false}
									source={el.body}
								/>
							);
						}
					})}
			</section>
		</div>
	);
};

export default EventDetail;
