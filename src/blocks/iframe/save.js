// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		content,
		color,
		mediaType,
		ytResourceID,
		ytThumbnail,
		twitchResourceID,
		vmResourceID,
		vmThumbnail,
		dailyMotionResourceID,
		dailyMotionThumbnail,
		gmResourceID,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			{mediaType === 'youtube' && (
				<div
					data-service="youtube"
					data-id={ytResourceID}
					//data-thumbnail={ytThumbnail.url}
					data-autoscale
				></div>
			)}

			{mediaType === 'twitch' && (
				<div
					data-service="twitch"
					data-id={twitchResourceID}
					data-autoscale
				></div>
			)}

			{mediaType === 'vimeo' && (
				<div
					data-service="vimeo"
					data-id={vmResourceID}
					// data-thumbnail={vmThumbnail.url}
					data-autoscale
				></div>
			)}

			{mediaType === 'dailymotion' && (
				<div
					data-service="dailymotion"
					data-id={dailyMotionResourceID}
					data-autoscale
				></div>
			)}

			{mediaType === 'googlemaps' && (
				<div
					data-service="googlemaps"
					data-id={gmResourceID}
					data-autoscale
				></div>
			)}
		</div>
	);
}
