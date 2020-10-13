<?php
/**
 * Content List partial.
 *
 * @var array $partial_props
 * @var array $depth
 */

use function TenUp\Plugin\ContentList\utils\get_partial;

?>
<div class="wp-block-content-list">
    <div itemscope itemtype="https://schema.org/Blog"
         class="cl-block__grid cl-block__content-<?php esc_attr_e( $partial_props['orientation'] ); ?> cl-block__cols-<?php esc_attr_e( $partial_props['columns'] ); ?>">
		<?php foreach ( $partial_props['wp_query']->posts as $content ) : ?>
			<?php get_partial( 'content', [
				'content'     => $content,
				'display'     => $partial_props['display'],
				'orientation' => $partial_props['orientation'],
			] ); ?>
		<?php endforeach; ?>
    </div><!--/itemtype=Blog-->
</div><!--/class=wp-block-content-list-->
