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
import InputControl from "../../controls/inputcontrol/inputcontrol";

const Inspector = ({ attributes, setAttributes }) => {
	const { color, icon, iconSizes } = attributes;
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
				<InputControl
					label={__("Icon Size", "postkit-blocks")}
					value={iconSizes}
					attribute="iconSizes"
					setAttributes={setAttributes}
					min={1}
					max={200}
				/>
			</PanelBody>
		</InspectorControls>
	);
};
export default Inspector;
