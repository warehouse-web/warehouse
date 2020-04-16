import React from "react";
import CloseButton from "./CloseButton";
import ReactMarkdown from "react-markdown";
import FluidImage from "./FluidImage";

const FocusDetail = ({
	activeFocus,
	onSetActiveFocus,
	onSetShowFocusDetail,
	renderHtmlToReact,
	title,
	content,
	PDF,
	location,
	date,
	image,
	getAsset,
	articleRef,
	match
}) => {
	console.log("PDF:", PDF);
	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
		>
			{}
			<CloseButton
				onSetActiveEvent={onSetActiveFocus}
				onSetShowEventDetail={onSetShowFocusDetail}
			/>

			<h2 className="article-detail-title">
				{activeFocus && activeFocus.frontmatter
					? activeFocus.frontmatter.title
					: title
					? title
					: ""}
			</h2>

			<section className="content">
				{activeFocus &&
				(activeFocus.frontmatter.content || []).map(el => {
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
						return (
							<ReactMarkdown
								escapeHtml={false}
								source={el.body}
							/>
						);
					}
				})(activeFocus.frontmatter.PDF) ? (
					<a
						className="pdf-download"
						href={activeFocus.frontmatter.PDF.publicURL}
						target="_blank"
					>
						Download Article
					</a>
				) : (
					""
				)}
			</section>
			<section className="content">
				{!activeFocus &&
					content &&
					content.map(el => {
						if (el.type === "images") {
							return (
								<>
									<img src={getAsset(el.image)} alt="" />
									<p className="caption">{el.caption}</p>
								</>
							);
						} else if (el.type === "text") {
							return (
								<ReactMarkdown
									escapeHtml={false}
									source={el.body}
								/>
							);
						}
					})}
				{PDF && (
					<a
						className="pdf-download"
						href={PDF.publicURL}
						target="_blank"
					>
						Download Article
					</a>
				)}
			</section>
		</div>
	);
};

export default FocusDetail;
