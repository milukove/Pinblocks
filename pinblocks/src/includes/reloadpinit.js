/**
 * reloadPinit — Widget preview live reload with jQuery
 * A bit tricky part, since we don't want to use Pinterest Javascript SDK,
 * in order to make using the plugin simpler by not requiring user
 * to provide Pinterest App Id
 *
 * Removes pinit <script>
 * Removes initialized widget <span>
 * Appends <a> with new attributes
 * Appends pinit <script> after 500ms timeout
 * Removes old pinterest log scripts,
 * appended by previous pinits, to keep DOM clean.
 *
 * So even if you called this function many times without page reload
 * DOM remains like pinit was called only once
 *
 * This behavior is only for editor,
 * public works as usual, by enqueing pinit <script> once
 *
 * @since 1.0.0
 * @param  object blockAttributes    Block attributes
 * @param  string changedAttrName Changed attribute name
 * @param  string newAttrValue    New attribute value
 */
export default function reloadPinit( blockAttributes, changedAttrName = '', newAttrValue = '' ) {
	var old = document.getElementById('pinblocks-loader-script');
	if( old ) {
		old.parentNode.removeChild(old);
	}
	if( '' != changedAttrName ) {
		$('#' + blockAttributes.blockId).empty();
		var a = document.createElement('a');
		for (var k in blockAttributes){
			if (blockAttributes.hasOwnProperty(k)) {
				if( 'blockId' != k ) {
					if( 'content' != k ) {
						var attributeName = k.replace(/_/g,"-");
						a.setAttribute(attributeName, blockAttributes[k]);
					}
				}
			}
		}
		a.setAttribute('onclick', '(function(e){e.preventDefault();})(event)');
		a.setAttribute([changedAttrName], newAttrValue);
		$('#' + blockAttributes.blockId).prepend(a);
		if( typeof blockAttributes['content'] === 'undefined' ) {
			$('#' + blockAttributes.blockId + ' a').html('<img src="' + pinblocksOptions.loading_path + '"><div>Loading</div>');
		} else {
			if( 'content' == changedAttrName ) {
				$('#' + blockAttributes.blockId + ' a').html( newAttrValue );
			} else {
				$('#' + blockAttributes.blockId + ' a').html( blockAttributes['content'] );
			}
			
		}
	}

	$('script[id^="PIN_"]').remove();
 	setTimeout(
 		function(){
 			var script = document.createElement("script");
 			script.src = "//assets.pinterest.com/js/pinit_main.js";
 			script.async = true;
 			script.defer = true;
 			script.id = 'pinblocks-loader-script';
 			document.body.appendChild(script);
 		},
 		500
 	);
 };
