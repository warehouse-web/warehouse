import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./main.css";
import Img from "gatsby-image";
import DivOverlay from "./DivOverlay";
import {
	renderHtmlToReact,
	useMedia,
	imagesFromAst,
	useWindowSize,
	isDateBeforeToday,
	renderImg,
	removeImg,
	useSetDivBg,
	useChangeMagicLogo
} from "./utils";
import EventDetail from "./EventDetail";

const EventRoll = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	const [activeEvent, setActiveEvent] = useState(null);
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
			window.history.pushState(
				{ page: 1 },
				event.frontmatter.title,
				event.fields.slug
			);

		setActiveEvent(event);
		setShowEventDetail(true);
	};

	// CHANGING LOGO COLOR
	useEffect(() => {
		useSetDivBg(setDivStyle);
	}, [size]);

	useEffect(() => {
		useChangeMagicLogo();
	}, []);

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
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div className="article-list">
					{posts &&
						posts.map(({ node: post }) => (
							<article
								key={post.id}
								onClick={() => openEvent(post)}
								className={`blog-list-item post ${
									post === activeEvent ? "selected" : ""
								}`}
								onPointerEnter={() =>
									renderImg(post, setDivStyle, size)
								}
								onPointerLeave={() => removeImg(setDivStyle)}
							>
								{post.frontmatter.date &&
									isDateBeforeToday(post) && (
										<h2 className="post-type">
											Past Event
										</h2>
									)}
								{post.frontmatter.date &&
									!isDateBeforeToday(post) && (
										<h2 className="post-type">
											Upcoming Event
										</h2>
									)}
								<header>
									<h1>{post.frontmatter.title}</h1>
									<h2 className="post-meta">
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
		render={(data, count) => <EventRoll data={data} count={count} />}
	/>
);
