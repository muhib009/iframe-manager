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

const Edit = ({ attributes, setAttributes }) => {
	const { content, color, icon } = attributes;

	return (
		<Fragment>
			<Inspector attributes={attributes} setAttributes={setAttributes} />
			<div {...useBlockProps()}>
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
				{icon && <i className={icon}></i>}
			</div>
		</Fragment>
	);
};

export default Edit;
