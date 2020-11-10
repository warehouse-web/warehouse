module.exports = {
	poweredByHeader: false,
	trailingSlash: false,
	target: 'serverless',
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: 'raw-loader',
		})
		return config
	},
}
