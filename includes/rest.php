<?php
/**
 * Content List - REST functionality.
 *
 * @package TenUp\Plugin\ContentList
 * @since 0.0.1
 */

declare( strict_types=1 );

namespace TenUp\Plugin\ContentList\rest_routes;

use WP_Query,
	WP_REST_Request,
	WP_Term;

use function TenUp\Plugin\ContentList\{
	utils\types_and_taxes
};

/**
 * @param WP_REST_Request $request
 *
 * @return array
 *
 * @since 0.0.1
 *
 */
function content( WP_REST_Request $request ): array {
	$params = $request->get_params();
	$ids    = $params['ids'] ?? null;

	if ( empty( $ids ) ) {
		return [];
	}

	$content = [];
	$ids     = explode( ',', $ids );
	$ids     = array_filter( $ids, function ( $value ) {
		return 0 !== (int) $value;
	} );

	$types_taxes = types_and_taxes();

	$content_query = new WP_Query( [
		'post__in'       => $ids,
		'orderby'        => 'post__in',
		'post_type'      => array_column( $types_taxes, 'name' ),
		'posts_per_page' => apply_filters( 'TenUp\Plugin\ContentList\hooks\posts_per_page', 15 ),
	] );

	if ( ! $content_query->have_posts() ) {
		return $content;
	}

	$date_format = get_option( 'date_format', 'F j, Y' );
	$types_taxes = array_column( $types_taxes, 'taxonomies', 'name' );

	foreach ( $content_query->posts as $post ) {

		$attachment_id = get_post_thumbnail_id( $post->ID );

		$data = [
			'id'             => (int) $post->ID,
			'title'          => $post->post_title,
			'excerpt'        => $post->post_excerpt,
			'featured_media' => '' !== $attachment_id ? wp_get_attachment_image_src( $attachment_id, 'large' ) : false,
			'date'           => date( $date_format, strtotime( $post->post_modified_gmt ) ),
		];

		if ( ! empty ( $types_taxes[ $post->post_type ] ) ) {
			if ( ! is_wp_error( $terms = wp_get_post_terms(
				$post->ID,
				array_column(
					$types_taxes[ $post->post_type ],
					'name'
				)
			) ) ) {
				/**
				 * @var $terms
				 * @var $term WP_Term
				 */
				foreach ( $terms as $term ) {
					$rest_bases = array_column(
						$types_taxes[ $post->post_type ],
						'rest_base',
						'name'
					);

					$data[ $rest_bases[ $term->taxonomy ] ][] = $term->term_id;
				}
			}
		}

		array_push(
			$content,
			$data
		);
	}

	return $content;
}