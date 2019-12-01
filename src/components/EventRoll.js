import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./main.css";
import Img from "gatsby-image";
import DivOverlay from "../templates/DivOverlay";
import Content, {
	renderHtmlToReact,
	HTMLContent,
	imagesFromAst,
	isDateBeforeToday,
	useWindowSize,
	useMedia
} from "./utils";

const EventRoll = ({ data }) => {
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
		if (imagesFromAst(post.htmlAst)[0].properties.src) {
			setDivStyle({
				backgroundImage: `url( ${
					imagesFromAst(post.htmlAst)[0].properties.src
				} )`
			});
		}
	};

	const removeImg = () => {
		if (size.width < 900) {
			setDivStyle({ backgroundColor: "white" });
		} else {
			setDivStyle({ backgroundColor: "black" });
		}
	};

	const { edges: posts } = data.allMarkdownRemark;
	const match = useMedia("(max-width: 900px) ");
	const [divStyle, setDivStyle] = useState();
	const size = useWindowSize();

	useEffect(() => {
		posts &&
			posts.map(post => {
				if (post.node.fields.slug === window.location.pathname) {
					console.log("yes");
					setActiveEvent(post.node);
					setShowEventDetail(true);

					return;
				}
			});
	}, []);

	console.log("activeEvent", activeEvent);

	return (
		<>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div className="article-list">
					{posts &&
						posts.map(({ node: post }) => (
							<div
								key={post.id}
								onPointerEnter={() => renderImg(post)}
								onPointerLeave={() => removeImg()}
							>
								<article
									onClick={() => openEvent(post)}
									className={`blog-list-item post`}
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
										{/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                  </Link> */}
										<h1>{post.frontmatter.title}</h1>
										<h2 className="post-meta">
											{post.frontmatter.date}
										</h2>
										{post.frontmatter.location && (
											<h2>{post.frontmatter.location}</h2>
										)}
									</header>
								</article>
							</div>
						))}
				</div>

				{showEventDetail && (
					<div className={`article-detail ${match ? `mobile` : ``}`}>
						<div
							className="close"
							onClick={() => setShowEventDetail(false)}
						>
							<span></span>
							<span></span>
						</div>
						<p className="article-ID">
							{activeEvent.frontmatter.warehouseID}
						</p>
						<h2 className="article-detail-title">
							{activeEvent.frontmatter.title}
						</h2>
						<section className="content">
							{renderHtmlToReact(activeEvent.htmlAst)}
						</section>

						{activeEvent.frontmatter.image && (
							<div className="article-image-wrapper">
								<Img
									className="article-detail-image"
									fluid={
										activeEvent.frontmatter.image
											.childImageSharp.fluid
									}
								/>
							</div>
						)}
					</div>
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
						frontmatter: { templateKey: { eq: "blog-post" } }
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
								warehouseID
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
								image {
									childImageSharp {
										fluid(maxWidth: 520, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
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
