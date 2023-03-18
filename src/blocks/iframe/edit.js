/**
 * WordPress dependencies
 */
import {
	RichText,
	useBlockProps,
	BlockControls,
} from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
import { ToolbarGroup, ToolbarButton } from "@wordpress/components";
/**
 * Internal dependencies
 */
import Inspector from "./inspector";

/**
 * External dependencies
 */
import classnames from "classnames";
import svgicons from "../../helper/svgicons";

//

const Edit = ({ attributes, setAttributes, clientId }) => {
	const {
		uniqueId,
		iconSizes,
		mediaType,
		ytResourceID,
		twitchResourceID,
		vmResourceID,
	} = attributes;
	// set unique id
	setAttributes({ uniqueId: `iframe-blocks-${clientId.slice(0, 8)}` });
	return (
		<Fragment>
			<style>
				{`
					@media (min-width: 1024px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.desktop}${iconSizes.unit};
							height: ${iconSizes.sizes.desktop}${iconSizes.unit};
						}
					}

					@media (min-width: 768px) and (max-width: 1023px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.tablet}${iconSizes.unit};
							height: ${iconSizes.sizes.tablet}${iconSizes.unit};
						}
					}

					@media (max-width: 767px) {
						.${uniqueId} svg {
							width: ${iconSizes.sizes.mobile}${iconSizes.unit};
							height: ${iconSizes.sizes.mobile}${iconSizes.unit};
						}
					}
				`}
			</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: uniqueId,
				})}
			>
				{mediaType === "youtube" && (
					<div
						data-service="youtube"
						data-id={ytResourceID}
						data-thumbnail="<path-to-image>"
						data-autoscale
					></div>
				)}

				{mediaType === "twitch" && (
					<div
						data-service="twitch"
						data-id={twitchResourceID}
						data-autoscale
					></div>
				)}

				{mediaType === "vimeo" && (
					<div data-service="vimeo" data-id={vmResourceID} data-autoscale></div>
				)}
			</div>
		</Fragment>
	);
};

export default Edit;
