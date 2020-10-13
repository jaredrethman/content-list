<?php
/**x
 * Plugin Name: Content List
 * Plugin URI: https://10up.com
 * Description: A flexible Content curation WordPress Gutenberg block.
 * Version: 0.0.1
 * Author: 10up Inc.
 * Author URI: https://github.com/10up
 * Text Domain: content-list
 *
 * @package TenUp\Plugin\ContentList
 */

namespace TenUp\Plugin\ContentList;

/** @const VER string */
const VER = '0.0.1';
/** const TenUp\Plugin\ContentList\PATH string */
const PATH = __DIR__ . '/';
/** const TenUp\Plugin\ContentList\URL string */
define( __NAMESPACE__ . '\URL', plugin_dir_url( __FILE__ ) );

/** On Plugin Activation\Deactivation */
register_activation_hook( 'content-list.php', function () {
} );
register_deactivation_hook( 'content-list.php', function () {
} );

/**
 * @param $class
 *
 * @since 0.0.1
 */
if ( file_exists( PATH . 'vendor/autoload.php' ) ) {
	require( PATH . 'vendor/autoload.php' );
} else {

	try {
		\spl_autoload_register( function ( $class ) {

			/** Only auto-load from within this directory */
			if ( stripos( $class, __NAMESPACE__ ) === false ) {
				return;
			}

			$file_path = PATH . 'includes/Core/' . str_ireplace( __NAMESPACE__ . '\\', '', $class ) . '.php';
			$file_path = str_replace( '\\', DIRECTORY_SEPARATOR, $file_path );
			if ( file_exists( $file_path ) ) {
				include_once( $file_path );
			}

		} );
	} catch ( \Exception $e ) {
	}
}

/**
 * Bootstrap Plugin
 *
 * @since 0.0.1
 */
add_action( 'plugins_loaded', function () {
	global $wp_version;
	/**
	 * Gutenberg is optional, if this check fails
	 * it will display a notice, but no relevant hooks will run.
	 */
	if ( version_compare( $wp_version, '5.2.0', '<' ) && ! defined( 'GUTENBERG_VERSION' ) ) {
		add_action( 'admin_notices', function () {
			?>
            <div class="notice-warning notice is-dismissible" style="border-left-color: #ffb900;">
                <p><?php _e( 'Content List requires a WordPress version >= v5.2.0.', 'content-list' ); ?></p>
            </div>
			<?php
		} );
	}
	/**
	 * PHP >= 7.2 is a mandatory
	 * requirement. If this check fails, we exit early.
	 */
	if ( version_compare( phpversion(), '7.2.0', '<=' ) ) {
		add_action( 'admin_notices', function () {
			?>
            <div class="notice-error notice is-dismissible" style="border-left-color: #ffb900;">
                <p><?php _e( 'Content List requires a PHP version >= v7.3.0.', 'content-list' ); ?></p>
            </div>
			<?php
		} );

		return;
	}

	/**
	 * Functional dependencies.
	 */
	require_once( PATH . 'includes/utils.php' );
	require_once( PATH . 'includes/enqueue.php' );
	require_once( PATH . 'includes/rest.php' );
	require_once( PATH . 'includes/core.php' );

	/**
	 * Init hook, invoke our Rest & Block classes.
     *
	 * @since 0.0.1
	 */
	add_action( 'init', function () {
		Rest::init()
		    ->register_routes( [
			    [
				    'endpoint' => 'content',
				    // @see TenUp\Plugin\ContentList\rest_routes\content()
				    'callback' => __NAMESPACE__ . '\rest_routes\content'
			    ]
		    ] )
		    ->load();

		Block::init( 'tenup/content-list' );
	}, 99 );
}, 80 );
