import React from "react";
import CloseButton from "./CloseButton";
import ReactMarkdown from "react-markdown";
import FluidImage from "./FluidImage";

const ProductDetail = ({
	onSetActiveProduct,
	onSetShowProductDetail,
	renderHtmlToReact,
	match,
	articleRef,
	activeProduct,
	title,
	content,
	PDF,
	getAsset
}) => {
	return (
		<div
			ref={articleRef}
			className={`article-detail ${match ? `mobile` : ``}`}
		>
			<CloseButton
				onSetActiveEvent={onSetActiveProduct}
				onSetShowEventDetail={onSetShowProductDetail}
			/>

			<h2 className="article-detail-title">
				{activeProduct && activeProduct.frontmatter
					? activeProduct.frontmatter.title
					: title
					? title
					: ""}
			</h2>
			<section className="content">
				{activeProduct &&
					(
						(activeProduct && activeProduct.frontmatter.content) ||
						[]
					).map(el => {
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
					})}
				{activeProduct.frontmatter.PDF ? (
					<a
						className="pdf-download"
						href={activeProduct.frontmatter.PDF.publicURL}
						target="_blank"
					>
						Download Item
					</a>
				) : (
					""
				)}
			</section>
			<section className="content">
				{!activeProduct &&
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
						Download Item
					</a>
				)}
			</section>
		</div>
	);
};

export default ProductDetail;
