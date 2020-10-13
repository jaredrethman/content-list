<?php
/**
 * Content List portrait partial.
 *
 * @var array $partial_props
 */

use function TenUp\Plugin\ContentList\utils\get_partial;

$output = '';
foreach ( $partial_props['display'] as $partial ) {
	if ( ! $partial['value'] ) {
		continue;
	}
	if ( 'attachment' === $partial['name'] && has_post_thumbnail( $partial_props['content'] ) ) {
		$output .= get_the_post_thumbnail( $partial_props['content'] );
	} else if ( 'title' === $partial['name'] ) {
		$output .= '<a href="' . get_the_permalink( $partial_props['content'] ) . '"><h3>' . get_the_title( $partial_props['content'] ) . '</h3></a>';
	} else if ( 'taxonomy' === $partial['name'] ) {
		$output .= get_partial( 'content-terms', [
			'content' => $partial_props['content'],
			'echo'    => false,
		] );
	}
}

if( '' !== $output ) {
	echo '<div class="cl-block__orientation-portrait">' . wp_kses_post( $output ) . '</div>';
}