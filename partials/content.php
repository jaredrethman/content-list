<?php
/**
 * Content List partial.
 *
 * @var array $partial_props
 * @var array $depth
 */

use function TenUp\Plugin\ContentList\utils\get_partial;
?>
<article id="post-<?php echo (int) $partial_props['content']->ID; ?>" <?php post_class( 'cl-block__content', (int) $partial_props['content']->ID ); ?> itemscope itemtype="http://schema.org/BlogPosting">
	<?php get_partial( 'content-' . $partial_props['orientation'], [
		'display'     => $partial_props['display'],
		'content'     => $partial_props['content'],
	] ); ?>
</article><!--/itemtype=BlogPosting-->

