<?php
/**
 * Plugin Name: Pinblocks — Gutenberg blocks with Pinterest widgets
 * Plugin URI: http://pinblocks.milukove.ru
 * Description: Pinblocks — is a WordPress plugin created to add Pinterest Widgets to your posts and pages by Gutenberg editor blocks.
 * Author: Egor Milyukov
 * Author URI: http://milukove.ru/
 * Version: 1.0.2
 * Text Domain: pinblocks
 * Domain Path: /languages
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Load translations
 * @since 1.0.0
 */
add_action( 'plugins_loaded', function () {
	load_plugin_textdomain( 'pinblocks', false, plugin_basename( __DIR__ ) . '/languages' );
} );

/**
 * Block Initializer.
 * Category Registrator
 * Server-side render
 * @since 1.0.0
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/freemius.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/blocks-category.php';
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
require_once plugin_dir_path( __FILE__ ) . 'includes/server-side-render.php';
