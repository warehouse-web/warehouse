import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import "./main.css";
import DivOverlay from "./DivOverlay";
import {
	renderHtmlToReact,
	useMedia,
	imagesFromAst,
	relayout,
	useWindowSize,
	renderImg,
	removeImg,
	useSetDivBg,
	useChangeMagicLogo
} from "../components/utils";
import ProductDetail from "./ProductDetail";

const ShopRoll = ({
	data: {
		allMarkdownRemark: { edges: products }
	}
}) => {
	const [activeProduct, setActiveProduct] = useState(null);
	const [showProductDetail, setShowProductDetail] = useState(false);
	const articleRef = useRef();
	const match = useMedia("(max-width: 900px) ");
	const [divStyle, setDivStyle] = useState({ backgroundColor: "black" });
	const size = useWindowSize();

	const openProduct = product => {
		const isClient = typeof window === "object";
		if (isClient && articleRef.current) {
			articleRef.current.scrollTo(0, 0);
		}
		product &&
			window.history.pushState(
				{ page: 1 },
				product.frontmatter.title,
				product.fields.slug
			);
		setActiveProduct(product);
		setShowProductDetail(true);
	};

	// CHANGING LOGO COLOR
	useEffect(() => {
		useSetDivBg(setDivStyle);
	}, [size]);

	useEffect(() => {
		useChangeMagicLogo();
	}, []);

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

	return (
		<>
			<DivOverlay currImg={divStyle} />
			<div className="wrapper">
				<div className="article-list">
					{products &&
						products.map(({ node: product }) => (
							<article
								key={product.id}
								onClick={() => openProduct(product)}
								className={`blog-list-item post ${
									product === activeProduct ? "selected" : ""
								}`}
								onPointerEnter={() =>
									renderImg(product, setDivStyle, size)
								}
								onPointerLeave={() => removeImg(setDivStyle)}
							>
								<h2 className="post-type">Shop</h2>
								<header>
									<p className="post-meta">
										{product.frontmatter.title}
									</p>
									<h2>By {product.frontmatter.author}</h2>
								</header>
							</article>
						))}
					{!products && <h1>No Items To Show ...Yet</h1>}
				</div>

				{showProductDetail && (
					<ProductDetail
						onSetActiveProduct={setActiveProduct}
						onSetShowProductDetail={setShowProductDetail}
						renderHtmlToReact={renderHtmlToReact}
						match={match}
						articleRef={articleRef}
						activeProduct={activeProduct}
					/>
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
								title
								author
								templateKey
								date(formatString: "MMMM DD, YYYY")
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
								PDF {
									publicURL
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
