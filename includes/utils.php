<?php
/**
 * Content List - Util functionality.
 *
 * @package TenUp\Plugin\ContentList
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList\utils;

use WP_Post_Type,
	WP_Taxonomy;

/**
 * Get a formatted array of associative arrays of current sites publicly registered
 * Post Types and associated taxonomies.
 *
 * @return array
 * @since 0.0.1
 *
 */
function types_and_taxes(): array {

	// Simple memoize
	static $types_taxes;
	if ( null !== $types_taxes ) {
		return $types_taxes;
	}

	/**
	 * Post type and associated taxonomies retrieval arguments.
	 *
	 * @var array $args
	 */
	$args = [
		'taxonomies' => [
			'show_in_rest' => true,
			'public'       => true,
		],
		'post_types' => [
			'show_in_rest' => true,
			'public'       => true,
		],
	];

	/**
	 * Public Post Types.
	 *
	 * @see get_post_types()
	 * @var array $registered_post_types
	 */
	$registered_post_types = get_post_types( $args['post_types'], 'objects' );

	/**
	 * Houses structured post types with associated taxonomies.
	 *
	 * @var array $types_and_taxes
	 */
	$types_and_taxes = [];

	/**
	 * Exclude specific post types.
	 */
	$exclude_types = [ 'attachment' ];

	/**
	 * Loop over post types and get taxonomies for post type.
	 *
	 * @var string $name
	 * @var WP_Post_Type $type_object
	 */
	$counter = 0;
	foreach ( $registered_post_types as $name => $type_object ) {
		if ( in_array( $name, $exclude_types ) ) {
			continue;
		}

		/**
		 * Get Type taxonomies.
		 *
		 * @see get_object_taxonomies()
		 * @var array $taxonomies
		 */
		$taxonomies                  = get_object_taxonomies( $name, 'objects' );
		$types_and_taxes[ $counter ] = [
			'name'       => $name,
			'label'      => $type_object->label,
			'rest_base'  => false === $type_object->rest_base ? $name : $type_object->rest_base,
			'taxonomies' => [],
		];
		/**
		 * Loop over each taxonomy and only provide the taxonomies that
		 * match $args['taxonomies'] arguments.
		 *
		 * @var string $tax_name
		 * @var WP_Taxonomy $tax_obj
		 */
		foreach ( $taxonomies as $tax_name => $tax_obj ) {
			$conditions    = array_intersect_key( ( array ) $tax_obj, $args['taxonomies'] );
			$tax_forbidden = array_search( false, array_values( $conditions ), true );
			if ( false === $tax_forbidden ) {
				$types_and_taxes[ $counter ]['taxonomies'][] = [
					'name'      => $tax_obj->name,
					'label'     => $tax_obj->label,
					'rest_base' => false === $tax_obj->rest_base ? $tax_obj->name : $tax_obj->rest_base,
				];
			}
		}
		$counter ++;
	}

	$types_taxes = apply_filters( 'TenUp\Plugin\ContentList\hooks\types_taxes', $types_and_taxes );

	return $types_taxes;
}

/**
 * Get indexed array of public Post Types.
 *
 * @param array $types_taxes
 *
 * @return array
 * @since 0.0.1
 *
 */
function public_types( array $types_taxes = [] ): array {
	$types_taxes = $types_taxes ?? types_and_taxes();

	return array_column( $types_taxes, 'name' );
}

/**
 * * Get associative array of public Taxonomies.
 *
 * @param array $types_taxes
 *
 * @return array
 * @since 0.0.1
 *
 */
function public_taxes( array $types_taxes = [] ): array {
	$types_taxes = $types_taxes ?? types_and_taxes();

	return array_reduce( $types_taxes, function ( $acc, $item ) {
		if ( empty( $item['taxonomies'] ) ) {
			return $acc;
		}
		$acc = $acc + array_column( $item['taxonomies'], 'rest_base', 'name' );

		return $acc;
	}, [] );
}

/**
 * Get Template Part, but with arguments.
 *
 * Args are available in the partial as $partial_props array
 * with optional object cache. Heavily inspired by hm_get_template_part() function. See - https://github.com/humanmade/hm-core/blob/master/hm-core.functions.php
 *
 * @param string $file File path relative to themes/{child-theme-name}/partials/content-list, themes/{parent-theme-name}/partials/content-list or plugins/content-list/partials.
 * @param array $partial_props Props to pass to partial.
 * @param bool $cache Should this partial be cached in object cache.
 * @param array $globals Global variables to make available between partials.
 *
 * @return string|void
 * @since 0.0.1
 *
 */
function get_partial( string $file = '', array $partial_props = [], $cache = false, $globals = [] ) {

	$partial_props = wp_parse_args(
		$partial_props,
		[
			'echo'         => true,
			'root'         => false,
			'cache_expiry' => WEEK_IN_SECONDS,
		]
	);

	// File path is required, bail if empty.
	if ( '' === $file ) {
		if ( $partial_props['echo'] ) {
			return;
		}

		return '';
	}

	$file_with_ext = false === strpos( $file, '.php' ) ? $file . '.php' : $file;

	// Static vars
	static $partial_globals = [];
	static $depth = 0;
	static $uid = 0;
	static $current_url = '';

	$partial_globals += $globals;
	++ $uid;
	++ $depth;
	if( $partial_props['root'] ){
		$depth = 0;
	}

	global $wp;
	$current_url = '' === $current_url ? home_url( $wp->request ) : $current_url;
	$cache_key   = sanitize_title( $current_url . $file_with_ext . $uid );

	if ( $cache ) {
		if ( false !== ( $cache = wp_cache_get( $cache_key, 'tenup-content-list' ) ) ) {
			if ( ! $partial_props['echo'] ) {
				return $cache;
			}
			//Echo cache and break out of loop
			echo $cache;

			return;
		}
	}

	//Load from Child-theme
	if ( file_exists( STYLESHEETPATH . '/partials/content-list/' . $file_with_ext ) ) {
		$file_with_ext = STYLESHEETPATH . '/partials/content-list/' . $file_with_ext;
	} //Load from Parent-theme
	elseif ( file_exists( TEMPLATEPATH . '/partials/content-list/' . $file_with_ext ) ) {
		$file_with_ext = TEMPLATEPATH . '/partials/content-list/' . $file_with_ext;
	} //Load from plugin
	elseif ( file_exists( WP_PLUGIN_DIR . '/content-list/partials/' . $file_with_ext ) ) {
		$file_with_ext = WP_PLUGIN_DIR . '/content-list/partials/' . $file_with_ext;
	}

	ob_start();
	//Used to check if file exists
	$return = file_exists( $file_with_ext ) ? require( $file_with_ext ) : '';
	//Clear out buffer
	$data = ob_get_clean();

	if ( $cache ) {
		wp_cache_set( $cache_key, $data, 'tenup-content-list', $partial_props['cache_expiry'] ?? WEEK_IN_SECONDS );
	}

	if ( ! empty( $partial_props['return'] ) ) {
		if ( $return === '' ) {
			return '';
		} else {
			return $data;
		}
	}

	$partial_props = wp_parse_args( $partial_props, [ 'echo' => true ] );

	if ( (bool) $partial_props['echo'] ) {
		echo $data;
	}

	return $data;
}

/**
 * Imploded string and add a conjunction
 * before the last item, if greater then 2 items.
 *
 * @param array $list Array of strings to reduce.
 * @param string $conjunction String to use as conjunction.
 *
 * @return string
 */
function implode_comma_conjunction( array $list = [], string $conjunction = 'and' ): string {
	$last = array_pop( $list );
	if ( ! empty( $list ) ) {
		return implode( ', ', $list ) . ' ' . $conjunction . ' ' . $last;
	}

	return $last;
}

/**
 * Small util for grabbing the blocks default attributes.
 *
 * @return array
 */
function get_block_attributes(): array {
	return [
		'itemsToShow' => [
			'type'    => 'number',
			'default' => 2,
		],
		'columns'     => [
			'type'    => 'number',
			'default' => 2,
		],
		'style'       => [
			'type'    => 'string',
			'default' => '',
		],
		'display'     => [
			'type'    => 'object',
			'default' => [
				[
					'name'  => 'attachment',
					'value' => true,
				],
				[
					'name'     => 'taxonomy',
					'value'    => true,
					'settings' => [
						[
							'name'  => 'primary_category',
							'value' => true,
						],
						[
							'name'  => 'taxonomies',
							'value' => 'all',
						],
						[
							'name'  => 'count',
							'value' => - 1,
						],
					]
				],
				[
					'name'  => 'title',
					'value' => true,
				],
			],
		],
		'orientation' => [
			'type'    => 'string',
			'default' => 'portrait',
		],
		'queryArgs'   => [
			'type'    => 'object',
			'default' => [
				'contentType' => types_and_taxes()[0]['name'] ?? null,
				'per_page'    => 15,
				'taxonomies'  => [],
				'offset'      => 0,
			],
		],
		'ids'         => [
			'type'    => 'array',
			'default' => [],
			'items'   => [
				'type' => 'integer',
			],
		],
	];
}
