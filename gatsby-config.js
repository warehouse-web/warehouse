const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = {
	developMiddleware: app => {
		app.use(
			"/.netlify/functions/",
			createProxyMiddleware({
				target: "http://localhost:9000",
				pathRewrite: {
					"/.netlify/functions/": ""
				}
			})
		);
	},
	siteMetadata: {
		title: "Warehouse",
		description:
			"This is the Warehouse website built for WAREHOUSE collective by Zuzana and Jurgis. Further developed by Eurico",
		author: "Zuzana Kostelanska"
	},
	plugins: [
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					_src: "src",
					_components: "src/components/components.js",
					_templates: "src/templates",
					_utils: "src/utils"
				},
				extensions: ["js"]
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages"
			}
		},
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-external-links",
						options: {
							target: "_blank",
							rel: "nofollow"
						}
					},
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads"
						}
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1040,
							quality: 80,
							tracedSVG: false
							// withWebp: true
						}
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static"
						}
					},
					"gatsby-remark-component",
					"gatsby-remark-embed-soundcloud"
				]
			}
		},
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		"gatsby-remark-embed-soundcloud",
		{
			resolve: "gatsby-plugin-netlify-cache",
			options: {
				// Caching the public directory on long term can result in a huge directory
				// size which can break your netlify build. Enable this with caution
				cachePublic: true
			}
		},
		"gatsby-plugin-netlify" // make sure to keep it last in the array
	]
	// for avoiding CORS while developing Netlify Functions locally
	// read more: https://www.gatsbyjs.org/docs/api-proxy/#advanced-proxying
};
