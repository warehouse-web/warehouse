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
	useWindowSize
} from "../components/utils";

const ShopRoll = ({ data }) => {
	const [activeProduct, setActiveProduct] = useState(false);
	const [showProductDetail, setShowProductDetail] = useState(false);
	const { edges: products } = data.allMarkdownRemark;
	const match = useMedia("(max-width: 900px) ");
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();

	const renderImg = product => {
		if (imagesFromAst(product.htmlAst)[0].properties.src) {
			setDivStyle({
				backgroundImage: `url( ${
					imagesFromAst(product.htmlAst)[0].properties.src
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

	// CHANGING LOGO COLOR
	useEffect(() => {
		size.width > 900
			? setDivStyle({ backgroundColor: "black" })
			: setDivStyle({ backgroundColor: "white" });
	}, []);

	const openProduct = product => {
		product &&
			window.history.pushState(
				{ page: 1 },
				product.frontmatter.title,
				product.fields.slug
			);
		setActiveProduct(product);
		setShowProductDetail(true);
	};

	useEffect(() => {
		products &&
			products.map(product => {
				if (product.node.fields.slug === window.location.pathname) {
					setActiveProduct(product.node);
					setShowProductDetail(true);
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
					{products &&
						products.map(({ node: product }) => (
							<div
								key={product.id}
								onPointerEnter={() => renderImg(product)}
								onPointerLeave={() => removeImg()}
							>
								<article
									onClick={() => openProduct(product)}
									className={`blog-list-item post`}
								>
									<h2 className="post-type">Shop</h2>
									<header>
										<p className="post-meta">
											{product.frontmatter.title}
										</p>
										<h2>By {product.frontmatter.author}</h2>
									</header>
								</article>
							</div>
						))}
					{!products && <h1>No Items To Show ...Yet</h1>}
				</div>

				{showProductDetail && (
					<div className={`article-detail ${match ? `mobile` : ``}`}>
						{/* Close Button */}
						<div
							className="close"
							onClick={() => setShowProductDetail(false)}
						>
							<span></span>
							<span></span>
						</div>
						<p className="article-ID">
							{activeProduct.frontmatter.warehouseID}
						</p>
						{console.log("activeProduct:", activeProduct)}

						<h2 className="article-detail-title">
							{activeProduct.frontmatter.title}
						</h2>

						<section className="content">
							{renderHtmlToReact(activeProduct.htmlAst)}
						</section>

						{activeProduct.frontmatter.image && (
							<div className="article-image-wrapper">
								<Img
									className="article-detail-image"
									fluid={
										activeProduct.frontmatter.image
											.childImageSharp.fluid
									}
								/>
							</div>
						)}
						<a
							href={`mailto: buy@wearewarehouse.com?subject=${activeProduct.frontmatter.title}`}
						>
							Send mail with subject
						</a>
					</div>
				)}
			</div>
		</>
	);
};

ShopRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query ShopRollQuery {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "product-page" } }
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
								author
								templateKey
								date(formatString: "MMMM DD, YYYY")
								image {
									childImageSharp {
										fluid(maxWidth: 620, quality: 100) {
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
		render={(data, count) => <ShopRoll data={data} count={count} />}
	/>
);
