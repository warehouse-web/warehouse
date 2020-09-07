import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Newsletter from "../components/Newsletter";
import ReactMarkdown from "react-markdown";
import FluidImage from "../components/FluidImage";

export const AboutPageTemplate = ({
	title,
	leftColumn,
	rightColumn,
	html,
	other,
	content,
	blurbs,
	images
}) => {
	return (
		<div className="about-background">
			<Link className="close" id="white" to="/">
				<span className="white"></span>
				<span className="white"></span>
			</Link>
			<div className="about-wrapper">
				<div className="about-left">
					<h2 className="about-title">
						{title}
						<span className="about-caps">{leftColumn}</span>
					</h2>
				</div>
				<div>
					<ReactMarkdown
						linkTarget={"_blank"}
						className="about-right"
						escapeHtml={false}
						source={rightColumn}
					/>
					<ul className="colophon">
						{blurbs &&
							(blurbs || []).map(el => {
								return (
									<>
										<li>{el.title}</li>
										<li>{el.subtitle}</li>
									</>
								);
							})}
					</ul>
					{images &&
						images.map(({ image, caption }) => {
							return (
								<>
									{image && <FluidImage image={image} />}
									<p className="caption caption-about">
										{caption ? caption : ""}
									</p>
								</>
							);
						})}

					<div className="about-other">
						<ReactMarkdown
							style={{ color: "white" }}
							escapeHtml={false}
							source={other}
						/>
					</div>
					<Newsletter />
				</div>
			</div>
		</div>
	);
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate
				title={post.frontmatter.title}
				leftColumn={post.frontmatter.leftColumn}
				colophon={post.frontmatter.colophon}
				blurbs={post.frontmatter.blurbs}
				other={post.frontmatter.other}
				rightColumn={post.frontmatter.rightColumn}
				image={post.frontmatter.image}
				attachments={post.frontmatter.attachments}
				caption={post.frontmatter.caption}
				images={post.frontmatter.images}
			/>
			{console.log("post.frontmatter.image:", post.frontmatter.image)}
		</Layout>
	);
};

AboutPage.propTypes = {
	data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
	query AboutPage($id: String!) {
		markdownRemark(id: { eq: $id }) {
			frontmatter {
				title
				leftColumn
				rightColumn
				other
				images {
					image {
						childImageSharp {
							fluid(maxWidth: 1040, quality: 80) {
								...GatsbyImageSharpFluid_tracedSVG
							}
						}
					}
					caption
				}
				blurbs {
					title
					subtitle
				}
			}
		}
	}
`;
