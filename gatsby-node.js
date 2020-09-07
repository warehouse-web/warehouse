const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const sharp = require("sharp");
sharp.cache(false);
sharp.simd(true);

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;
	const { data } = await graphql(`
		{
			allMarkdownRemark(limit: 1000) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							templateKey
						}
					}
				}
			}
		}
	`);
	data.allMarkdownRemark.edges.forEach(
		({
			node: {
				id,
				fields: { slug },
				frontmatter: { templateKey }
			}
		}) => {
			if (templateKey) {
				createPage({
					path: slug,
					component: path.resolve(
						`src/templates/${String(templateKey)}.js`
					),
					context: { id }
				});
			}
		}
	);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	fmImagesToRelative(node); // convert image paths for gatsby images

	if (node.internal.type === `MarkdownRemark`) {
		createNodeField({
			name: `slug`,
			node,
			value: createFilePath({
				node,
				getNode
			})
		});
	}
};

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes, createFieldExtension } = actions;

	const typeDefs = `
	  type MarkdownRemark implements Node @infer {
		frontmatter: Frontmatter
		id: String
		fields: Slug

	  }
	  type Slug @infer {
		slug: String
	  }
	  type PublicURL @infer {
		  publicURL: String
	  }
	  type Frontmatter {
		templateKey: String
		title: String!
		image: File
		attachments: PublicURL
	  }
	`;
	createTypes(typeDefs);
};
