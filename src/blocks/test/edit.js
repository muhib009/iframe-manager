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

const Edit = ({ attributes, setAttributes, clientId }) => {
	const { uniqueId, content, color } = attributes;

	// set unique id
	setAttributes({ uniqueId: `postkit-${clientId.slice(0, 8)}` });

	return (
		<Fragment>
			<style>
				{`
					.${uniqueId} .heading {
						color: ${color};
					}
				`}
			</style>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div
				{...useBlockProps({
					className: classnames(uniqueId),
				})}
			>
				<RichText
					tagName="h3"
					className={classnames("heading")}
					value={content}
					onChange={(v) => setAttributes({ content: v })}
					placeholder={__("write heading..", "postkit-blocks")}
				/>
			</div>
		</Fragment>
	);
};

export default Edit;
