/**
 * WebPack Build
 *
 * @package TenUpScaffold
 */

/**
 * Modules
 */
// Node Modules.
const merge = require( 'webpack-merge' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
// Internal.
const common = require( './config.common' );
const {NODE_ENV} = process.env;

/**
 * Merge Config with common, resolve in new Promise.
 *
 * @type {Promise<unknown>}
 */
module.exports = new Promise( ( resolve, reject ) => {
	common.then( ( data ) => {
		resolve(
			merge( data, {
				mode: 'none',
				devtool: 'source-map',
				module: {
					rules: [
						/** CSS */
						{
							test: /\.css$/,
							use: [
								MiniCssExtractPlugin.loader,
								'css-loader',
								'postcss-loader',
							],
						},
					],
				},
				plugins: [
					new MiniCssExtractPlugin( {
						filename: `[name]${ 'production' === NODE_ENV ? '.min' : '' }.css`,
						chunkFilename: `[id]${ 'production' === NODE_ENV ? '.min' : '' }.css`,
					} ),
				],
			} ) // eslint-disable-line comma-dangle
		);
	} ).catch( e => reject( e ) );
} );
