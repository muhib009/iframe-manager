/**
 * WordPress dependencies
 */
import { ColorIndicator, Popover, ColorPicker } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

//import style
import "./colorcontrol.scss";

const ColorControl = ({
	label,
	value,
	attribute,
	setAttributes,
	disableAlpha,
}) => {
	const [visible, setVisible] = useState(false);

	return (
		<div className="postkit-blocks-color-wrapper">
			<div className="color-header">
				<label className="label" htmlFor="color-picker">
					{label}
				</label>
				<button className="color-indicator" onClick={() => setVisible(true)}>
					<ColorIndicator colorValue={value} />
				</button>
			</div>
			<div className="color-body" id="color-picker">
				{visible && (
					<Popover
						onFocusOutside={() => setVisible(false)}
						position="bottom left"
					>
						<div className="color-picker">
							<ColorPicker
								color={value}
								onChangeComplete={
									(v) => setAttributes({ [attribute]: v.hex }) // colorName= containerBg
								}
								disableAlpha={disableAlpha}
							/>
						</div>
						<button
							className="postkit-blocks-clear-btn"
							onClick={() => setAttributes({ [attribute]: "" })}
						>
							{__("Clear", "postkit-blocks")}
						</button>
					</Popover>
				)}
			</div>
		</div>
	);
};

export default ColorControl;
