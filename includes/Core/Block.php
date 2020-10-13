<?php
/**
 * Class Block
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */

namespace TenUp\Plugin\ContentList;

use function TenUp\Plugin\ContentList\utils\{
	get_partial,
	public_types,
	types_and_taxes,
	get_block_attributes,
};

/**
 * Class Block
 *
 * @package TenUp\Plugin\ContentList
 *
 * @since 0.0.1
 */
class Block extends Factory {

	/**
	 * Block attributes.
	 *
	 * @var array $attributes
	 *
	 * @since 0.0.1
	 */
	public $attributes = [];

	/**
	 * Block namespace/name.
	 *
	 * @var string $name
	 *
	 * @since 0.0.1
	 */
	public $name = '';

	/**
	 * Static reference of of ids on a page.
	 *
	 * @var array $ids
	 *
	 * @since 0.0.1
	 */
	public static $ids = [];

	/**
	 * Block constructor.
	 *
	 * @param string $name Block namespace/name
	 *
	 * @since 0.0.1
	 */
	function __construct( string $name ) {
		$this->name       = $name;
		$this->attributes = apply_filters( __NAMESPACE__ . '\hooks\attributes', get_block_attributes() );
		register_block_type(
			$this->name,
			[
				'render_callback' => [ $this, 'render' ],
				'attributes'      => $this->attributes,
			]
		);
	}

	/**
	 * Block render method.
	 *
	 * @param array $attributes
	 *
	 * @return false|string
	 * @since 0.0.1
	 *
	 */
	public function render( array $attributes = [] ) {

		if ( is_admin() || ( isset( $_REQUEST['content-list'] ) && 1 === (int) $_REQUEST['content-list'] ) ) {
			return '';
		}

		$types_taxes  = types_and_taxes();
		$public_types = public_types( $types_taxes );

		[
			'itemsToShow' => $posts_per_page,
			'queryArgs'   => [
				'contentType' => $content_type,
				'offset'      => $offset,
				'taxonomies'  => $taxonomies
			],
			'ids'         => $ids,
		] = $attributes;

		$ids            = empty( $ids ) ? array_fill( 0, $posts_per_page, 0 ) : $ids;
		$ids            = array_slice( $ids, 0, $posts_per_page );
		$saved_ids      = array_values( array_filter( $ids, function ( $id ) {
			return 0 < $id;
		} ) );
		$index_values   = array_count_values( $ids );
		$dynamic_count  = $index_values[0] ?? 0;
		$parsed_ids     = 0 < $dynamic_count ? [] : $ids;

		if ( 0 <= $dynamic_count ) {

			$dynamic_query_args = [
				'offset'                 => $offset,
				'posts_per_page'         => $posts_per_page * 2,
				'post_type'              => array_reduce( $types_taxes, function ( $curry, $type ) use ( $content_type ) {
					if ( $content_type === $type['rest_base'] ) {
						$curry = $type['name'];
					}

					return $curry;
				}, '' ),
				'fields'                 => 'ids',
				'no_found_rows'          => true,
				'update_post_meta_cache' => false,
			];

			if ( ! empty( $taxonomies ) ) {
				$tax_query = array_reduce( $taxonomies, function ( $curry, $item ) {
					if ( empty( $item['terms'] ) ) {
						return $curry;
					}
					array_push( $curry, [
						'taxonomy' => $item['name'],
						'field'    => 'term_id',
						'terms'    => $item['terms'],
					] );

					return $curry;
				}, [] );
				if ( ! empty( $tax_query ) ) {
					$dynamic_query_args['tax_query'] = [
						'relation' => 'AND',
					];
					array_push( $dynamic_query_args['tax_query'], ...$tax_query );
				}
			}

			$dynamic_query = new \WP_Query( $dynamic_query_args );
			$dynamic_ids   = $dynamic_query->have_posts() ? $dynamic_query->posts : [];

			// Remove current
			if( is_singular() ) {
				array_push( $saved_ids, get_the_ID() );
			}
			$dynamic_ids = ! empty( $dynamic_ids ) ? array_values( array_diff( $dynamic_query->posts, $saved_ids ) ) : [];

			foreach ( $ids as $id ) {
				if ( 0 === $id && ! empty( $dynamic_ids ) ) {
					array_push( $parsed_ids, $dynamic_ids[0] );
					unset( $dynamic_ids[0] );
					$dynamic_ids = array_values( $dynamic_ids );
					continue;
				}
				array_push( $parsed_ids, $id );
			}
		}

		if ( isset( $index_values[2] ) ) {
			// @todo There are duplicates, notify user?
		}

		$parsed_ids = array_filter( $parsed_ids, function ( $id ) {
			return 0 < (int) $id;
		} );

		static::$ids = static::$ids + $parsed_ids;

		$content_list_query_args = [
			'posts_per_page'      => $posts_per_page,
			'post__in'            => $parsed_ids,
			'orderby'             => 'post__in',
			'no_found_rows'       => true,
			'post_type'           => $public_types,
			'ignore_sticky_posts' => 1,
		];

		if ( ! empty( $attributes['ids'] ) ) {
			$attributes['ids'] = array_splice( $attributes['ids'], 0, $posts_per_page );
		}

		$content_list_query = new \WP_Query( $content_list_query_args );

		if ( ! $content_list_query->have_posts() ) {
			return WP_DEBUG ? '<p>' . __( 'No content found.' ) . '</p>' : '';
		}

		$attributes['wp_query'] = $content_list_query;
		$attributes['root']     = true;

		ob_start();

		get_partial( 'block', $attributes, true, [
			'types_taxes' => $types_taxes,
			'current_ids' => static::$ids
		] );
		$block_html = ob_get_clean();

		wp_reset_postdata();

		return false === $block_html ? '' : $block_html;
	}
}
