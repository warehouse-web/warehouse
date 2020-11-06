import React from "react";
import ReactMarkdown from "react-markdown";

import { CloseButton, FluidImage } from "_components";
import { useMedia } from "_utils/utils";

const Detail = props => {
	const match = useMedia("(max-width: 900px) ");

	const {
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
	} = props;

	const PDFDownloadString =
		active && active.frontmatter.PDF
			? active.frontmatter.PDF.publicUrl
			: PDF
			? PDF.publicUrl
			: false;

	const PDFDownload = PDFDownloadString ? PDFDownloadString : false;

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
					} else if (el.type === "text") {
						return (
							<ReactMarkdown
								key={`content--` + i}
								linkTarget={"_blank"}
								escapeHtml={false}
								source={el.body}
							/>
						);
					} else {
						<div key={`content--` + i} />;
					}
				})}
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
				{PDFDownload && (
					<a
						className="pdf-download"
						href={PDFDownload}
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
