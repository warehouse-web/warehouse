import React, { useState, useEffect, useRef } from "react";
import { Layout, MagicLogo, Item, Detail } from "_components";
import {
	renderHtmlToReact,
	useSetShiftRatio,
	useChangeMagicLogo
} from "_utils/utils";
const Roll = ({ posts = [], post = false }) => {
	//details
	const [active, setActive] = useState(post ? post : false);
	const [showDetail, setShowDetail] = useState(post ? true : false);

	// main
	const [divStyle, setDivStyle] = useState(false);
	const shift = useSetShiftRatio();
	useEffect(() => {
		// shift layout
		shift;
		// on scroll
		useChangeMagicLogo();
	}, []);

	// article
	const articleRef = useRef();
	const openPost = item => {
		const isClient = typeof window === "object";
		if (isClient && articleRef.current) {
			articleRef.current.scrollTo(0, 0);
		}

		item &&
			item.frontmatter &&
			window.history.pushState(
				{
					page: 1,
					before: {
						title: document.title,
						slug: window.location.pathname
					}
				},
				item.frontmatter.title,
				item.fields.slug
			);

		setActive(item);
		setShowDetail(true);
	};

	// // when we open the website so that we are in the right post
	// useEffect(() => {
	// 	posts &&
	// 		posts.map(post => {
	// 			if (post.node.fields.slug === window.location.pathname) {
	// 				setActive(post.node);
	// 				setShowDetail(true);
	// 				return;
	// 			}
	// 		});
	// }, []);

	return (
		<Layout>
			<MagicLogo currImg={divStyle} />
			<div className="Roll">
				<div className="Roll__list">
					{posts &&
						posts.map(({ node: post }, i) => {
							return (
								<Item
									post={post}
									key={"post--" + i}
									openPost={openPost}
									setDivStyle={setDivStyle}
									active={active}
								/>
							);
						})}

					{posts.length === 0 && <h1>Coming soon..</h1>}
				</div>

				{showDetail && (
					<Detail
						active={active}
						onSetActive={setActive}
						onSetShowDetail={setShowDetail}
						renderHtmlToReact={renderHtmlToReact}
						articleRef={articleRef}
					/>
				)}
			</div>
		</Layout>
	);
};
export default Roll;
