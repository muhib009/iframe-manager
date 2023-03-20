import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	Button,
	ToolbarButton,
	TextareaControl,
} from '@wordpress/components';
const { Fragment } = wp.element;

// editor style
import './editor.scss';

// colors
import colors from '../../utilities/colors-palette';

export default function Edit( { attributes, setAttributes } ) {
	const {
		mediaType,
		ytResourceID,
		ytThumbnail,
		twitchResourceID,
		twitchParentName,
		vmResourceID,
		gmResourceID,
		gmapv2ResourceID,
		gmapv2API,
		vmThumbnail,
		dailyMotionResourceID,
		dailyMotionThumbnail,
		noticeText,
		loadVideoButton,
		hideWarningButton,
	} = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={ __( 'Media Settings', 'ifm-manager' ) }
					initialOpen={ true }
				>
					<SelectControl
						label="Select Media Type"
						value={ mediaType }
						options={ [
							{ label: 'Twitch', value: 'twitch' },
							{ label: 'Youtube', value: 'youtube' },
							{ label: 'Dailymotion', value: 'dailymotion' },
							{ label: 'Vimeo', value: 'vimeo' },
							{ label: 'Google Map v1', value: 'googlemaps' },
							{ label: 'Google Map v2', value: 'googlemapsv2' },
						] }
						onChange={ ( value ) =>
							setAttributes( { mediaType: value } )
						}
					/>

					{ mediaType === 'youtube' && (
						<TextControl
							label="Resource ID"
							value={ ytResourceID }
							onChange={ ( value ) =>
								setAttributes( {
									ytResourceID: value,
								} )
							}
						/>
					) }

					{ mediaType === 'youtube' &&
						( ytThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={ ytThumbnail.url }
									alt={
										ytThumbnail.alt
											? ytThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											ytThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={ ytThumbnail && ytThumbnail.id }
									render={ ( { open } ) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={ open }
											label="Edit"
											icon="edit"
										/>
									) }
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											ytThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={ ytThumbnail && ytThumbnail.id }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{ __( 'Add Image', 'ifm-manager' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) ) }

					{ mediaType === 'twitch' && (
						<>
							<TextControl
								label="Resource ID"
								value={ twitchResourceID }
								onChange={ ( value ) =>
									setAttributes( {
										twitchResourceID: value,
									} )
								}
							/>
							<TextControl
								label="Channel Name"
								value={ twitchParentName }
								onChange={ ( value ) =>
									setAttributes( {
										twitchParentName: value,
									} )
								}
							/>
						</>
					) }

					{ mediaType === 'vimeo' && (
						<TextControl
							label="Resource ID"
							value={ vmResourceID }
							onChange={ ( value ) =>
								setAttributes( {
									vmResourceID: value,
								} )
							}
						/>
					) }

					{ mediaType === 'vimeo' &&
						( vmThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={ vmThumbnail.url }
									alt={
										vmThumbnail.alt
											? vmThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											vmThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={ vmThumbnail && vmThumbnail.id }
									render={ ( { open } ) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={ open }
											label="Edit"
											icon="edit"
										/>
									) }
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											vmThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={ vmThumbnail && vmThumbnail.id }
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{ __( 'Add Image', 'ifm-manager' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) ) }

					{ mediaType === 'dailymotion' && (
						<TextControl
							label="Resource ID"
							value={ dailyMotionResourceID }
							onChange={ ( value ) =>
								setAttributes( {
									dailyMotionResourceID: value,
								} )
							}
						/>
					) }

					{ mediaType === 'dailymotion' &&
						( dailyMotionThumbnail ? (
							<div className="ifm-image-main">
								<img
									src={ dailyMotionThumbnail.url }
									alt={
										dailyMotionThumbnail.alt
											? dailyMotionThumbnail.alt
											: 'thumbnail'
									}
								/>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											dailyMotionThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={
										dailyMotionThumbnail &&
										dailyMotionThumbnail.id
									}
									render={ ( { open } ) => (
										<ToolbarButton
											className="ifm-edit-icon"
											onClick={ open }
											label="Edit"
											icon="edit"
										/>
									) }
								/>
							</div>
						) : (
							<MediaUploadCheck>
								<MediaUpload
									onSelect={ ( media ) =>
										setAttributes( {
											dailyMotionThumbnail: media,
										} )
									}
									allowedTypes={ [ 'image' ] }
									value={
										dailyMotionThumbnail &&
										dailyMotionThumbnail.id
									}
									render={ ( { open } ) => (
										<Button
											onClick={ open }
											variant="secondary"
											icon="upload"
											className="scb-image-upload-btn"
										>
											{ __( 'Add Image', 'ifm-manager' ) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) ) }

					{ mediaType === 'googlemaps' && (
						<TextControl
							label="Resource ID"
							value={ gmResourceID }
							onChange={ ( value ) =>
								setAttributes( {
									gmResourceID: value,
								} )
							}
						/>
					) }

					{ mediaType === 'googlemapsv2' && (
						<>
							<TextControl
								label="Location Name"
								value={ gmapv2ResourceID }
								onChange={ ( value ) =>
									setAttributes( {
										gmapv2ResourceID: value,
									} )
								}
							/>
							<TextControl
								label="API Key"
								value={ gmapv2API }
								onChange={ ( value ) =>
									setAttributes( {
										gmapv2ResourceID: value,
									} )
								}
							/>
						</>
					) }
				</PanelBody>
				<PanelBody
					title={ __( 'Notice Settings', 'ifm-manager' ) }
					initialOpen={ false }
				>
					<TextareaControl
						label="Notice"
						help="This content is hosted by a third party. By showing the external content you accept the terms and conditions of youtube.com."
						value={ noticeText }
						onChange={ ( value ) =>
							setAttributes( {
								noticeText: value,
							} )
						}
					/>

					<TextControl
						label="Load Video Button Text"
						value={ loadVideoButton }
						onChange={ ( value ) =>
							setAttributes( {
								loadVideoButton: value,
							} )
						}
					/>

					<TextControl
						label="Hide Notice Button Text"
						value={ hideWarningButton }
						onChange={ ( value ) =>
							setAttributes( {
								hideWarningButton: value,
							} )
						}
					/>
				</PanelBody>
			</InspectorControls>

			<div { ...useBlockProps() }>
				{ mediaType === 'youtube' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="youtube"
						data-yid={ ytResourceID }
						data-notice={ noticeText }
						data-loadbtn={ loadVideoButton }
						data-hidewarning={ hideWarningButton }
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
						data-gid={ gmResourceID }
						data-notice={ noticeText }
						data-loadbtn={ loadVideoButton }
						data-hidewarning={ hideWarningButton }
						data-autoscale
					></div>
				) }

				{ mediaType === 'googlemapsv2' && (
					<div
						className="ifm_iframe__wrapper"
						data-service="googlemapsv2"
						data-gmapid={ gmapv2ResourceID }
						data-api={ gmapv2API }
						data-notice={ noticeText }
						data-loadbtn={ loadVideoButton }
						data-hidewarning={ hideWarningButton }
						data-autoscale
					></div>
				) }
			</div>
		</Fragment>
	);
}
