import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./main.css";
import Img from "gatsby-image";
import DivOverlay from "../templates/DivOverlay";
import {
	renderHtmlToReact,
	useMedia,
	imagesFromAst,
	relayout,
	useWindowSize,
	isDateBeforeToday
} from "./utils";
import EventDetail from "./EventDetail";

const EventRoll = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	const [activeEvent, setActiveEvent] = useState(false);
	const [showEventDetail, setShowEventDetail] = useState(false);
	const openEvent = event => {
		event &&
			window.history.pushState(
				{ page: 1 },
				event.frontmatter.title,
				event.fields.slug
			);

		setActiveEvent(event);

		setShowEventDetail(true);
	};

	const renderImg = post => {
		if (imagesFromAst(post.htmlAst)[0] !== undefined) {
			setDivStyle({
				backgroundImage: `url( ${
					imagesFromAst(post.htmlAst)[0].properties.src
				} )`
			});
		} else {
			setDivStyle({ backgroundColor: "black" });
		}
	};

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

	const match = useMedia("(max-width: 900px) ");
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();

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

	useEffect(() => {
		window.addEventListener("scroll", relayout);
		return () => {
			window.removeEventListener("scroll", relayout);
		};
	}, []);

	return (
		<>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div className="article-list">
					{posts &&
						posts.map(({ node: post }) => (
							<article
								onClick={() => openEvent(post)}
								className={`blog-list-item post ${
									post === activeEvent ? "selected" : ""
								}`}
								key={post.id}
								onPointerEnter={() => renderImg(post)}
								onPointerLeave={() => removeImg()}
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
										childImageSharp {
											fluid(maxWidth: 1440, quality: 90) {
												...GatsbyImageSharpFluid_withWebp
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
