/**
 * WordPress dependencies
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * External dependencies
 */
import classnames from "classnames";

const Save = ({ attributes }) => {
	const {
		uniqueId,
		mediaType,
		ytThumbnail,
		ytResourceID,
		twitchResourceID,
		vmResourceID,
	} = attributes;
	return (
		<div
			{...useBlockProps.save({
				className: uniqueId,
			})}
		>
			{mediaType === "youtube" && (
				<div
					data-service={mediaType}
					data-id={ytResourceID}
					data-thumbnail={ytThumbnail.url}
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

			{/* {mediaType === "vimeo" && (
				<div data-service="vimeo" data-id={vmResourceID} data-autoscale></div>
			)} */}
		</div>
	);
};

export default Save;
