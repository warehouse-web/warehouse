import React from "react";
import { isDateBeforeToday, renderImg, postType } from "_utils/utils";

const Item = ({ post, openPost, setDivStyle, active }) => {
	const {
		title = "",
		date = false,
		location = false,
		templateKey = "",
		author = ""
	} = post.frontmatter;

	const authorFormat =
		templateKey === "product-page" || templateKey === "focus-page"
			? author
				? "By " + author
				: false
			: false;
	const dateFormat = templateKey !== "product-page" ? date : false;
	const formatDate =
		templateKey === "event-post" && date
			? isDateBeforeToday(post)
				? "Past"
				: "Upcoming"
			: false;
	const type = postType(post);

	return (
		<article
			key={post.id}
			onPointerEnter={() => renderImg(post, setDivStyle)}
			onPointerLeave={() => setDivStyle(false)}
			onClick={() => openPost(post)}
			className={`Item ${post.id === active.id ? "is-selected" : ""}`}
		>
			<div className="Item__header">
				{formatDate && (
					<h2 className="Item__type">
						{formatDate} {type}
					</h2>
				)}

				{templateKey !== "event-post" && (
					<h2 className="Item__type">{type}</h2>
				)}
				<h1 className="Item__title">{title}</h1>
				{dateFormat && <h2 className="Item__meta">{dateFormat}</h2>}
				{authorFormat && <h2 className="Item__meta">{authorFormat}</h2>}
				{location && <h2>{location}</h2>}
			</div>
		</article>
	);
};
export default Item;
