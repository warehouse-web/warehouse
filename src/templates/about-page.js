import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Layout } from "_components";
import { Newsletter, FluidImage } from "_components";
import ReactMarkdown from "react-markdown";

export const AboutPageTemplate = ({
	title,
	leftColumn,
	rightColumn,
	other,
	images
}) => {
	console.log(images);
	return (
		<div className="About">
			<Link className="close close--white close--main" to="/" />
			<div className="About__wrapper">
				<div className="About__left">
					<h2 className="About__title">
						{title}
						<span className="About__caps">{leftColumn}</span>
					</h2>
				</div>
				<div className="About__right">
					<ReactMarkdown
						linkTarget={"_blank"}
						escapeHtml={false}
						source={rightColumn}
					/>
					{images &&
						images.map(({ image, caption }, i) => {
							return (
								<div key={"img--" + i}>
									{image && <FluidImage image={image} />}
									<p className="caption caption-about">
										{caption ? caption : ""}
									</p>
								</div>
							);
						})}

					<div className="About__other">
						<ReactMarkdown
							style={{ color: "white" }}
							escapeHtml={false}
							source={other}
						/>
					</div>
					<div className="About__other">
						<Newsletter />
					</div>
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
				rightColumn={post.frontmatter.rightColumn}
				other={post.frontmatter.other}
				images={post.frontmatter.images}
			/>
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
				images {
					image {
						publicURL
						childImageSharp {
							fluid(maxWidth: 1040, quality: 80) {
								...GatsbyImageSharpFluid_withWebp_tracedSVG
							}
						}
					}
					caption
				}
				other
			}
		}
	}
`;
