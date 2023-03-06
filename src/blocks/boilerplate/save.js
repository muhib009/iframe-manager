/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import classnames from "classnames";

const Save = ({ attributes }) => {
	const { content, color, icon } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<RichText.Content
				tagName="h3"
				className={classnames("heading")}
				value={content}
				style={{
					color,
				}}
			/>
			{icon && <i className={icon}></i>}
		</div>
	);
};

export default Save;
