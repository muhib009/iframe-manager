/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import classnames from "classnames";

// import icons
import svgicons from "../../helper/svgicons";

const Save = ({ attributes }) => {
	const { uniqueId, content, color, icon } = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: uniqueId,
			})}
		>
			<RichText.Content
				tagName="h3"
				className={classnames("heading")}
				value={content}
				style={{
					color,
				}}
			/>
			{icon && svgicons[icon]}
		</div>
	);
};

export default Save;
