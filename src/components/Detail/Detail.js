import React from "react";
import ReactMarkdown from "react-markdown";

import { CloseButton, FluidImage } from "_components";
import { useMedia } from "_utils/utils";

const Detail = ({
	active,
	onSetActive,
	onSetShowDetail,
	title,
	content,
	getAsset,
	articleRef,
	id,
	PDF = false,
	price = false
}) => {
	const match = useMedia("(max-width: 900px) ");

	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
			key={id}
		>
			<CloseButton
				onSetActive={onSetActive}
				onSetShowDetail={onSetShowDetail}
			/>
			<h2 className="article-detail-title">
				{active ? active.frontmatter.title : title ? title : ""}
			</h2>
			{price && (
				<div className="article-detail-price">
					<div className="btn">Add to cart</div>
				</div>
			)}
			<section className="content">
				{((active && active.frontmatter.content) || []).map((el, i) => {
					if (el.type === "images") {
						return (
							<div key={`content--` + i}>
								{el.image && <FluidImage image={el.image} />}
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
			<section className="content">
				{!active &&
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

export default Detail;
