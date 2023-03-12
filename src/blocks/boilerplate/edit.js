/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";
import { Fragment } from "@wordpress/element";
import { __ } from "@wordpress/i18n";
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
	const { uniqueId, content, color, icon, iconSizes } = attributes;
	// set unique id
	setAttributes({ uniqueId: `postkit-blocks-${clientId.slice(0, 8)}` });
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
				<RichText
					tagName="h3"
					className={classnames("heading")}
					value={content}
					onChange={(v) => setAttributes({ content: v })}
					placeholder={__("write heading..", "postkit-blocks")}
					style={{
						color,
					}}
				/>
				{icon && svgicons[icon]}
			</div>
		</Fragment>
	);
};

export default Edit;
