import React, { useState, useEffect, useRef } from "react";
import { graphql, StaticQuery } from "gatsby";

import {
	renderHtmlToReact,
	isDateBeforeToday,
	imagesFromAst,
	relayout,
	postType,
	useWindowSize,
	renderImg,
	removeImg,
	useSetDivBg,
	useMedia,
	useChangeMagicLogo
} from "../components/utils";
import DivOverlay from "./DivOverlay";
import EventDetail from "./EventDetail";
import ProductDetail from "./ProductDetail";
import FocusDetail from "./FocusDetail";

const IndexRoll = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	const [activeEvent, setActiveEvent] = useState(false);
	const [showEventDetail, setShowEventDetail] = useState(false);
	const articleRef = useRef();
	const match = useMedia("(max-width: 900px) ");
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();

	const openEvent = event => {
		const isClient = typeof window === "object";
		if (isClient && articleRef.current) {
			articleRef.current.scrollTo(0, 0);
		}

		event &&
			event.frontmatter &&
			window.history.pushState(
				{ page: 1 },
				event.frontmatter.title,
				event.fields.slug
			);

		setActiveEvent({ event });
		setShowEventDetail(true);
	};
	// CHANGING LOGO COLOR
	useEffect(() => {
		useSetDivBg(setDivStyle);
	}, [size]);

	useEffect(() => {
		useChangeMagicLogo();
	}, []);

	// const [isMobile, setIsMobile] = useState(match);

	const componentDetailType = activeEvent => {
		console.log("activeEvent:", activeEvent);
		if (activeEvent && activeEvent.event) {
			switch (activeEvent.event.frontmatter.templateKey) {
				case "event-post":
					return (
						<EventDetail
							match={match}
							activeEvent={activeEvent.event}
							onSetActiveEvent={setActiveEvent}
							onSetShowEventDetail={setShowEventDetail}
							renderHtmlToReact={renderHtmlToReact}
							articleRef={articleRef}
						/>
					);
				case "podcast-page":
					return <h1>not ready yet</h1>;
				case "product-page":
					return (
						<ProductDetail
							onSetActiveEvent={setActiveEvent}
							onSetShowEventDetail={setShowEventDetail}
							renderHtmlToReact={renderHtmlToReact}
							match={match}
							articleRef={articleRef}
							activeEvent={activeEvent.event}
						/>
					);
				case "focus-page":
					return <FocusDetail />;
				default:
					return null;
			}
		}
	};

	return (
		<>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div onScroll={() => relayout()} className="article-list">
					{posts &&
						posts.map(({ node: post }) => {
							return (
								<article
									key={post.id}
									onPointerEnter={() =>
										renderImg(post, setDivStyle, size)
									}
									onPointerLeave={() =>
										removeImg(setDivStyle)
									}
									onClick={() => openEvent(post)}
									className={`blog-list-item post ${
										post === activeEvent.event
											? "selected"
											: ""
									}`}
								>
									<header>
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"event-post" &&
											isDateBeforeToday(post) && (
												<h2 className="post-type">
													Past {postType(post)}
												</h2>
											)}
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"event-post" &&
											!isDateBeforeToday(post) && (
												<h2 className="post-type">
													Upcoming {postType(post)}
												</h2>
											)}
										{post.frontmatter.templateKey !==
											"event-post" && (
											<h2 className="post-type">
												{postType(post)}
											</h2>
										)}
										<h1 className="post-title">
											{post.frontmatter.title}
										</h1>
										<h2 className="post-meta">
											{post.frontmatter.date}
										</h2>
										{post.frontmatter.location && (
											<h2>{post.frontmatter.location}</h2>
										)}
									</header>
								</article>
							);
						})}
				</div>
				{showEventDetail && componentDetailType(activeEvent)
				// <p>hello</p>
				}
			</div>
		</>
	);
};

export default () => (
	<StaticQuery
		query={graphql`
			query AllPostsQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: {
							templateKey: {
								in: [
									"event-post"
									"podcast-page"
									"product-page"
									"focus-page"
								]
							}
						}
					}
				) {
					edges {
						node {
							htmlAst
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
								content {
									type
									image {
										childImageSharp {
											fluid(maxWidth: 1440, quality: 90) {
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
									caption
									body
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <IndexRoll data={data} count={count} />}
	/>
);
