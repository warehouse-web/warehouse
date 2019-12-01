import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/utils";

export const AboutPageTemplate = ({
	title,
	leftColumn,
	colophon,
	html,
	content,
	blurbs,
	contentComponent
}) => {
	const PageContent = contentComponent || Content;

	return (
		<div className="about-wrapper">
			<Link className="close" id="white" to="/">
				<span className="white"></span>
				<span className="white"></span>
			</Link>

			<div className="about-left">
				<h2 className="about-title">
					{title}
					<span className="about-caps">{leftColumn}</span>
				</h2>

				{/* <PageContent className="content" content={content} /> */}
			</div>
			<div className="about-right">
				<p className="about-description">
					Warehouse is an Amsterdam-based collective existing of Elisa
					van Joolen, Femke de Vries and Hanka van der Voet aiming to
					provide a platform for critical fashion practitioners
					through organizing exhibitions, reading groups, workshops,
					performances and book presentations among other things, in
					order to create an engaging environment that facilitates
					critical dialogue and the creation of an alternative fashion
					discourse that goes beyond seeing fashion as a commodity.
				</p>
				<ul className="colophon">
					{console.log("html", html)}
					{/* {colophon} */}
					{console.log("blurbs", blurbs)}
					{blurbs.map(el => {
						return (
							<>
								<li>{el.title}</li>
								<li>{el.subtitle}</li>
							</>
						);
					})}
				</ul>
				<p className="about-description">
					Warehouse is made possible through the financial support of
					Stimuleringsfonds Creatieve Industrie
				</p>
				<p className="about-description">2019 Warehouse</p>
				<p className="about-copyright">No Rights etc.....</p>
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
				contentComponent={HTMLContent}
				title={post.frontmatter.title}
				content={post.html}
				leftColumn={post.frontmatter.leftColumn}
				colophon={post.frontmatter.colophon}
				html={post.html}
				blurbs={post.frontmatter.blurbs}
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
				colophon
				blurbs {
					title
					subtitle
				}
			}
		}
	}
`;
