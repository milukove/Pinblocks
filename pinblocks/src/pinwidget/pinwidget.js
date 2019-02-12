/**
 * Pin Widget Block
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
 * Register Pin Widget block
 * @since 1.0.0
 */
registerBlockType( 'pinblocks/pin-widget', {
	title: __( 'Pin Widget', 'pinblocks' ),
	icon: pinIcon,
	category: 'pinblocks',
	attributes: {
		blockId: {
			type: 'string',
		},
		data_pin_do: {
			type: 'string',
			default: 'embedPin',
		},
		href: {
			type: 'string',
		},
		data_pin_width: {
			type: 'string',
		},
		data_pin_terse: {
			type: 'string',
			default: false,
		}
	},

	edit: function( props ) {

		if( ! props.attributes.blockId ) {
			var ts = Math.round((new Date()).getTime());
			props.setAttributes( { blockId: 'pinblocks-unique-block-' + ts });
		}

		/**
		 * If pin url is set
		 * @since 1.0.0
		 */
		if( props.attributes.href && props.attributes.href.length > 0 ) {

			return (
				<Fragment>
					<InspectorControls>
						<SelectControl
							label={ __( 'Pin size', 'pinblocks' ) }
							value={ props.attributes.data_pin_width }
							options={ [
								{ label: __( 'Small', 'pinblocks' ), value: 'small' },
								{ label: __( 'Medium', 'pinblocks' ), value: 'medium' },
								{ label: __( 'Large', 'pinblocks' ), value: 'large' },
							] }
							onChange={
								function(e) {
									props.setAttributes( { data_pin_width: e } );
									reloadPinit(props.attributes, 'data-pin-width', e);
								}
							}
						/>
						<CheckboxControl
						  label={ __( 'Hide description', 'pinblocks' ) }
						  checked={ props.attributes.data_pin_terse }
						  onChange={
									function(e) {
									props.setAttributes( { data_pin_terse: e } );
									reloadPinit(props.attributes, 'data-pin-terse', e);
							} }
						/>
					</InspectorControls>
					<div
						class="pinblocks-widget"
						id={ props.attributes.blockId }
					>
						<a
							href={ props.attributes.href }
							data-pin-width={ props.attributes.data_pin_width }
							data-pin-do={ props.attributes.data_pin_do }
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
							label={ __( 'Your pin URL', 'pinblocks' ) }
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
					label={ __( 'Pinterest Pin Widget', 'pinblocks' ) }
				>
					<div>
						{pinIcon}
					</div>
					<TextControl
						label={ __( 'Copy your pin URL here', 'pinblocks' ) }
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
