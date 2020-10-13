/**
 * WebPack Dev
 *
 * @package TenUpScaffold
 */

/**
 * Modules
 */
// Node Modules.
const path = require( 'path' );
const merge = require( 'webpack-merge' );
// Internal.
const common = require( './config.common.js' );
const { devConfig } = require( './utils' );
/**
 * Merge Config with common, resolve in new Promise.
 *
 * @type {Promise<unknown>}
 */
module.exports = new Promise( ( resolve, reject ) => {
	common.then( ( data ) => {

		devConfig().then( ( { devServer, plugins } ) => {
			resolve(
				merge( data, {
					mode: 'development',
					devServer,
					devtool: 'source-map',
					module: {
						rules: [
							/** CSS */
							{
								test: /\.css$/,
								use: [
									{ loader: 'style-loader' },
									{
										loader: 'css-loader',
										options: {
											sourceMap: true,
										},
									},
								],
							},
							/** JS/JSX */
							{
								test: /\.(js|jsx)$/,
								// exclude: /node_modules/,
								include: [
									path.resolve( __dirname, '../assets/js' ),
									path.resolve( __dirname, '../node_modules/core-js/modules' ),
								],
								use: [
									'babel-loader',
									'eslint-loader',
								]
							},
							{
								test: /\.(js|jsx)$/,
								use: 'react-hot-loader/webpack',
								include: /node_modules/
							}
						],
					},
					plugins,
				} ),
			);
		} ).catch( () => { /* Silently exit... */ } );

	} ).catch( e => reject( e ) );
} );
