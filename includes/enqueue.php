<?php
/**
 * Enqueue constants and helpers.
 *
 * @package TenUp\Plugin\ContentList
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList\enqueue;

use const TenUp\Plugin\ContentList\{
	PATH,
	URL,
	VER
};

/**
 * Detect if Webpack Dev Server is running.
 *
 * @since 0.0.1
 */
define(
	__NAMESPACE__ . '\WEBPACK_DEV_SERVER',
	[
		'running' => file_exists( PATH . '.wds' ),
		'url'     => ( is_ssl() ? 'https://' : 'http://' ) . 'localhost:4000/dist/',
	]
);

/**
 * Dynamically set asset url.
 *
 * @since 0.0.1
 */
define(
	__NAMESPACE__ . '\ASSETS_URL',
	SCRIPT_DEBUG ?
		( WEBPACK_DEV_SERVER['running'] ? WEBPACK_DEV_SERVER['url'] : URL . 'dist/' ) :
		URL . 'dist/'
);

/**
 * Asset Path, small abstraction to allow
 * manipulation of asset paths that potentially
 * derive from Webpack-Dev-Server.
 *
 * @param string $name Used to reference handle and file name.
 * @param string $ext Used to establish asset type.
 * @param bool   $path Should this method return asset location as path.
 *
 * @since 0.0.1
 *
 * @return string
 */
function path( string $name, string $ext = 'js', bool $path = false ): string {
	$asset_loc = $path ? PATH . 'dist/' : URL . 'dist/';
	if ( WEBPACK_DEV_SERVER['running'] ) {
		$asset_loc = WEBPACK_DEV_SERVER['url'];
	}
	$extension = ( ! SCRIPT_DEBUG && ! WEBPACK_DEV_SERVER['running'] ? '.min.' : '.' ) . $ext;

	return $asset_loc . $name . $extension;
}

/**
 * WP Enqueue Style wrapper.
 *
 * @param string $handle wp_enqueue_style handle.
 * @param array  $dependencies An array of wp_enqueue_style dependencies.
 * @param string $media <link> tag attribute media.
 *
 * @since 0.0.1
 */
function style( string $handle, array $dependencies = [], string $media = '' ): void {
	/**
	 * If WDS is running, CSS is injected inline through it's associated JS
	 */
	if ( WEBPACK_DEV_SERVER['running'] ) {
		script( $handle );
		return;
	}
	wp_enqueue_style(
		$handle,
		path( $handle, 'css' ),
		$dependencies,
		VER,
		$media
	);
}

/**
 * WP Enqueue Script wrapper.
 *
 * @param string $handle wp_enqueue_script handle.
 * @param array  $dependencies An array of wp_enqueue_script dependencies.
 * @param bool   $footer wp_enqueue_script footer parameter.
 *
 * @since 0.0.1
 */
function script( string $handle, array $dependencies = [], bool $footer = true ): void {
	wp_enqueue_script(
		$handle,
		path( $handle ),
		$dependencies,
		VER,
		$footer
	);
}
