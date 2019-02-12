/**
 * Follow Widget Block
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
 * Register Follow Widget block
 * @since 1.0.0
 */
registerBlockType( 'pinblocks/follow-widget', {
	title: __( 'Follow Widget', 'pinblocks' ),
	icon: pinIcon,
	category: 'pinblocks',
	attributes: {
		blockId: {
			type: 'string',
		},
		data_pin_do: {
			type: 'string',
			default: 'buttonFollow',
		},
		href: {
			type: 'string',
		},
		content: {
			type: 'string',
			default: 'Follow',
		},
	},

	edit: function( props ) {

		if( ! props.attributes.blockId ) {
			var ts = Math.round((new Date()).getTime());
			props.setAttributes( { blockId: 'pinblocks-unique-block-' + ts });
		}

		/**
		 * If Pinterest user URL is set
		 * @since 1.0.0
		 */
		if( props.attributes.href && props.attributes.href.length > 0 ) {

			return (
				<Fragment>
					<InspectorControls>
						<TextControl
							label={ __( 'Button text', 'pinblocks' ) }
							value={ props.attributes.content }
							onChange={
								function(e) {
									props.setAttributes( { content: e } );
									reloadPinit(props.attributes, 'content', e);
								}
							}
						/>
					</InspectorControls>
					<div
						class="pinblocks-widget"
						id={ props.attributes.blockId }
					>
						<a
							href={ props.attributes.href }
							data-pin-do={ props.attributes.data_pin_do }
							onClick={
								function(e){e.preventDefault();}
							}
						>
							{ props.attributes.content }
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
							label={ __( 'Pinterest user URL', 'pinblocks' ) }
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
					label={ __( 'Pinterest Follow Widget', 'pinblocks' ) }
				>
					<div>
						{pinIcon}
					</div>
					<TextControl
						label={ __( 'Pinterest user URL', 'pinblocks' ) }
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
