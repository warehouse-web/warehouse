import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { MagicLogo, FocusDetail } from "_components";
import {
	renderHtmlToReact,
	useMedia,
	imagesFromAst,
	relayout,
	useWindowSize,
	renderImg,
	removeImg,
	useSetDivBg,
	useChangeMagicLogo,
	useSetShiftRatio
} from "_utils/utils";

const FocusRoll = ({
	data: {
		allMarkdownRemark: { edges: posts }
	}
}) => {
	// mathc
	const match = useMedia("(max-width: 900px) ");
	const [activeFocus, setActiveFocus] = useState(null);
	const [showFocusDetail, setShowFocusDetail] = useState(false);
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

	const openFocus = focus => {
		const isClient = typeof window === "object";
		if (isClient && articleRef.current) {
			articleRef.current.scrollTo(0, 0);
		}
		focus &&
			focus.fields &&
			window.history.pushState(
				{ page: 1 },
				focus.frontmatter.title,
				focus.fields.slug
			);

		setActiveFocus(focus);
		setShowFocusDetail(true);
	};

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
			<MagicLogo currImg={divStyle} />
			<div className="index-page">
				<div className="index-page__list">
					{posts &&
						posts.map(({ node: post }) => (
							<article
								key={post.id}
								onClick={() => openFocus(post)}
								className={`index-page__item ${
									post === activeFocus ? "is-selected" : ""
								}`}
								onPointerEnter={() =>
									renderImg(post, setDivStyle)
								}
								onPointerLeave={() => setDivStyle(false)}
							>
								<h2 className="index-page__item-type">Focus</h2>
								<header>
									<p className="index-page__item-meta">
										{post.frontmatter.title}
									</p>
									<h2 className="index-page__item-meta">
										{post.frontmatter.date}
									</h2>
									<h2>By {post.frontmatter.author}</h2>
								</header>
							</article>
						))}
					{!posts && <h1>No Focus To Show ... Yet</h1>}
				</div>

				{showFocusDetail && (
					<FocusDetail
						onSetActiveFocus={setActiveFocus}
						onSetShowFocusDetail={setShowFocusDetail}
						renderHtmlToReact={renderHtmlToReact}
						match={match}
						articleRef={articleRef}
						activeFocus={activeFocus}
					/>
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
								templateKey
								author
								date(formatString: "MMMM DD, YYYY")
								content {
									type
									image {
										publicURL
										childImageSharp {
											fluid(maxWidth: 1040, quality: 80) {
												...GatsbyImageSharpFluid_withWebp_tracedSVG
											}
										}
									}
									caption
									body
								}
								PDF {
									publicURL
								}
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <FocusRoll data={data} count={count} />}
	/>
);
