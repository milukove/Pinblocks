<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Register plugin's custom block category
 *
 * @since 1.0.0
 * @param  array $categories Existing categories
 * @return array             Categories with plugins one included
 */
function pinblocks_block_categories( $categories ) {
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'pinblocks',
                'title' => __( 'Pinterest Widgets', 'pinblocks' ),
            ),
        )
    );
}
add_filter( 'block_categories', 'pinblocks_block_categories', 10, 2 );