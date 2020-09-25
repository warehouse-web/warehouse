import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { MagicLogo, ProductDetail } from "_components";
import {
	renderHtmlToReact,
	useMedia,
	isDateBeforeToday,
	renderImg,
	useChangeMagicLogo,
	useSetShiftRatio
} from "_utils/utils";

const ShopRoll = ({
	data: {
		allMarkdownRemark: { edges: products }
	}
}) => {
	// match
	const match = useMedia("(max-width: 900px) ");
	const [activeProduct, setActiveProduct] = useState(null);
	const [showProductDetail, setShowProductDetail] = useState(false);

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
			<MagicLogo currImg={divStyle} />
			<div className="index-page">
				<div className="index-page__list">
					{products &&
						products.map(({ node: product }) => (
							<article
								key={product.id}
								onClick={() => openProduct(product)}
								className={`index-page__item ${
									product === activeProduct
										? "is-selected"
										: ""
								}`}
								onPointerEnter={() =>
									renderImg(product, setDivStyle)
								}
								onPointerLeave={() => setDivStyle(false)}
							>
								<h2 className="index-page__item-type">Shop</h2>
								<header>
									<p className="index-page__item-meta">
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
											fluid(maxWidth: 1040, quality: 90) {
												...GatsbyImageSharpFluid_tracedSVG
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
