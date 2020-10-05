import React from "react";
import ReactMarkdown from "react-markdown";

import { CloseButton, FluidImage } from "_components";
import { useMedia, getFirstImg } from "_utils/utils";

const Detail = props => {
	const match = useMedia("(max-width: 900px) ");

	const {
		getAsset,
		onSetActive,
		active,
		onSetShowDetail,
		articleRef
	} = props;
	const item = active ? active : props;
	const { id, fields, frontmatter } = item;
	const {
		title,
		content,
		PDF = false,
		price = 20.2,
		slug = "",
		author = ""
	} = frontmatter;
	const thumb = getFirstImg(content);

	const authorFormat = author ? "By " + author : "";

	return (
		<div
			ref={articleRef}
			className={`Article ${match ? `mobile` : ``}`}
			key={id}
		>
			<CloseButton
				onSetActive={onSetActive}
				onSetShowDetail={onSetShowDetail}
			/>
			<h2 className="Article__title">{title}</h2>

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
					} else if (el.type === "cart-button") {
						return (
							<div key={`content--` + i}>
								{price && (
									<div className="Article__price">
										<div className="Article__price-price">
											{price} EUR
										</div>
										<div className="Article__price-btn">
											<button
												className="btn btn--cart snipcart-add-item"
												data-item-id={id}
												data-item-price={price}
												data-item-url={
													"https://www.thisiswarehouse.com" +
													fields.slug
												}
												data-item-image={
													thumb && thumb.publicURL
												}
												data-item-name={title}
												data-item-description={
													authorFormat
												}
												data-item-quantity="1"
											>
												{el.text
													? el.text
													: "Add to cart"}
											</button>
										</div>
									</div>
								)}
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
		</div>
	);
};

export default Detail;
