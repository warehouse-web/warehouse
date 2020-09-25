import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { Layout, MagicLogo, FocusDetail, EventDetail } from "_components";
import {
	renderHtmlToReact,
	isDateBeforeToday,
	postType,
	useMedia,
	renderImg,
	useSetShiftRatio,
	useChangeMagicLogo
} from "_utils/utils";

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
export const IndexPage = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	//details
	const match = useMedia("(max-width: 900px) ");
	const [activeEvent, setActiveEvent] = useState({});
	const [showEventDetail, setShowEventDetail] = useState(false);

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
			<MagicLogo currImg={divStyle} />
			<div className="index-page">
				<div className="index-page__list">
					{posts &&
						posts.map(({ node: post }) => {
							return (
								<article
									key={post.id}
									onPointerEnter={() =>
										renderImg(post, setDivStyle)
									}
									onPointerLeave={() => setDivStyle(false)}
									onClick={() => openEvent(post)}
									className={`index-page__item ${
										post === activeEvent.event
											? "is-selected"
											: ""
									}`}
								>
									<div className="index-page__item-header">
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"event-post" &&
											isDateBeforeToday(post) && (
												<h2 className="index-page__item-type">
													Past {postType(post)}
												</h2>
											)}
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"event-post" &&
											!isDateBeforeToday(post) && (
												<h2 className="index-page__item-type">
													Upcoming {postType(post)}
												</h2>
											)}
										{post.frontmatter.templateKey !==
											"event-post" && (
											<h2 className="index-page__item-type">
												{postType(post)}
											</h2>
										)}
										<h1 className="index-page__item-title">
											{post.frontmatter.title}
										</h1>
										<h2 className="index-page__item-meta">
											{post.frontmatter.date}
										</h2>
										{post.frontmatter.location && (
											<h2>{post.frontmatter.location}</h2>
										)}
									</div>
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
