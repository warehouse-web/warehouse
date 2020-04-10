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
	relayout,
	useWindowSize,
	useMedia
} from "./utils";

const FocusRoll = ({ data }) => {
	const [activeFocus, setActiveFocus] = useState({});
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const [showFocusDetail, setShowFocusDetail] = useState(false);
	const size = useWindowSize();

	const openFocus = focus => {
		focus &&
			window.history.pushState(
				{ page: 1 },
				focus.frontmatter.title,
				focus.fields.slug
			);
		if (focus !== !!activeFocus) {
			setActiveFocus(focus);
			setShowFocusDetail(true);
		}
	};

	const renderImg = product => {
		if (imagesFromAst(product.htmlAst)[0] !== undefined) {
			setDivStyle({
				backgroundImage: `url( ${
					imagesFromAst(product.htmlAst)[0].properties.src
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

	useEffect(() => {
		window.addEventListener("scroll", relayout);
		return () => {
			window.removeEventListener("scroll", relayout);
		};
	}, []);

	const PostContent = HTMLContent || Content;
	const match = useMedia("(max-width: 900px) ");
	const { edges: posts } = data.allMarkdownRemark;

	useEffect(() => {
		posts &&
			posts.map(post => {
				if (post.node.fields.slug === window.location.pathname) {
					setActiveFocus(post.node);
					setShowFocusDetail(true);
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
								onClick={() => openFocus(post)}
								className={`blog-list-item post ${
									post === activeFocus ? "selected" : ""
								}`}
							>
								<h2 className="post-type">Focus</h2>
								<header>
									<p className="post-meta">
										{post.frontmatter.title}
										{post.frontmatter.location}
									</p>
								</header>
							</article>
						))}
					{!posts && <h1>No Focus To Show ... Yet</h1>}
				</div>

				{showFocusDetail && (
					<div className={`article-detail ${match ? `mobile` : ``}`}>
						<div
							className="close"
							onClick={() => {
								setActiveFocus(null);
								setShowFocusDetail(false);
							}}
						>
							<span></span>
							<span></span>
						</div>

						<h2 className="article-detail-title">
							{activeFocus.frontmatter.title}
						</h2>
						<section className="content">
							{renderHtmlToReact(activeFocus.htmlAst)}
							<a
								className="pdf-download"
								href={activeFocus.frontmatter.PDF.publicURL}
								target="_blank"
							>
								Download Article
							</a>
						</section>

						{
							<PostContent
								className="content"
								content={activeFocus.html}
							/>
						}

						{activeFocus.excerpt}
					</div>
				)}
			</div>
		</>
	);
};

FocusRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query FocusRollQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "focus-page" } }
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
								PDF {
									publicURL
								}
								templateKey
								date(formatString: "MMMM DD, YYYY")
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <FocusRoll data={data} count={count} />}
	/>
);
