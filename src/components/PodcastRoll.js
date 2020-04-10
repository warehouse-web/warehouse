import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./main.css";
import DivOverlay from "../templates/DivOverlay";
import Content, {
	renderHtmlToReact,
	imagesFromAst,
	HTMLContent,
	useWindowSize,
	useMedia
} from "../components/utils";

const PodcastRoll = ({ data }) => {
	const [activePodcast, setActivePodcast] = useState({});
	const [showPodcastDetail, setShowPodcastDetail] = useState(false);
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();

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

	const openPodcast = podcast => {
		podcast &&
			window.history.pushState(
				{ page: 1 },
				podcast.frontmatter.title,
				podcast.fields.slug
			);
		if (podcast !== !!activePodcast) {
			setActivePodcast(podcast);
			setShowPodcastDetail(true);
		}
	};

	const PostContent = HTMLContent || Content;
	const match = useMedia("(max-width: 900px) ");
	const { edges: posts } = data.allMarkdownRemark;

	useEffect(() => {
		posts &&
			posts.map(post => {
				if (post.node.fields.slug === window.location.pathname) {
					setActivePodcast(post.node);
					setShowPodcastDetail(true);

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
								onPointerEnter={() => renderImg(post)}
								onPointerLeave={() => removeImg()}
								onClick={() => openPodcast(post)}
								className={`blog-list-item post ${
									post === activePodcast ? "selected" : ""
								}`}
							>
								<h2 className="post-type">Podcast</h2>
								<header>
									<p className="post-meta">
										{post.frontmatter.title}
										<span className="subtitle is-size-5 is-block">
											{/* {post.frontmatter.date} */}
											{/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                  </Link> */}
										</span>
										{post.frontmatter.location}
									</p>
								</header>
							</article>
						))}
					{!posts && <h1>No Podcasts To Show ... Yet</h1>}
				</div>
				{showPodcastDetail && (
					<div className={`article-detail ${match ? `mobile` : ``}`}>
						<div
							className="close"
							onClick={() => {
								setActivePodcast(null);
								setShowPodcastDetail(false);
							}}
						>
							<span></span>
							<span></span>
						</div>

						<h2 className="article-detail-title">
							{activePodcast.frontmatter.title}
						</h2>

						<section className="content">
							{renderHtmlToReact(activePodcast.htmlAst)}
						</section>

						{activePodcast.excerpt}
					</div>
				)}
			</div>
		</>
	);
};

PodcastRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query PodcastRollQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "podcast-page" } }
					}
				) {
					edges {
						node {
							id
							htmlAst
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <PodcastRoll data={data} count={count} />}
	/>
);
