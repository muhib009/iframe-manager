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
					className="ifm_iframe__wrapper"
					data-service="youtube"
					data-id={ytResourceID}
					// data-thumbnail={ytThumbnail.url}
					data-autoscale
				></div>
			)}

			{mediaType === 'twitch' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="twitch"
					data-id={twitchResourceID}
					data-autoscale
				></div>
			)}

			{mediaType === 'vimeo' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="vimeo"
					data-id={vmResourceID}
					// data-thumbnail={vmThumbnail.url}
					data-autoscale
				></div>
			)}

			{mediaType === 'dailymotion' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="dailymotion"
					data-id={dailyMotionResourceID}
					data-autoscale
				></div>
			)}

			{mediaType === 'googlemaps' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="googlemaps"
					data-id={gmResourceID}
					data-autoscale
				></div>
			)}
		</div>
	);
}
