<?php
/**
 * Content List - Content Terms.
 *
 * @global array $partial_props
 * @global array $partial_globals
 */

use function TenUp\Plugin\ContentList\utils\implode_comma_conjunction;

$types_taxes = array_column( $partial_globals['types_taxes'], 'taxonomies', 'name' );

// Negate early if no terms found.
if ( is_wp_error( $terms = wp_get_post_terms(
		$partial_props['content']->ID,
		array_column(
			$types_taxes[ $partial_props['content']->post_type ],
			'name'
		)
	) ) || empty( $terms ) ) {
	return '';
}

echo '<span class="cl-block__terms">' . implode_comma_conjunction(
		array_reduce( $terms, function ( $curry, $term ) {
			array_push( $curry, '<a href="' . get_term_link( $term ) . '">' . $term->name . '</a>' );

			return $curry;
		}, [] )
	) . '</span>';