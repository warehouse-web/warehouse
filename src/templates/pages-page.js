import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import { Layout } from "_components";
import ReactMarkdown from "react-markdown";

export const PagesPageTemplate = ({ title, body }) => {
	return (
		<div className="About">
			<Link className="close" id="white" to="/">
				<span className="white"></span>
				<span className="white"></span>
			</Link>
			<div className="About__wrapper">
				<div className="About__left">
					<h2 className="About__title">{title}</h2>
				</div>
				{body && (
					<div className="About__right">
						<ReactMarkdown
							linkTarget={"_blank"}
							escapeHtml={false}
							source={body}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

PagesPageTemplate.propTypes = {
	title: PropTypes.string.isRequired
};

const PagesPage = ({ data }) => {
	const { markdownRemark: post } = data;

	return (
		<Layout>
			<PagesPageTemplate
				title={post.frontmatter.title}
				leftColumn={post.frontmatter.leftColumn}
				rightColumn={post.frontmatter.rightColumn}
				other={post.frontmatter.other}
				images={post.frontmatter.images}
			/>
		</Layout>
	);

	return <PagesPageTemplate {...post} />;
};

PagesPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default PagesPage;

export const pageQuery = graphql`
	query PagesPageByID($id: String!) {
		markdownRemark(id: { eq: $id }) {
			id
			htmlAst
			fields {
				slug
			}
			frontmatter {
				title
				templateKey
			}
		}
	}
`;
