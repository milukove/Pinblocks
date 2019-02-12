<?php
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Server-side widget render
 *
 * @since 1.0.0
 * @param array Block attributes
 * @return string Widget <a> tag with attributes and wraped with <div>
 */
function pinblocks_render_widget( $attributes ) {
	if( isset( $attributes['href'] ) ) {
		$ret = '<div><a href="' . $attributes['href'] . '"';
		foreach( $attributes as $k=>$v ) {
			if( strstr($k, '_') ) {
				$ret .= ' ' . str_replace( '_', '-', $k ) . '="' . $v . '"';
			}
		}
		$ret .= '>';

		if( isset( $attributes['content'] ) ) {
			$ret .= $attributes['content'];
		}

		$ret .= '</a></div>';
		return $ret;
	}
}

/**
 * Register Follow Widget block for Server-side render
 * 
 * @since 1.0.0
 */
register_block_type( 'pinblocks/follow-widget', array(
	'attributes' => array(
		'blockId' => array(
			'type' => 'string',
		),
		'href' => array (
			'type' => 'string',
		),
		'content' => array (
			'type' => 'string',
			'default' => 'Follow',
		),
		'data_pin_do' => array(
			'type' => 'string',
			'default' => 'buttonFollow',
		),
	),
  'render_callback' => 'pinblocks_render_widget',
) );

/**
 * Register Pin Widget block for Server-side render
 * 
 * @since 1.0.0
 */
register_block_type( 'pinblocks/pin-widget', array(
	'attributes' => array(
		'blockId' => array(
			'type' => 'string',
		),
		'href' => array (
			'type' => 'string',
		),
		'data_pin_width' => array(
			'type' => 'string',
		),
		'data_pin_terse' => array(
			'type' => 'string',
			'default' => 'false',
		),
		'data_pin_do' => array(
			'type' => 'string',
			'default' => 'embedPin',
		),
	),
  'render_callback' => 'pinblocks_render_widget',
) );

/**
 * Register Board Widget block for Server-side render
 * 
 * @since 1.0.0
 */
register_block_type( 'pinblocks/board-widget', array(
	'attributes' => array(
		'blockId' => array(
			'type' => 'string',
		),
		'href' => array (
			'type' => 'string',
		),
		'data_pin_board_width' => array(
			'type' => '400',
		),
		'data_pin_scale_height' => array(
			'type' => 'string',
			'default' => '240',
		),
		'data_pin_scale_width' => array(
			'type' => 'string',
			'default' => '80',
		),
		'data_pin_do' => array(
			'type' => 'string',
			'default' => 'embedBoard',
		),
	),
  'render_callback' => 'pinblocks_render_widget',
) );

/**
 * Register Profile Widget block for Server-side render
 * 
 * @since 1.0.0
 */
register_block_type( 'pinblocks/profile-widget', array(
	'attributes' => array(
		'blockId' => array(
			'type' => 'string',
		),
		'href' => array (
			'type' => 'string',
		),
		'data_pin_board_width' => array(
			'type' => '400',
		),
		'data_pin_scale_height' => array(
			'type' => 'string',
			'default' => '240',
		),
		'data_pin_scale_width' => array(
			'type' => 'string',
			'default' => '80',
		),
		'data_pin_do' => array(
			'type' => 'string',
			'default' => 'embedUser',
		),
	),
  'render_callback' => 'pinblocks_render_widget',
) );