/**
 * WordPress dependencies
 */
import { InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Import Controls
 */
import ColorControl from "../../controls/colorcontrol/colorcontrol";
import IconPicker from "../../controls/iconpicker/iconpicker";

const Inspector = ({ attributes, setAttributes }) => {
	const { color, icon } = attributes;
	return (
		<InspectorControls>
			<PanelBody
				title={__("Color Setting", "postkit-blocks")}
				initialOpen={false}
			>
				<ColorControl
					label={__("Content Color", "postkit-blocks")}
					value={color}
					attribute="color"
					setAttributes={setAttributes}
					disableAlpha={false}
				/>
			</PanelBody>
			<PanelBody
				title={__("Icon Setting", "postkit-blocks")}
				initialOpen={false}
			>
				<IconPicker
					label={__("Header Icon", "postkit-blocks")}
					value={icon}
					attribute="icon"
					setAttributes={setAttributes}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
