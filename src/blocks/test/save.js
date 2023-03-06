/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import classnames from "classnames";

const Save = ({ attributes }) => {
	const { uniqueId, content } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: classnames(uniqueId),
			})}
		>
			<RichText.Content
				tagName="h3"
				className={classnames("heading")}
				value={content}
			/>
		</div>
	);
};

export default Save;
