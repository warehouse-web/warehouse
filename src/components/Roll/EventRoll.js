import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { MagicLogo, EventDetail } from "_components";
import {
	renderHtmlToReact,
	useMedia,
	isDateBeforeToday,
	renderImg,
	useChangeMagicLogo,
	useSetShiftRatio
} from "_utils/utils";

const EventRoll = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	// match
	const match = useMedia("(max-width: 900px) ");
	const [activeEvent, setActiveEvent] = useState(null);
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
			window.history.pushState(
				{ page: 1 },
				event.frontmatter.title,
				event.fields.slug
			);

		setActiveEvent(event);
		setShowEventDetail(true);
	};

	// when we open the website so that we are in the right post
	useEffect(() => {
		posts &&
			posts.map(post => {
				if (post.node.fields.slug === window.location.pathname) {
					setActiveEvent(post.node);
					setShowEventDetail(true);
					return;
				}
			});
	}, []);

	return (
		<>
			<MagicLogo currImg={divStyle} />
			<div className="index-page">
				<div className="index-page__list">
					{posts &&
						posts.map(({ node: post }) => (
							<article
								key={post.id}
								onClick={() => openEvent(post)}
								className={`index-page__item ${
									post === activeEvent ? "is-selected" : ""
								}`}
								onPointerEnter={() =>
									renderImg(post, setDivStyle)
								}
								onPointerLeave={() => setDivStyle(false)}
							>
								{post.frontmatter.date &&
									isDateBeforeToday(post) && (
										<h2 className="index-page__item-type">
											Past Event
										</h2>
									)}
								{post.frontmatter.date &&
									!isDateBeforeToday(post) && (
										<h2 className="index-page__item-type">
											Upcoming Event
										</h2>
									)}
								<header>
									<h1>{post.frontmatter.title}</h1>
									<h2 className="index-page__item-meta">
										{post.frontmatter.date}
									</h2>
									{post.frontmatter.location && (
										<h2>{post.frontmatter.location}</h2>
									)}
								</header>
							</article>
						))}
				</div>

				{showEventDetail && (
					<EventDetail
						match={match}
						activeEvent={activeEvent}
						onSetActiveEvent={setActiveEvent}
						onSetShowEventDetail={setShowEventDetail}
						renderHtmlToReact={renderHtmlToReact}
						articleRef={articleRef}
					/>
				)}
			</div>
		</>
	);
};

EventRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query EventRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "event-post" } }
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
										publicURL
										childImageSharp {
											fluid(maxWidth: 1040, quality: 85) {
												...GatsbyImageSharpFluid_tracedSVG
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
		render={(data, count) => <EventRoll data={data} count={count} />}
	/>
);
