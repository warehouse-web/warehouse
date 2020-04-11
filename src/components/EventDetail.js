import React from "react";
import Img from "gatsby-image";
import ReactMarkdown from "react-markdown";
import CloseButton from "./CloseButton";
import FluidImage from "./FluidImage";

const EventDetail = ({
	match,
	activeEvent,
	onSetActiveEvent,
	onSetShowEventDetail,
	renderHtmlToReact,
	title,
	content,
	location,
	date,
	image,
	getAsset,
	articleRef,
	entry
}) => {
	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
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
			{/* <img src={image} alt="" />
			{image.map(el => {
				<img src={el} alt="" />;
			})} */}
			<section className="content">
				{((activeEvent && activeEvent.frontmatter.content) || []).map(
					el => {
						if (el.type === "images") {
							return (
								<>
									{" "}
									{el.image ? (
										<FluidImage image={el.image} />
									) : (
										<img src={el.image} alt="" />
									)}
									<p className="caption">
										{el.caption ? el.caption : ""}
									</p>
								</>
							);
						} else {
							return <p className="bodyText">{el.body}</p>;
						}
					}
				)}
			</section>
			<section className="content">
				{activeEvent
					? renderHtmlToReact(activeEvent.htmlAst)
					: (content || []).map(el => {
							console.log("image:", image);
							console.log("el:", el);
							if (el.type === "images") {
								return (
									<>
										<img src={getAsset(el.image)} alt="" />
										<p className="caption">{el.caption}</p>
									</>
								);
							} else if (el.type === "text") {
								return (
									<>
										<p className="bodyText">
											<ReactMarkdown
												escapeHtml={false}
												source={el.body}
											/>
										</p>
									</>
								);
							}
					  })}
			</section>
		</div>
	);
};

export default EventDetail;
