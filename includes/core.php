<?php
/**
 * Content List - Core functionality.
 *
 * @package TenUp\Plugin\ContentList
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList;

use function TenUp\Plugin\ContentList\utils\{
	public_types,
	public_taxes,
	types_and_taxes,
};

/**
 * Minimal frontend assets.
 *
 * @see wp_common_block_scripts_and_styles()
 * @since 0.0.1
 */
add_action( 'enqueue_block_assets', function (): void {
	if ( is_admin() ) {
		return;
	}
	enqueue\style( 'content-list-front' );
} );

/**
 * Enqueue scripts for front-end.
 *
 * @return void
 * @since 0.0.1
 *
 * @see wp-admin/edit-form-blocks.php
 *
 */
add_action( 'enqueue_block_editor_assets', function (): void {

	enqueue\script( 'content-list', [ 'wp-data', 'wp-components', 'wp-i18n' ] );
	enqueue\style( 'content-list' );

	$types_taxes = types_and_taxes();

	wp_localize_script(
		'content-list',
		'tenUp',
		[
			'config'       => [
				'attributes'    => apply_filters( __NAMESPACE__ . '\hooks\attributes', [] ),
				'postsPerPage'  => apply_filters( __NAMESPACE__ . '\hooks\posts_per_page', 15 ),
				// Used to detect support for Yoast's primary taxonomy.
				'isWpSeoActive' => is_plugin_active( 'wordpress-seo/wp-seo.php' ),
			],
			'typesTaxes'   => $types_taxes,
			'contentTypes' => public_types( $types_taxes ),
			'taxonomies'   => public_taxes( $types_taxes ),
			'contentList'  => [
				'styleOptions' => apply_filters( __NAMESPACE__ . '\hooks\style_options', [
					[
						'label' => __( '-- None --', 'clarion' ),
						'value' => '',
					],
				] ),
			],
		]
	);
} );