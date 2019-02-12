<?php
/**
 * Blocks Initializer
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */
function pinblocks_cgb_block_assets() {

	wp_enqueue_script(
			'pinblocks-pinit-loader',
			'//assets.pinterest.com/js/pinit_main.js',
			array(),
			false,
			true
	);

	/**
	 * Sets pinterest Loader id attribute.
	 * script_loader_tag callback
	 * @since 1.0.0
	 * @return array 	Script tag with id attribute
	 */
	function pinblocks_set_pin_loader_id( $tag, $handle, $src )
	{
			// the handles of the enqueued scripts we want to async
			$async_scripts = array( 'pinblocks-pinit-loader' );
			if ( in_array( $handle, $async_scripts ) ) {
					return '<script id="pinblocks-loader-script" type="text/javascript" src="' . $src . '" async defer ></script>' . "\n";
			}
			return $tag;
	}
	/**
	 * Adds 
	 * @uses pinblocks_set_pin_loader_id 
	 * @since 1.0.0
	 */
	add_filter( 'script_loader_tag', 'pinblocks_set_pin_loader_id', 10, 3 );

}

add_action( 'enqueue_block_assets', 'pinblocks_cgb_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * @since 1.0.0
 */
function pinblocks_cgb_editor_assets() {

	wp_enqueue_script(
		'pinblocks-cgb-block-js',
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wp-components', 'wp-dom-ready' ),
		true
	);

	wp_set_script_translations( 'pinblocks-cgb-block-js', 'pinblocks', plugin_dir_path( __DIR__ ) . 'languages' );

	/**
	 * Loading gif image path
	 * @since 1.0.0
	 * @var string
	 */
	$pinblocks_options['loading_path'] = plugins_url( '../assets/images/pin-load.gif', __FILE__ );

	wp_localize_script( 'pinblocks-cgb-block-js', 'pinblocksOptions', $pinblocks_options );

	wp_enqueue_style(
		'pinblocks-cgb-block-editor-css',
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ),
		array( 'wp-edit-blocks' )
	);
}

add_action( 'enqueue_block_editor_assets', 'pinblocks_cgb_editor_assets' );