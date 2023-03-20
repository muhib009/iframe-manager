// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		mediaType,
		ytResourceID,
		ytThumbnail,
		twitchResourceID,
		twitchParentName,
		vmResourceID,
		vmThumbnail,
		dailyMotionResourceID,
		dailyMotionThumbnail,
		gmResourceID,
		noticeText,
		loadVideoButton,
		hideWarningButton,
	} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			{ mediaType === 'youtube' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="youtube"
					data-yid={ ytResourceID }
					data-notice={ noticeText }
					data-loadbtn={ loadVideoButton }
					data-hidewarning={ hideWarningButton }
					//data-thumbnail={ ytThumbnail.url }
					data-autoscale
				></div>
			) }

			{ mediaType === 'twitch' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="twitch"
					data-tid={ twitchResourceID }
					data-parentname={ twitchParentName }
					data-notice={ noticeText }
					data-loadbtn={ loadVideoButton }
					data-hidewarning={ hideWarningButton }
					data-autoscale
				></div>
			) }

			{ mediaType === 'vimeo' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="vimeo"
					data-vid={ vmResourceID }
					data-notice={ noticeText }
					data-loadbtn={ loadVideoButton }
					data-hidewarning={ hideWarningButton }
					// data-thumbnail={vmThumbnail.url}
					data-autoscale
				></div>
			) }

			{ mediaType === 'dailymotion' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="dailymotion"
					data-did={ dailyMotionResourceID }
					data-notice={ noticeText }
					data-loadbtn={ loadVideoButton }
					data-hidewarning={ hideWarningButton }
					data-autoscale
				></div>
			) }

			{ mediaType === 'googlemaps' && (
				<div
					className="ifm_iframe__wrapper"
					data-service="googlemaps"
					data-id={ gmResourceID }
					data-notice={ noticeText }
					data-loadbtn={ loadVideoButton }
					data-hidewarning={ hideWarningButton }
					data-autoscale
				></div>
			) }
		</div>
	);
}
