import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import { MagicLogo } from "_components";
import {
	renderHtmlToReact,
	useMedia,
	isDateBeforeToday,
	renderImg,
	useChangeMagicLogo,
	useSetShiftRatio
} from "_utils/utils";

const PodcastRoll = ({ data }) => {
	// main
	const [divStyle, setDivStyle] = useState(false);

	return (
		<>
			<MagicLogo currImg={divStyle} />
			<div className="index-page">
				<div className="index-page__list">
					<h1>Coming soon..</h1>
				</div>
			</div>
		</>
	);
};

PodcastRoll.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
};

export default () => (
	<StaticQuery
		query={graphql`
			query PodcastRollQuerry {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					filter: {
						frontmatter: { templateKey: { eq: "podcast-page" } }
					}
				) {
					edges {
						node {
							id
							htmlAst
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								location
							}
						}
					}
				}
			}
		`}
		render={(data, count) => <PodcastRoll data={data} count={count} />}
	/>
);
