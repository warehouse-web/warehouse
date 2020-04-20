import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import Layout from "../components/Layout";
import {
	renderHtmlToReact,
	isDateBeforeToday,
	imagesFromAst,
	relayout,
	postType,
	useWindowSize,
	useMedia,
	renderImg,
	useSetShiftRatio
} from "../components/utils";
import EventDetail from "../components/EventDetail";
import DivOverlay from "../components/DivOverlay";
import FocusDetail from "../components/FocusDetail";

export const IndexPageTemplate = ({ data }) => {
	return (
		<Layout>
			<IndexPage />
		</Layout>
	);
};
IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string
};
// MAIN PAGE LOADS EVERYTHING
export const IndexPage = ({ data }) => {
	const match = useMedia("(max-width: 900px) ");
	const { edges: posts } = data.allMarkdownRemark;
	const [activeEvent, setActiveEvent] = useState({});
	const [showEventDetail, setShowEventDetail] = useState(false);
	const [isMobile, setIsMobile] = useState(match);
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();
	const shift = useSetShiftRatio();
	useEffect(() => {
		shift;
	}, []);

	const articleRef = useRef();

	const removeImg = () => {
		if (size.width < 900) {
			setDivStyle({ backgroundColor: "white" });
		} else {
			setDivStyle({ backgroundColor: "black" });
		}
	};

	// CHANGING LOGO COLOR
	useEffect(() => {
		size.width > 900
			? setDivStyle({ backgroundColor: "black" })
			: setDivStyle({ backgroundColor: "white" });
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", relayout);
		return () => {
			window.removeEventListener("scroll", relayout);
		};
	}, []);

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

	return (
		<Layout>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div className="article-list">
					{posts &&
						posts.map(({ node: post }) => {
							return (
								<article
									key={post.id}
									onPointerEnter={() =>
										renderImg(post, setDivStyle, size)
									}
									onPointerLeave={() => removeImg()}
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
				{(showEventDetail && activeEvent.event.frontmatter.PDF && (
					<FocusDetail
						match={match}
						activeFocus={activeEvent.event}
						onSetActiveEvent={setActiveEvent}
						onSetShowEventDetail={setShowEventDetail}
						renderHtmlToReact={renderHtmlToReact}
						articleRef={articleRef}
					/>
				)) ||
					(showEventDetail && (
						<EventDetail
							match={match}
							activeEvent={activeEvent.event}
							onSetActiveEvent={setActiveEvent}
							onSetShowEventDetail={setShowEventDetail}
							renderHtmlToReact={renderHtmlToReact}
							articleRef={articleRef}
						/>
					))}
			</div>
		</Layout>
	);
};

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
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
								PDF {
									publicURL
								}
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
								content {
									type
									image {
										publicURL
										childImageSharp {
											fluid(maxWidth: 1040, quality: 90) {
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
		render={(data, count) => <IndexPage data={data} count={count} />}
	/>
);
