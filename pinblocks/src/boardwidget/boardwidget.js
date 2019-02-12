/**
 * Board Widget Block
 * @since 1.0.0
 */

import reloadPinit from '../includes/reloadpinit';
import pinIcon from '../includes/icon.js';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { 
	TextControl, 
	Placeholder,
	SelectControl,
	CheckboxControl 
} = wp.components;
const { InspectorControls } = wp.editor;

/**
 * Register Board Widget block
 * @since 1.0.0
 */
registerBlockType( 'pinblocks/board-widget', {
	title: __( 'Board Widget', 'pinblocks' ),
	icon: pinIcon,
	category: 'pinblocks',
	attributes: {
		blockId: {
			type: 'string',
		},
		data_pin_do: {
			type: 'string',
			default: 'embedBoard',
		},
		href: {
			type: 'string',
		},
		'data_pin_board_width': {
			type: 'string',
			default: '400',

		},
		'data_pin_scale_height': {
			type: 'string',
			default: '240',
		},
		'data_pin_scale_width': {
			type: 'string',
			default: '80',
		},
	},

	edit: function( props ) {

		if( ! props.attributes.blockId ) {
			var ts = Math.round((new Date()).getTime());
			props.setAttributes( { blockId: 'pinblocks-unique-block-' + ts });
		}

		/**
		 * If board url is set
		 * @since 1.0.0
		 */
		if( props.attributes.href && props.attributes.href.length > 0 ) {

			return (
				<Fragment>
					<InspectorControls>
						<TextControl
							label={ __( 'Image width', 'pinblocks' ) }
							value={ props.attributes.data_pin_scale_width }
							onChange={
								function(e) {
									props.setAttributes( { data_pin_scale_width: e } );
									reloadPinit(props.attributes, 'data_pin_scale_width', e);
								}
							}
						/>
						<TextControl
							label={ __( 'Board height', 'pinblocks' ) }
							value={ props.attributes.data_pin_scale_height }
							onChange={
								function(e) {
									props.setAttributes( { data_pin_scale_height: e } );
									reloadPinit(props.attributes, 'data_pin_scale_height', e);
								}
							}
						/>
						<TextControl
							label={ __( 'Board width', 'pinblocks' ) }
							value={ props.attributes.data_pin_board_width }
							onChange={
								function(e) {
									props.setAttributes( { data_pin_board_width: e } );
									reloadPinit(props.attributes, 'data_pin_board_width', e);
								}
							}
						/>
					</InspectorControls>
					<div
						class="pinblocks-widget"
						id={ props.attributes.blockId }
					>
						<a
							data-pin-do={ props.attributes.data_pin_do }
							href={ props.attributes.href }
							data-pin-board-width={ props.attributes.data_pin_board_width }
							data-pin-scale-height={ props.attributes.data_pin_scale_height }
							data-pin-scale-width={ props.attributes.data_pin_scale_width }
							onClick={
								function(e){e.preventDefault();}
							}
						>
							<img
								src={ pinblocksOptions.loading_path }
							/>
							<div>{ __( 'Loading' ,'pinblocks' ) }</div>
						</a>
					</div>
					<div
						onLoad={
							function() {
								setTimeout(function(){
									reloadPinit(props.attributes);
								}, 500);
							}
						}
					>
						<TextControl
							label={ __( 'Board URL', 'pinblocks' ) }
							value={ props.attributes.href }
							onChange={
								function(e) {
									props.setAttributes( { href: e } );
									reloadPinit(props.attributes, 'href', e);
								}
							}
						/>
					</div>
				</Fragment>
			);
		}

		/**
		 * When url hasn't been set
		 * @since 1.0.0
		 */
		return (

			<Fragment>
				<Placeholder
					label={ __( 'Pinterest Board Widget', 'pinblocks' ) }
				>
					<div>
						{pinIcon}
					</div>
					<TextControl
						label={ __( 'Copy your board URL here', 'pinblocks' ) }
						value={ props.attributes.href }
						onChange={
							function(e) {
								props.setAttributes( { href: e } );
								reloadPinit(props.attributes, 'href', e);
							}
						}
					/>
				</Placeholder>
			</Fragment>
		);
	},

	/**
	 * Frontend renders on server side
	 * @since 1.0.0
	 */
	save: function( props ) {
		return null;
	},
} );
