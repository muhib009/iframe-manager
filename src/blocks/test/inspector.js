/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Custom Controls
 */
import ColorControl from "../../controls/colorcontrol/colorcontrol";

const Inspector = ({ attributes, setAttributes }) => {
	const { color } = attributes;
	return (
		<InspectorControls>
			<PanelBody title={__("Settings", "postkit-blocks")}>
				<ColorControl
					label={__("Heading Color", "postkit-blocks")}
					value={color}
					attribute="color"
					setAttributes={setAttributes}
					disableAlpha={false}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
