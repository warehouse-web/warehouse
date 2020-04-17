import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";
import Newsletter from "../components/Newsletter";
import ReactMarkdown from "react-markdown";

export const AboutPageTemplate = ({
	title,
	leftColumn,
	html,
	other,
	content,
	contentComponent,
	blurbs,
	image
}) => {
	const PageContent = contentComponent || Content;

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
					<PageContent className="about-right" content={content} />
					<ul className="colophon">
						{blurbs &&
							(blurbs || []).map(el => {
								<>
									<li>{el.title}</li>
									<li>{el.subtitle}</li>
								</>;
							})}
					</ul>
					{image && <img src={image} alt="" />}
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
	title: PropTypes.string.isRequired,
	content: PropTypes.string,
	contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<AboutPageTemplate
				title={post.frontmatter.title}
				content={post.html}
				contentComponent={HTMLContent}
				leftColumn={post.frontmatter.leftColumn}
				colophon={post.frontmatter.colophon}
				blurbs={post.frontmatter.blurbs}
				other={post.frontmatter.other}
				rightColumn={post.frontmatter.rightColumn}
				image={post.frontmatter.image}
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
			html
			frontmatter {
				title
				leftColumn
				other
				image
				blurbs {
					title
					subtitle
				}
			}
		}
	}
`;
