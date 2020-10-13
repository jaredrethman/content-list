module.exports = {
	stats: {
		all: false,
		errors: true,
		maxModules: 0,
		modules: true,
		warnings: true,
		assets: true,
		errorDetails: true,
		excludeAssets: /\.(jpe?g|png|gif|svg|woff|woff2)$/i,
		moduleTrace: true,
		performance: true
	},
	'entries': [
		{
			'name': 'content-list',
			'js': ['./src/js'],
			'css': ['./src/css'],
			'react': true
		},
		{
			'name': 'content-list-front',
			'css': ['./src/css/frontend'],
		},
	],
	'options': {
		'port': 4000,
	},
	/**
	 * @link https://www.purgecss.com
	 */
	'purgeCss': {
		whitelist: [ 'url-loader-test-png' ],
		whitelistPatterns: [ /^cl-+/g ],
	}
};
