/**
 * WebPack Prod
 *
 * @package TenUpScaffold
 */

/**
 * Modules
 */
// Node Modules.
const merge = require( 'webpack-merge' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const PurgeCssPlugin = require( 'purgecss-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
// Internal.
const buildConfig = require( './config.build' );
const { proxy } = require( './utils' );

/**
 * Merge Config with config.build, resolve in new Promise.
 *
 * @type {Promise<unknown>}
 */
module.exports = new Promise( ( resolve, reject ) => {
	buildConfig.then( ( data ) => {

		resolve(
			merge( data, {
				mode: 'production',
				devtool: '(none)',
				optimization: {
					minimizer: [
						new TerserPlugin( {
							cache: true,
							parallel: true,
							sourceMap: false,
						} ),
						new OptimizeCSSAssetsPlugin( {
							assetNameRegExp: /\.min\.css$/g,
						} ),
					],
				},
				plugins: [
					new CleanWebpackPlugin(),
					// @todo
					// new PurgeCssPlugin( {
					// 	paths: glob.sync( [
					// 		path.join( __dirname, '../*.php' ),
					// 		path.join( __dirname, '../src/js/**/*.js' ),
					// 		path.join( __dirname, '../node_modules/accessible-autocomplete/src/*' ),
					// 	] ),
					// 	whitelist : wpPlugin( 'purgeCss' ).whitelist,
					// 	whitelistPatterns : wpPlugin( 'purgeCss' ).whitelistPatterns,
					// } )
				]
			} ),
		);
	} ).catch( e => reject( e ) );
} );
