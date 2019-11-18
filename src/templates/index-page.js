import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import Layout from "../components/Layout"
import EventRoll from "../components/EventRoll"
import DivOverlay from "./DivOverlay"
import {
	renderHtmlToReact,
	isDateBeforeToday,
	imagesFromAst,
	relayout,
	postType,
	useWindowSize,
	useMedia,
} from "../components/utils"

export const IndexPageTemplate = ({ data }) => {
	return (
		<Layout>
			<IndexPage />
		</Layout>
	)
}
IndexPageTemplate.propTypes = {
	image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	title: PropTypes.string,
}

export const IndexPage = ({ data }) => {
	const match = useMedia("(max-width: 900px) ")
	const { edges: posts } = data.allMarkdownRemark
	const [activeEvent, setActiveEvent] = useState({})
	const [showEventDetail, setShowEventDetail] = useState(false)
	const [isMobile, setIsMobile] = useState(match)
	const [divStyle, setDivStyle] = useState()
	const size = useWindowSize()

	const renderImg = (post) => {
		if (imagesFromAst(post.htmlAst)[0].properties.src) {
			setDivStyle({
				backgroundImage: `url( ${
					imagesFromAst(post.htmlAst)[0].properties.src
				} )`,
			})
		}
	}

	const removeImg = () => {
		if (size.width < 900) {
			setDivStyle({ backgroundColor: "white" })
		} else {
			setDivStyle({ backgroundColor: "black" })
		}
	}

	useEffect(() => {
		if (match) {
			setDivStyle({ backgroundColor: "black" })
			setIsMobile(true)
		} else {
			setDivStyle({ backgroundColor: "white" })
			setIsMobile(false)
		}
	}, [])

	useEffect(() => {
		window.addEventListener("scroll", relayout)
		return () => {
			window.removeEventListener("scroll", relayout)
		}
	}, [])

	const openEvent = (event) => {
		window.history.pushState(
			{ page: 1 },
			event.frontmatter.title,
			`?event=${event.frontmatter.title}`
		)
		setActiveEvent({ event })
		setShowEventDetail(true)
	}

	return (
		<Layout>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div onScroll={() => relayout()} className="article-list">
					{posts &&
						posts.map(({ node: post }) => {
							return (
								<div
									key={post.id}
									onPointerEnter={() => renderImg(post)}
									onPointerLeave={() => removeImg()}
								>
									<article
										onClick={() => openEvent(post)}
										className={`post `}
									>
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"blog-post" &&
											isDateBeforeToday(post) && (
												<h2 className="post-type">
													Past {postType(post)}
												</h2>
											)}
										{post.frontmatter.date &&
											post.frontmatter.templateKey ===
												"blog-post" &&
											!isDateBeforeToday(post) && (
												<h2 className="post-type">
													Upcoming {postType(post)}
												</h2>
											)}
										{post.frontmatter.templateKey !==
											"blog-post" && (
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
									</article>
								</div>
							)
						})}
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
							{activeEvent.event.frontmatter.warehouseID}
						</p>
						<h2 className="article-detail-title">
							{activeEvent.event.frontmatter.title}
						</h2>

						<section className="content">
							{renderHtmlToReact(activeEvent.event.htmlAst)}
						</section>
						{activeEvent.event.frontmatter.podcastURL && (
							<iframe
								title={activeEvent.event.id}
								width="100%"
								height="300"
								scrolling="no"
								frameborder="no"
								allow="autoplay"
								src={
									"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" +
									activeEvent.event.frontmatter.podcastURL +
									"&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
								}
							/>
						)}
						<p className="article-detail-description">
							{activeEvent.event.frontmatter.body}
						</p>
					</div>
				)}
			</div>
		</Layout>
	)
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object,
		}),
	}),
}

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
									"blog-post"
									"podcast-page"
									"product-page"
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
								warehouseID
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
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
		render={(data, count) => <IndexPage data={data} count={count} />}
	/>
)
