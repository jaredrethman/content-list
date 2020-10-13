<?php
/**
 * Content List landscape partial.
 *
 * @var array $partial_props
 */

use function TenUp\Plugin\ContentList\utils\get_partial;

$left     = $right = '';
$is_right = false;

foreach ( $partial_props['display'] as $partial ) {
	if ( ! $partial['value'] ) {
		continue;
	}
	if ( 'separator' === $partial['name'] ) {
		$is_right = true;
		continue;
	}
	if ( 'attachment' === $partial['name'] && has_post_thumbnail( $partial_props['content'] ) ) {
		if ( $is_right ) {
			$right .= get_the_post_thumbnail( $partial_props['content'] );
			continue;
		}
		$left .= get_the_post_thumbnail( $partial_props['content'] );
	} else if ( 'title' === $partial['name'] ) {
		if ( $is_right ) {
			$right .= '<a href="' . get_the_permalink( $partial_props['content'] ) . '"><h3>' . get_the_title( $partial_props['content'] ) . '</h3></a>';
			continue;
		}
		$left .= '<a href="' . get_the_permalink( $partial_props['content'] ) . '"><h3>' . get_the_title( $partial_props['content'] ) . '</h3></a>';
	} else if ( 'taxonomy' === $partial['name'] ) {
		if ( $is_right ) {
			$right .= get_partial( 'content-terms', [
				'content' => $partial_props['content'],
				'echo'    => false,
			] );
			continue;
		}
		$left .= get_partial( 'content-terms', [
			'content' => $partial_props['content'],
			'echo'    => false,
		] );
	}
}

if ( '' !== $left ) {
	echo '<div class="cl-block__content cl-block__content-left">' . wp_kses_post( $left ) . '</div>';
}
if ( '' !== $right ) {
	echo '<div class="cl-block__content cl-block__content-right">' . wp_kses_post( $right ) . '</div>';
}