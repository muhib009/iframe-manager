/**
 * WordPress dependencies
 */
import { useSelect } from "@wordpress/data";
import { RangeControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
/**
 * Internal dependencies
 */
import ResBtns from "../resbtns/resbtns";

// import style
import "./inputcontrol.scss";

const InputControl = ({ label, value, attribute, setAttributes, min, max }) => {
	// get selected preview device type
	const { deviceType } = useSelect((select) => {
		const { __experimentalGetPreviewDeviceType } = select("core/edit-post");
		return {
			deviceType: __experimentalGetPreviewDeviceType(),
		};
	}, []);

	return (
		<div className="postkit-blocks-input-control">
			<div className="control-header">
				<div className="input-label">
					<label htmlFor="input-control" className="label">
						{label}
					</label>
					<ResBtns />
				</div>
				<div className="input-units">
					<button
						onClick={() =>
							setAttributes({ [attribute]: { ...value, unit: "px" } })
						}
						className={`single-unit ${value.unit === "px" ? "active" : ""}`}
					>
						{__("px", "postkit-blocks")}
					</button>
					<button
						onClick={() =>
							setAttributes({ [attribute]: { ...value, unit: "%" } })
						}
						className={`single-unit ${value.unit === "%" ? "active" : ""}`}
					>
						{__("%", "postkit-blocks")}
					</button>
				</div>
			</div>
			<div className="control-body">
				{deviceType === "Desktop" && (
					<RangeControl
						beforeIcon="desktop"
						value={value.sizes.desktop}
						onChange={(v) =>
							setAttributes({
								[attribute]: {
									...value,
									sizes: {
										...value.sizes,
										desktop: v,
									},
								},
							})
						}
						min={min}
						max={max}
						help={
							__(`Icon Size on Dekstop:`, "postkit-blocks") +
							" " +
							value.sizes.desktop +
							value.unit
						}
					/>
				)}
				{deviceType === "Tablet" && (
					<RangeControl
						beforeIcon="tablet"
						value={value.sizes.tablet}
						onChange={(v) =>
							setAttributes({
								[attribute]: {
									...value,
									sizes: {
										...value.sizes,
										tablet: v,
									},
								},
							})
						}
						min={min}
						max={max}
						help={
							__(`Icon Size on Tablet:`, "postkit-blocks") +
							" " +
							value.sizes.tablet +
							value.unit
						}
					/>
				)}
				{deviceType === "Mobile" && (
					<RangeControl
						beforeIcon="smartphone"
						value={value.sizes.mobile}
						onChange={(v) =>
							setAttributes({
								[attribute]: {
									...value,
									sizes: {
										...value.sizes,
										mobile: v,
									},
								},
							})
						}
						min={min}
						max={max}
						help={
							__(`Icon Size on Mobile:`, "postkit-blocks") +
							" " +
							value.sizes.mobile +
							value.unit
						}
					/>
				)}
			</div>
		</div>
	);
};

export default InputControl;
