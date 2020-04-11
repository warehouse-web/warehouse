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
	location,
	date,
	image,
	getAsset,
	articleRef,
	match
}) => {
	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
		>
			<CloseButton
				onSetActiveEvent={onSetActiveFocus}
				onSetShowEventDetail={onSetShowFocusDetail}
			/>

			<h2 className="article-detail-title">
				{activeFocus.frontmatter.title}
			</h2>

			<section className="content">
				{((activeFocus && activeFocus.frontmatter.content) || []).map(
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
				{activeFocus
					? renderHtmlToReact(activeFocus.htmlAst)
					: (content || []).map(el => {
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

				<a
					className="pdf-download"
					href={activeFocus.frontmatter.PDF.publicURL}
					target="_blank"
				>
					Download Article
				</a>
			</section>
			{activeFocus.excerpt}
		</div>
	);
};

export default FocusDetail;
