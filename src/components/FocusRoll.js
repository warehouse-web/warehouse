import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import "./main.css"
import Img from "gatsby-image"
import DivOverlay from "../templates/DivOverlay"
import Content, {
	renderHtmlToReact,
	HTMLContent,
	imagesFromAst,
	isDateBeforeToday,
	useWindowSize,
	useMedia,
} from "./utils"

const FocusRoll = ({ data }) => {
	const [activeFocus, setActiveFocus] = useState({})
	const [showFocusDetail, setShowFocusDetail] = useState(false)

	const openFocus = (focus) => {
		focus &&
			window.history.pushState(
				{ page: 1 },
				focus.frontmatter.title,
				`?focus=${focus.frontmatter.title}`
			)
		if (focus !== !!activeFocus) {
			setActiveFocus(focus)
			setShowFocusDetail(true)
		}
	}

	const PostContent = HTMLContent || Content
	const match = useMedia("(max-width: 900px) ")
	const { edges: posts } = data.allMarkdownRemark

	return (
		<>
			{/* <DivOverlay /> */}
			<div className="wrapper">
				<div className="article-list">
					{posts &&
						posts.map(({ node: post }) => (
							<div key={post.id}>
								<article
									onClick={() => openFocus(post)}
									className={`blog-list-item post`}
								>
									<h2 className="post-type">Focus</h2>
									<header>
										<p className="post-meta">
											{post.frontmatter.title}
											{post.frontmatter.location}
										</p>
									</header>
								</article>
							</div>
						))}
					{!posts && <h1>No Focus To Show ... Yet</h1>}
				</div>
				{showFocusDetail && (
					<div className={`article-detail ${match ? `mobile` : ``}`}>
						<div
							className="close"
							onClick={() => setShowFocusDetail(false)}
						>
							<span></span>
							<span></span>
						</div>
						<p className="article-ID">
							{activeFocus.frontmatter.warehouseID}
						</p>
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
	)
}

FocusRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array,
		}),
	}),
}

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
								warehouseID
								title
								PDF {
									publicURL
								}
								templateKey
								date(formatString: "MMMM DD, YYYY")
								podcastURL
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
		render={(data, count) => <FocusRoll data={data} count={count} />}
	/>
)
